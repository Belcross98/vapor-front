import { useNavigate } from "react-router-dom";
import { globalContext } from "../context/context";
import { useContext } from "react";

function LogOut() {
  const navigator = useNavigate();
  const { setIsLoggedIn } = useContext(globalContext);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigator("/");
  };

  return <div onClick={handleLogout}>LogOut</div>;
}

export default LogOut;
