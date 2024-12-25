import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  // Check if token exists
  const token = localStorage.getItem("jwt_token") || sessionStorage.getItem("jwt_token");

  // Optional: also check expiration
  const expirationTime = localStorage.getItem("token_expiration") 
    || sessionStorage.getItem("token_expiration");

  // If token is present (and not expired), redirect away from login page
  if (token && expirationTime && Date.now() < +expirationTime) {
    // For example, navigate to "/login-home" or wherever you want
    return <Navigate to="/login-home" replace />;
  }

  // Otherwise, render the children (e.g., <LoginPage />)
  return children;
}

export default PublicRoute;
