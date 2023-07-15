import "../styles/features.css";
import brand from "../assets/images/icon-brand-recognition.svg";
import detail from "../assets/images/icon-detailed-records.svg";
import custom from "../assets/images/icon-fully-customizable.svg";

const Features = () => {
  return (
    <div>
      <div className="features-con">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="columns">
          <div className="column-item">
            <div className="features-icon">
              <img src={brand} alt="brand-icon" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              {" "}
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="column-item">
            <div className="features-icon">
              <img src={detail} alt="detail-icon" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="column-item">
            <div className="features-icon">
              <img src={custom} alt="custom-icon" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
