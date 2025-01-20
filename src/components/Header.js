import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedUser } = useContext(userContext);
  // console.log(loggedUser);

  // Subscribe to the store
  cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <nav className="nav-items">
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
          <li>
            <Link className="list-style-to" to={"/cart"}>
              Cart - ({cartItems.length} Items)
            </Link>
          </li>
          <li>
            <Link className="list-style-to" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li className="list-style-to">
            OnlineStatus : {onlineStatus ? "🟢" : "🔴"}
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
          <li>{loggedUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
