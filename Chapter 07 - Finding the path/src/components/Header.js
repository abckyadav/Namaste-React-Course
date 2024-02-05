import { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginLogout, setLoginLogout] = useState("Login");

  const handleLoginLogout = () => {
    {
      loginLogout === "Login"
        ? setLoginLogout("Logout")
        : setLoginLogout("Login");
    }
  };
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <div className="logo">
            <img src={Logo} />
          </div>
        </Link>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
        <button className="login-btn" onClick={handleLoginLogout}>
          {loginLogout}
        </button>
      </div>
    </div>
  );
};

export default Header;
