import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <nav className="nav-items">
        <ul className="nav-items-list">
          <li className="list-style-to">
            OnlineStatus : {onlineStatus ? "🟢" : "🔴"}
          </li>
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
          <li>
            <Link className="list-style-to" to={"/cart"}>
              Cart
            </Link>
          </li>
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
      </nav>
    </header>
  );
};

export default Header;
