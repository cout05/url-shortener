import illustration from "../assets/images/illustration-working.svg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-con">
        <div className="tagline">
          <h1>More than just shorter links</h1>
          <p>
            {" "}
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button> Get Started</button>
        </div>
        <div className="img-con">
          <img src={illustration} alt="hero_img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
