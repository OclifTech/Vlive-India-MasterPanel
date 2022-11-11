import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddBlog from "./screens/Blogs/AddBlog";
import Header from "./Header";
// import Gallery from "./screens/Gallery";
import AddImage from "./screens/Gallery/AddImage";
import Landing from "./screens/Gallery/Landing/landing";
function App() {


  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
        <Routes>
          <Route exact path="/addblog" element={<AddBlog />} />
        </Routes>
        <Routes>
          <Route exact path="/addimage" element={<AddImage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
