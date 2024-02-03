import { useState } from "react";
import Logo from "../assets/logo.jpg";

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
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>About Us</li>
            <li>Contact Us</li>
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
