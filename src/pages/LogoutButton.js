import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
// Remove JWT token and expiration time from localStorage/sessionStorage
  localStorage.removeItem("jwt_token");
  localStorage.removeItem("token_expiration");
  sessionStorage.removeItem("jwt_token");

    // Redirect the user to the login page or home page
    navigate("/login");  // You can redirect to "/login-home" or any other route
  };

  return (
    
<i class="zmdi zmdi-power" onClick={handleLogout}></i>
  );
}

export default LogoutButton;
