import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("jwt_token") || sessionStorage.getItem("jwt_token");
  const expirationTime = localStorage.getItem("token_expiration");

  if (!token || (expirationTime && Date.now() > expirationTime)) {
    // If no token or the token has expired, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected route if the user is authenticated
}

export default ProtectedRoute;
