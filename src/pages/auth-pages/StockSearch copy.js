import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../includes/Footer";
import LeftMenu from "../includes/LeftMenu";
import Header from "../includes/Header"; // Import the new Header component

const StockSearch = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // 1. Load external resources and fetch user data
  useEffect(() => {
    // Load external resources logic...
    const googleFont = document.createElement("link");
    googleFont.href = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700";
    googleFont.rel = "stylesheet";
    document.head.appendChild(googleFont);

    const vendorsStyle = document.createElement("link");
    vendorsStyle.href = "/assets/css/vendors.css";
    vendorsStyle.rel = "stylesheet";
    document.head.appendChild(vendorsStyle);

    const appStyle = document.createElement("link");
    appStyle.href = "/assets/css/style.css";
    appStyle.rel = "stylesheet";
    document.head.appendChild(appStyle);

    const vendorsScript = document.createElement("script");
    vendorsScript.src = "/assets/js/vendors.js";
    vendorsScript.async = true;
    document.body.appendChild(vendorsScript);

    const appScript = document.createElement("script");
    appScript.src = "/assets/js/app.js";
    appScript.async = true;
    document.body.appendChild(appScript);

    const storedUser =
      sessionStorage.getItem("user_details") ||
      localStorage.getItem("user_details");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    return () => {
      document.head.removeChild(googleFont);
      document.head.removeChild(vendorsStyle);
      document.head.removeChild(appStyle);
      document.body.removeChild(vendorsScript);
      document.body.removeChild(appScript);
    };
  }, []);

  // 2. Fetch suggestions when searchTerm changes
  useEffect(() => {
    if (!user || searchTerm.length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const apiKey = "047f2bcd17e1f22ffb3184469f8cdfc13991d53ad2ff07da71442a71d0ceaeb0";

        const response = await fetch(
          `http://localhost:8000/search?query=${encodeURIComponent(searchTerm)}&limit=10`,
          {
            method: "GET",
            headers: {
              "x-api-key": apiKey,
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch suggestions");
        }

        const data = await response.json();
        setSuggestions(data.results || []);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
        setShowDropdown(false);
      }
    };

    fetchSuggestions();
  }, [searchTerm, user]);

  if (!user) {
    return <p>Loading user info or not logged in...</p>;
  }

  return (
    <div class="app">
      <div class="app-wrap">

        <div class="loader">
          <div class="h-100 d-flex justify-content-center">
            <div class="align-self-center">
              <img src="assets/img/loader/loader.svg" alt="loader" />
            </div>
          </div>
        </div>

        <Header />

        {/* Main container */}
        <div className="app-container">
          <LeftMenu />
          <div className="app-main" id="main">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="search-content"
                  style={{
                    width: "50%",
                    margin: "0 auto", // Horizontal centering
                    display: "flex",  // Enable flexbox
                    justifyContent: "center", // Center horizontally within flexbox
                    alignItems: "center", // Center vertically within flexbox
                    height: "20vh", // Optional: To make the parent height full view height
                  }}
                >
                  <h1
                    className="text-center"
                    style={{
                      fontSize: "60px",
                      fontWeight: "bold",
                      color: "#4285f4",
                      marginBottom: "20px",
                    }}
                  >
                    Welcome, {user.firstName}!
                  </h1>
                  </div>
                  <div className="row">
                  {/* Search box */}
                  <div className="mb-5 search-box" style={{ position: "relative" }}>
                    <div className="input-group">
                      <input
                        type="text"
                        id="searchInput"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#ffffff",
                          borderRadius: "24px",
                          padding: "10px 20px",
                          width: "400px",
                          padding: "10px 20px",
                          boxShadow: "0 2px 5px hsl(0, 0.00%, 0.00%)",
                        }}
                        className="form-control"
                        placeholder="Search Stock Here..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => {
                          if (suggestions.length > 0) setShowDropdown(true);
                        }}
                      />
                     
                    </div>

                    {/* Suggestions Dropdown */}
                    {showDropdown && suggestions.length > 0 && (
                      <div
                        className="dropdown-menu show"
                        style={{
                          borderRadius: "1rem",
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          zIndex: 1000,
                        }}
                      >
                        {suggestions.map((item, idx) => (
                          <button
                            key={idx}
                            className="dropdown-item"
                            onClick={() => navigate(`/stock-details/${item.symbol}`)} // Navigate to stock details page
                          >
                            <strong>{item.symbol}</strong> — {item.companyName} ({item.lastPrice})
                          </button>
                        ))}


                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>


  );
};

export default StockSearch;
