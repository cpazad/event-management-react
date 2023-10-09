import Header from "../../Components/Header/Header";

const CareerFair = () => {
  return (
    <div>
      <Header pageName="Career Fair"></Header>
      <div>
        <div className="hero my-10 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="public\edu_3.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="w-96">
              <h1 className="text-3xl font-bold">
                The Learning Revolution: Exploring Trends in Educational Events
              </h1>
              <p className="py-6 ">
                Be at the forefront of the learning revolution! Join us as we
                explore the latest trends in educational events, featuring
                discussions on innovative formats, engagement strategies, and
                the future of educational gatherings.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
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
            <img className="mask mask-squircle w-1/2" src="public\edu_1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFair;
