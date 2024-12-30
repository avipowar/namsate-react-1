import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className={`login-logout-btn ${
                loginLogoutBtn === "Login" ? "login" : "logout"
              }`}
              onClick={() => {
                loginLogoutBtn === "Login"
                  ? setLoginLogoutBtn("Logout")
                  : setLoginLogoutBtn("Login");
              }}
            >
              {loginLogoutBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
