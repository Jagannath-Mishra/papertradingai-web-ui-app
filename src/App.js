import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginHomePage from "./pages/LoginHomePage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./component/ProtectedRout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protect the '/login-home' route */}
        <Route
          path="/login-home"
          element={
            <ProtectedRoute>
              <LoginHomePage />
            </ProtectedRoute>
          }
        />
        {/* You can add more protected routes in a similar way */}
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
