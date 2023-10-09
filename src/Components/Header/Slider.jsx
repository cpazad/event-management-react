import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src="edu_1.jpg" />
      <div data-src="edu_4.jpg" />
      <div data-src="edu_3.jpg" />
    </AutoplaySlider>
  );
};

export default Slider;
