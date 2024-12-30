import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../includes/Footer";
import LeftMenu from "../includes/LeftMenu";
import Header from "../includes/Header"; // Import the new Header component

const WalletPage = () => {
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
             
              <div class="summary-header">
                <div class="row">
                  <div class="col-md-3 text-center">
                    <p>Trading Balance</p>
                    <p class="summary-value">&#8377;0.09</p>
                  </div>
                  <div class="col-md-3 text-center">
                    <p>Available Cash <i class="fa fa-info-circle"></i></p>
                    <p class="summary-value">&#8377;0.09</p>
                  </div>
                  <div class="col-md-3 text-center">
                    <p>Margin from Pledge Holdings</p>
                    <p class="summary-value">&#8377;0.00</p>
                  </div>
                  <div class="col-md-3 text-center">
                    <button class="btn btn-custom">Withdraw</button>
                    <button class="btn btn-custom ml-2">Add Funds</button>
                  </div>
                </div>
              </div>


              <h5 class="mt-4">Trading Balance Breakup</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="half-donut-chart"></div>
                  <div class="chart-label">
                    <p class="amount-label">Amount Utilized</p>
                    <p class="amount-utilized">&#8377;0.00</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">Breakdown</div>
                    <div class="card-body">
                      <p><span class="amount-label">&#9632; Amount Added</span>: &#8377;0.09</p>
                      <p>Opening cash balance</p>
                      <p><span class="amount-utilized">&#9632; Amount Utilized</span>: &#8377;0.00</p>
                      <p>Trading Balance: &#8377;0.09</p>
                    </div>
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

export default WalletPage;
