import { useNavigate } from "react-router-dom";
import { useState } from "react";

//// BUTTON COMPONENT THAT SERVES AS LINK AND TAKES ROUTE, INNERTEXT AND CSS AS PROPS
function LinkButton({ route, linkInnerText, customStyle }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  function navigateFunc() {
    navigate(route);
  }

  //// DEFAULT LINK STYLE
  const defaultStyle = {
    color: isHovered ? "#fff" : "#aaa",
    cursor: "pointer",
    transition: "all 0.3s",
    width: "fit-content",
  };
  //// COMBINES DEFAULT LINK STYLE WITH GIVEN UNIQUE STYLE PASSED AS PROP
  const combinedStyle = {
    ...defaultStyle,
    ...customStyle,
  };

  return (
    <>
      <button
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigateFunc()}
      >
        {linkInnerText}
      </button>
    </>
  );
}

export default LinkButton;
