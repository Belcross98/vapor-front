import "../styles/NavBar.css";
import { useContext } from "react";
import { globalContext } from "../context/context";
import logo from "./../assets/images/logo.png";
import closeImage from "./../assets/images/close.png";
import LinkButton from "./LinkButton.jsx";

function Navbar() {
  const { isLoggedIn, navigationShow, setNavigationShow } =
    useContext(globalContext);

  function collapseNav() {
    setNavigationShow(false);
  }

  return (
    <>
      <nav className={navigationShow ? "nav-section" : "nav-section collapse"}>
        <div className="nav-section-logo-and-collapse-button-container">
          <img className="nav-section-logo" src={logo} />
          <button onClick={collapseNav}>
            <img className="nav-section-collapse-button" src={closeImage} />
          </button>
        </div>
        <div className="nav-section-links-and-footer-container">
          <div className="nav-section-links-container">
            <LinkButton route={"/"} linkInnerText={"Home"} />
            <LinkButton route={"/About"} linkInnerText={"About"} />
          </div>
          <div className="nav-section-footer">&#169; 2025. Vapor </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
