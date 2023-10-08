import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Default Login (With Email and Password)  
  const HandleLogIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Login with Google 
  const handleGoogleSignIn = () => {
    signInWithGoogle()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
}

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-[400px] ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="px-5 mx-3">
                <h3 className="text-left font-bold"> Login With </h3>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full my-2">
                    {" "}
                    <FaGoogle></FaGoogle> Google{" "}
                </button>
                <button className="btn btn-outline w-full">
                    {" "}
                    <FaGithub></FaGithub> GitHub{" "}
                </button>
            </div>
            <p className="mb-5 text-center text-sm text-gray-500">
              Do not Have an Account?{" "}
              <Link
                to="/registration"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
