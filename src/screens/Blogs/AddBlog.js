import axios from "axios";
import React from "react";
import { masterPanelConfig } from "../../config";
import JoditEditor from 'jodit-react';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const [data, setData] = React.useState({
    title: "",
    subtitle: "",
  });

  const [img, setImg] = React.useState("");
  const [desc , setDesc] = React.useState("");
  const [buttonTrue, setButton] = React.useState(false);
  const editor = React.useRef(null);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onChangeFile = (e) => {
    setImg(e.target.files[0]);
  };

  const onDescChange = (newDesc) =>{
    setDesc(newDesc);
  }



  const onSubmit = (e) => {
    e.preventDefault();
    setButton(true);
    const bodyFormData = new FormData();
    bodyFormData.set("key", "67407366455a442e74ee89bf786b67d9");
    bodyFormData.append("image", img);

    axios
      .post("https://api.imgbb.com/1/upload", bodyFormData)
      .then((res) => {
        const param = {
          img: res.data.data.url,
          title: data.title,
          subtitle: data.subtitle,
          desc: desc,
        };
        axios
          .post(`${masterPanelConfig.apiBaseUrl}/api/blog/newBlog`, param)
          .then((res) => {
            if (res) {
              alert("Blog Successfully Uploaded");
              setData({
                title: "",
                subtitle: "",
                desc: "",
              });
              setImg("");
              setButton(false);
              setDesc("");
            }
          })
          .catch((err) => {
            console.log(err);
            setButton(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setButton(false);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3 form-group">
          <label htmlFor="uploadImage" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="uploadImage"
            aria-describedby="imageHelp"
            name="img"
            value={data.value}
            required
            onChange={onChangeFile}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Blog Title"
            required
            onChange={onChange}
            name="title"
            value={data.title}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="subtitle" className="form-label">
            Sub Title
          </label>
          <input
            type="text"
            className="form-control"
            id="subtitle"
            placeholder="Enter Blog Sub  Title"
            value={data.value}
            required
            onChange={onChange}
            name="subtitle"
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <JoditEditor
            ref={editor}
            value={desc}
            onChange={onDescChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={buttonTrue}>
          {buttonTrue ? "Submiting..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
