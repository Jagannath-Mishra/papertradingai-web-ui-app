import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginHomePage from "./pages/LoginHomePage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./component/ProtectedRout";
import PublicRoute from "./component/PublicRout";
import PageNew from "./pages/PageNew";
import StockSearch from "./pages/auth-pages/StockSearch";
import './App.css'; // Importing the CSS file
import StocDetails from "./pages/auth-pages/StocDetails";
import PortfolioPage from "./pages/auth-pages/PortfolioPage";
import WalletPage from "./pages/auth-pages/WalletPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Public route (login): If user is logged in, redirect to /login-home */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
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
         <Route path="/portfolio" element={<ProtectedRoute>  <PortfolioPage /> </ProtectedRoute>   }   />
         <Route path="/wallet" element={<ProtectedRoute>  <WalletPage /> </ProtectedRoute>   }   />
         <Route path="/stock-details/:symbol" element={<ProtectedRoute>  <StocDetails /> </ProtectedRoute>   }   />
         <Route
          path="/stock-search"
          element={
            <ProtectedRoute>
              <StockSearch />
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
