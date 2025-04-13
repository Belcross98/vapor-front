import "./../styles/NavigationProfile.css";
import userIcon from "./../assets/images/userIcon.png";
import LinkButton from "./LinkButton";
import { useState } from "react";

function NavigationProfile() {
  const [showProfile, setShowProfile] = useState(false);

  function toggleShowProfile() {
    setShowProfile((prev) => !prev);
  }
  return (
    <>
      <button className="navigation-profile" onClick={toggleShowProfile}>
        <img className="navigation-profile-icon" src={userIcon} />
        {showProfile ? (
          <div className="navigation-profile-container">
            <img className="navigation-profile-icon" src={userIcon} />
            {localStorage.getItem("username") ?? "Quest"}
            <LinkButton route={"/Register"} linkInnerText={"Register"} />
            <LinkButton route={"/Login"} linkInnerText={"Login"} />
          </div>
        ) : (
          ""
        )}
      </button>
    </>
  );
}

export default NavigationProfile;
