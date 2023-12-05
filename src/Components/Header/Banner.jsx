import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/4dfCFB2/graduation-cap-3430714-1280.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl font-bold">Elevate Learning Experiences: Mastering Education Events with Seamless Event Management!</h1>
          <p className="mb-5 text-blue-300 drop-shadow-lg">
          Educate to Celebrate: Crafting Unforgettable Learning Experiences!
          </p>
          <Link to="/login"><button className="btn btn-outline text-slate-400">Get Started</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
