import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import LogOut from "./LogOut";
import SearchManga from "./SearchManga";
import { useContext } from "react";
import { globalContext } from "../context/context";
import logo from "./../assets/images/logo.png";
import closeImage from "./../assets/images/close.png";
import LinkButton from "./LinkButton.jsx";

function Navbar() {
  const { isLoggedIn } = useContext(globalContext);

  return (
    <>
      <nav className="nav-section">
        <div className="nav-section-logo-and-collapse-button-container">
          <img className="nav-section-logo" src={logo} />
          <button>
            <img className="nav-section-collapse-button" src={closeImage} />
          </button>
        </div>
        <div className="nav-section-links-container">
          <LinkButton route={"/"} linkInnerText={"Home"} />
          <LinkButton route={"/About"} linkInnerText={"About"} />
        </div>
        <div>footer</div>
      </nav>
    </>
  );
}

export default Navbar;
