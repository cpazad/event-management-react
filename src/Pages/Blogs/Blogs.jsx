import React from "react";
import Blog from "./Blog";
import RightSidebar from "../../Components/Sidebar/RightSidebar";
import Header from "../../Components/Header/Header";

const Blogs = () => {
  return (
    <div>
      <Header pageName="Blogs"></Header>
      <div className="flex flex-col sm:flex-row">
        <div className="w-4/5">
          <Blog></Blog>
        </div>
        <div className="w-1/5">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
