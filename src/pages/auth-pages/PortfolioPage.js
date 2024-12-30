import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../includes/Footer";
import LeftMenu from "../includes/LeftMenu";
import Header from "../includes/Header"; // Import the new Header component

const PortfolioPage = () => {
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
            <div class="container my-5">

              <div class="overview-header mb-4 mt-5">
                <h3 class="text-center">Portfolio Overview</h3>
                <div class="d-flex justify-content-around mt-3">
                  <div>
                    <h5>Invested Amount</h5>
                    <p>₹ 0.00</p>
                  </div>
                  <div>
                    <h5>Current Value</h5>
                    <p>₹ 0.00</p>
                  </div>
                  <div>
                    <h5>Overall Gain</h5>
                    <p>₹ 0.00 (0%)</p>
                  </div>
                  <div>
                    <h5>Today's Gain</h5>
                    <p>₹ 0.00 (0%)</p>
                  </div>
                </div>
              </div>

              <div class="card mb-4">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5>Investment Summary</h5>
                    <div class="toggle-group">
                      <label>Investment Amt.</label>
                      <input type="checkbox" id="toggleMarketValue" />
                      <label>Market Value</label>
                    </div>
                  </div>

                  <table class="table table-bordered text-center">
                    <thead class="thead-light">
                      <tr>
                        <th>Type</th>
                        <th>Investment Amt.</th>
                        <th>Market Value</th>
                        <th>Overall G/L</th>
                        <th>Today's G/L</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Equity</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td><button class="btn btn-outline-primary">Get Started</button></td>
                      </tr>
                      <tr>
                        <td>Mutual Funds</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td><button class="btn btn-outline-primary">Start SIP</button></td>
                      </tr>
                      <tr>
                        <td>SGB</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td><button class="btn btn-outline-primary">Get Started</button></td>
                      </tr>
                      <tr>
                        <td>Bonds</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td>₹ 0.00</td>
                        <td><button class="btn btn-outline-primary">Get Started</button></td>
                      </tr>
                    </tbody>
                  </table>
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

export default PortfolioPage;
