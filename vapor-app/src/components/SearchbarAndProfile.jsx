import "./../styles/SearchbarAndProfile.css";
import SearchManga from "./SearchManga";
import menuIcon from "./../assets/images/menuForNav.png";
import { useContext } from "react";
import { globalContext } from "../context/context";

import NavigationProfile from "./NavigationProfile";

function SearchbarAndProfile() {
  const { navigationShow, setNavigationShow } = useContext(globalContext);

  function expandNav() {
    setNavigationShow(true);
  }
  return (
    <>
      <div className="searchbar-and-profile-section">
        {navigationShow ? (
          <div></div>
        ) : (
          <button onClick={expandNav}>
            <img
              className="searchbar-and-profile-section-menu-icon"
              src={menuIcon}
            />
          </button>
        )}

        <div className="searchbar-and-profile-section-container">
          <SearchManga />
          <NavigationProfile />
        </div>
      </div>
    </>
  );
}

export default SearchbarAndProfile;
