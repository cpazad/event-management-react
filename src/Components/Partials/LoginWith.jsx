import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginWith = ({login}) => {
  const {handleGoogleSignIn} = login
    return (
    <div className="p-3">
      <h3 className="text-left font-bold"> Login With </h3>
      <button onClick={} className="btn btn-outline w-full my-2">
        {" "}
        <FaGoogle></FaGoogle> Google{" "}
      </button>
      <button className="btn btn-outline w-full">
        {" "}
        <FaGithub></FaGithub> GitHub{" "}
      </button>
    </div>
  );
};

export default LoginWith;
