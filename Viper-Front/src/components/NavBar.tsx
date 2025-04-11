import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import LogOut from "./LogOut";
import SearchManga from "./SearchManga";
function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>
        <SearchManga />
        <div className="nav-right">
          {localStorage.getItem("accessToken") ? (
            <>
              <div>Hello {localStorage.getItem("username")}</div>
              <Link to="/">
                <LogOut />
              </Link>
            </>
          ) : (
            <>
              <Link to="/Register">Register</Link>
              <Link to="/Login">LogIn</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
