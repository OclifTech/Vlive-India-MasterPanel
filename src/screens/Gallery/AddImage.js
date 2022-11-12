import axios from "axios";
import React from "react";
import { masterPanelConfig } from "../../config";

const AddImage = () => {
  const [image, setImage] = React.useState("");
  const [uploadImg, setUploadImg] = React.useState("");
  const [buttonTrue , setButton] = React.useState(false)

  const onChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setUploadImg(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setButton(true);
    const bodyFormData = new FormData();
    bodyFormData.set("key", "67407366455a442e74ee89bf786b67d9");
    bodyFormData.append("image", uploadImg);

    axios
      .post("https://api.imgbb.com/1/upload", bodyFormData)
      .then((res) => {
        console.log("res", res.data.data.url);
        const data = {
            img :  res.data.data.url
        }

        axios.post(`${masterPanelConfig.apiBaseUrl}/api/image/newimage` , data).then(res=>{
            if(res){
              setImage("");
              setUploadImg("");
                alert("Image Successfully Upload");
                setUploadImg("")
                setButton(false);
            }
        })
        .catch(err=>{
            console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="text-center">
          {image && (
            <img
              src={image}
              alt=""
              className="w-50"
              height={"400px"}
            />
          )}
        </div>
        <div className="form-group my-3">
          <label className="mb-3">Choose Gallery Image</label>
          <input
            type={"file"}
            name={"galleryImg"}
            className="form-control"
            required
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={buttonTrue}>
         {buttonTrue ?  "Submiting..." : "Add Image"}
        </button>
      </form>
    </div>
  );
};

export default AddImage;
