import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const navigator = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigator(0);
  };

  return <div onClick={handleLogout}>LogOut</div>;
}

export default LogOut;
