import { useState } from "react";
import logo from "../assets/images/logo.svg";
import "../styles/header.css";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <header>
        <div className="links-container">
          <img src={logo} alt="logo" />
          <div className="links">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </div>
        </div>
        <div>
          <AiOutlineMenu className="menu" onClick={handleClick} />
        </div>

        <div className="links">
          <li>
            <a href="#">Login</a>
          </li>
          <li className="sign-up">
            <a href="#">Sign Up</a>
          </li>
        </div>
      </header>
      {isClicked && (
        <div className="mobile-nav">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <div></div>
          <li>
            <a href="#">Login</a>
          </li>
          <li className="sign-up">
            <a href="#">Sign Up</a>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
