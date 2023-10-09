import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Bloglist = () => {
  const [bloglist, setBloglist] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBloglist(data));
  }, []);
  return (
    <div>
      <h3 className="p-5 bg-slate-400 font-bold"> Blog List </h3>
      <div className="join join-vertical w-full">
        {bloglist.map((blog) => (
          <NavLink key={blog.id} to="/">
            <button className="btn join-item w-full bg-transperent text-black capitalize font">
            {blog.title}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
