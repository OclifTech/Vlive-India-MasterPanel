import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className=" bg-dark d-flex justify-content-center align-items-center flex-column"
      style={{ height: "92.4vh" }}
    >
        <div className="d-flex justify-content-around align-items-center gap-5 ">
            <h2 className="text-light">Click here to add Blog</h2>
            <Link to="addblog" ><button className="btn btn-primary px-2 py-1">Add Blog</button> </Link>
        </div>
        <div className="d-flex justify-content-around align-items-center gap-5">
            <h2 className="text-light">Click here to add Image</h2>
            <Link to="addimage" ><button className="btn btn-primary px-2 py-1">Add Image</button> </Link>
        </div>
    </div>
  );
};

export default Landing;
