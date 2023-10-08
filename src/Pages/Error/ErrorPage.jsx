import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="py-6">
            The page you are looking for might have been removed or deleted. or remaned or temporarily unavailable
          </p>
          <Link to="/"><button className="btn btn-primary">Get to Home Page </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
