import { content, description, store } from "../assets";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <p className="heading">
        <img src={content} alt="content" />
      </p>
      <p>
        <img src={description} alt="description" />
      </p>
      <p>
        <img src={store} alt="store" />
      </p>
    </div>
  );
};

export default Hero;
