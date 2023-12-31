import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const HandleRegistration = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const photo = formData.get("photo");
    const password = formData.get("password");
    console.log(name, email, photo, password);

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "Minimum six characters, at least one letter, one number and one special character"
      );
    } else {
      createUser(email, password)
        .then((result) => {
          handleUpdateProfile(name, photo);
          console.log(result.user);
          toast("Registration Successful");
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            "Minimum six characters, at least one letter, one number and one special character"
          );
        });
    }
  };
  return (
    <div>
      <Helmet>
        <title> The Professor | Registration </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col sm:w-[800px] ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
          </div>
          <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleRegistration} className="card-body">
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Full Name </span>
                </label> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Photo Url</span>
                </label> */}
                <input
                  type="text"
                  name="photo"
                  placeholder="Insert Your photo Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Email</span>
                </label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Password</span>
                </label> */}
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-neutral"> Register </button>
              </div>
            </form>
            <p className="mb-5 text-center text-sm text-gray-500">
              Have an Account already?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
