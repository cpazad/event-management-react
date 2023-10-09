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
      <div data-src="public\Edu_1.jpg" />
      <div data-src="public\Edu_4.jpg" />
      <div data-src="public\Edu_3.jpg" />
    </AutoplaySlider>
  );
};

export default Slider;
