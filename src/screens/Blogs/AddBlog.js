import axios from "axios";
import React from "react";
import { masterPanelConfig } from "../../config";

const AddBlog = () => {
  const [data, setData] = React.useState({
    title: "",
    subtitle: "",
    desc: "",
  });

  const [img, setImg] = React.useState("");
  const [buttonTrue, setButton] = React.useState(false);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onChangeFile = (e) => {
    setImg(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setButton(true);
    const bodyFormData = new FormData();
    bodyFormData.set("key", "67407366455a442e74ee89bf786b67d9");
    bodyFormData.append("image", img);

    axios
      .post("https://api.imgbb.com/1/upload", bodyFormData)
      .then((res) => {
        console.log("res", res.data.data.url);
        const param = {
          img: res.data.data.url,
          title: data.title,
          subtitle: data.subtitle,
          desc: data.desc,
        };

        axios
          .post(`${masterPanelConfig.apiBaseUrl}/api/blog/newBlog`, param)
          .then((res) => {
            if (res) {
              alert("Blog Successfully Upload");
              setData({
                title: "",
                subtitle: "",
                desc: "",
              });
              setImg("");
              setButton(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
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
            required
            onChange={onChange}
            name="subtitle"
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Blog Description"
            required
            onChange={onChange}
            name="desc"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={buttonTrue}>
         {buttonTrue ?  "Submiting..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
