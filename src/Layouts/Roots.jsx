import { Outlet } from "react-router-dom";
import "./Roots.css";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Roots = () => {
  return (
    <div className="root-container bg-white">
      <Navbar></Navbar>
      <ToastContainer />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
