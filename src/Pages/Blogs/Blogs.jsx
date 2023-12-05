
import Blog from "./Blog";
import RightSidebar from "../../Components/Sidebar/RightSidebar";
import Header from "../../Components/Header/Header";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title> The Professor | Blogs </title>
      </Helmet>
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
