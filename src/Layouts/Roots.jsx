import { Outlet } from "react-router-dom";
import "./Roots.css";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Roots = () => {
  return (
    <div className="root-container bg-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
