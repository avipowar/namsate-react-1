import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          <li>
            <Link className="list-style-to" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="list-style-to" to={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="list-style-to" to={"/contact"}>
              Contact Us
            </Link>
          </li>
          <li className="list-style-to">Cart</li>
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
