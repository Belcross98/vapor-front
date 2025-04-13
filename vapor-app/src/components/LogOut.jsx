import { useNavigate } from "react-router-dom";
import { globalContext } from "../context/context";
import { useContext, useState } from "react";

function LogOut() {
  const [isHovered, setIsHovered] = useState(false);
  const navigator = useNavigate();
  const { setIsLoggedIn } = useContext(globalContext);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigator("/");
  };

  const defaultStyle = {
    color: isHovered ? "#fff" : "#aaa",
    cursor: "pointer",
    transition: "all 0.3s",
    width: "fit-content",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={defaultStyle}
      onClick={handleLogout}
    >
      LogOut
    </div>
  );
}

export default LogOut;
