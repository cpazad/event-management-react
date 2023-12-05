import { Helmet } from "react-helmet-async";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Header/Slider";

const About = () => {
  return (
    <div>
      <Helmet>
        <title> The Professor | About </title>
      </Helmet>
        <Header pageName="About"></Header>
      <div className="pb-10">
        <Slider></Slider>
      </div>
      <div>
        <div className="hero my-10 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-96">
              <h1 className="text-3xl font-bold">
              Educate to Elevate: A Conference on Empowering Minds
              </h1>
              <p className="py-6 ">
              Empower minds and transform lives at the Educate to Elevate conference. This event is dedicated to sharing empowering educational practices that uplift individuals, communities, and society as a whole. Join us in shaping a brighter future through education.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <img className="mask mask-squircle w-1/2" src="edu_4.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
