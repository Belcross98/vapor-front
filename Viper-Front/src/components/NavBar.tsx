import { Link } from "react-router-dom";
import "./NavBar.css";
import LogOut from "./LogOut";
function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>
        <form>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search for a manga..."
          />
          <button type="submit">Search</button>
        </form>
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
