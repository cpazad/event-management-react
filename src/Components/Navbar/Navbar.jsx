import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then(
      toast("Logout Successful")
    ).catch();
  };

  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/about"> About </NavLink>
      </li>
      {user && (
        <>
          <li>
            {" "}
            <NavLink to="/careerfair"> Career Fair </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/blogs"> Blogs </NavLink>
          </li>
        </>
      )}

      {/* <li>
        {" "}
        <NavLink to="/login"> login </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/registration"> Registration </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-neutral-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"> The Professor </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
      {user && (
            <>
              <div className="flex justify-center items-center">
                <p>Welcome! {user.displayName}</p>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
              </div>

              <Link to="/mycart">
                <a className="btn btn-sm btn-outline border-black text-black rounded-sm mr-2">
                  {" "}
                  <FaCartArrowDown></FaCartArrowDown>{" "}
                </a>
              </Link>
            </>
          )}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn rounded-sm btn-sm btn-outline"
          >
            {" "}
            Log Out{" "}
          </button>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn rounded-sm btn-sm btn-outline">
              {" "}
              Log In{" "}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
