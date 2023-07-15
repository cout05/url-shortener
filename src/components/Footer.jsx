import "../styles/footer.css";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div>
      <div className="bottom">
        <div className="boost-link">
          <h2>Boost your links today</h2>
          <button> Get Started</button>{" "}
        </div>

        <footer>
          <div className="logo-con">
            <h2>Shortly</h2>
          </div>

          <div className="right">
            <div className="footer-links">
              <div>
                {" "}
                <h4>Features Link</h4>
                <a href="#">Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#"> Analytics</a>
              </div>

              <div>
                <h4>Resources</h4>
                <a href="#">Blog</a>
                <a href="#"> Developers</a>
                <a href="#">Support</a>
              </div>

              <div>
                <h4> Company</h4>
                <a href="#"> About</a>
                <a href="#"> Our Team</a>
                <a href="#"> Careers</a>
                <a href="#"> Contact</a>
              </div>
            </div>

            <div className="icons-con">
              <img src={facebook} alt="facebook-icon" />
              <img src={instagram} alt="instagram-icon" />
              <img src={pinterest} alt="pinterest-icon" />
              <img src={twitter} alt="twitter-icon" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
