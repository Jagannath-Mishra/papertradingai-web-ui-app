import React, { useEffect, useState, navigate } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutButton from "../LogoutButton";
import Footer from "../includes/Footer";
import LeftMenu from "../includes/LeftMenu";
import MegaMenu from "../includes/MegaMenu";

const StockSearch = () => {
    
  const [user, setUser] = useState(null);

  // Search-related states
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // 1. Load external resources and fetch user data
  useEffect(() => {
    // Load Google Fonts
    const googleFont = document.createElement("link");
    googleFont.href = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700";
    googleFont.rel = "stylesheet";
    document.head.appendChild(googleFont);

    // Load Vendors CSS
    const vendorsStyle = document.createElement("link");
    vendorsStyle.href = "/assets/css/vendors.css";
    vendorsStyle.rel = "stylesheet";
    document.head.appendChild(vendorsStyle);

    // Load App CSS
    const appStyle = document.createElement("link");
    appStyle.href = "/assets/css/style.css";
    appStyle.rel = "stylesheet";
    document.head.appendChild(appStyle);

    // Load vendors.js
    const vendorsScript = document.createElement("script");
    vendorsScript.src = "/assets/js/vendors.js";
    vendorsScript.async = true;
    document.body.appendChild(vendorsScript);

    // Load app.js
    const appScript = document.createElement("script");
    appScript.src = "/assets/js/app.js";
    appScript.async = true;
    document.body.appendChild(appScript);

    // Retrieve user details from sessionStorage or localStorage
    const storedUser =
      sessionStorage.getItem("user_details") ||
      localStorage.getItem("user_details");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Cleanup on unmount
    return () => {
      document.head.removeChild(googleFont);
      document.head.removeChild(vendorsStyle);
      document.head.removeChild(appStyle);
      document.body.removeChild(vendorsScript);
      document.body.removeChild(appScript);
    };
  }, []);

  // 2. Fetch suggestions whenever searchTerm changes (and user is loaded)
  useEffect(() => {
    // If no user or search term is too short, clear suggestions
    if (!user || searchTerm.length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        // Use the user's API key if you store it in user.apiKey
        // const apiKey = user.apiKey || "YOUR_API_KEY";
        const apiKey = "047f2bcd17e1f22ffb3184469f8cdfc13991d53ad2ff07da71442a71d0ceaeb0"; // Replace with your actual logic or stored value

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

        const data = await response.json(); // expected { results: [] }
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

  // If no user found, show a fallback or prompt for login
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

                <header class="app-header top-bar">

                    <nav class="navbar navbar-expand-md">


                        <div class="navbar-header d-flex align-items-center">
                            <a href="javascript:void:(0)" class="mobile-toggle"><i class="ti ti-align-right"></i></a>
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" class="img-fluid logo-desktop" alt="logo" />
                                <img src="assets/img/logo-icon.png" class="img-fluid logo-mobile" alt="logo" />
                            </a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="ti ti-align-left"></i>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="navigation d-flex">
                                <ul class="navbar-nav nav-left">
                                    <li class="nav-item">
                                        <a href="javascript:void(0)" class="nav-link sidebar-toggle">
                                            <i class="ti ti-align-right"></i>
                                        </a>
                                    </li>

                                    <MegaMenu />

                                    <li class="nav-item full-screen d-none d-lg-block" id="btnFullscreen">
                                        <a href="javascript:void(0)" class="nav-link expand">
                                            <i class="icon-size-fullscreen"></i>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav nav-right ml-auto">
                                    <li class="nav-item dropdown">



                                        <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                            <ul>
                                                <li class="dropdown-header bg-gradient p-4 text-white text-left">Messages
                                                    <label class="label label-info label-round">6</label>
                                                    <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                        <span class="font-13"> Mark all as read</span></a>
                                                </li>
                                                <li class="dropdown-body">
                                                    <ul class="scrollbar scroll_dark max-h-240">
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <img class="img-fluid" src="assets/img/avtar/03.jpg" alt="user3" />
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Brianing Leyon</p>
                                                                        <small>You will sail along until you...</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user" />
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Jimmyimg Leyon</p>
                                                                        <small>Okay</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <img class="img-fluid" src="assets/img/avtar/02.jpg" alt="user2" />
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Brainjon Leyon</p>
                                                                        <small>So, make the decision...</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <img class="img-fluid" src="assets/img/avtar/04.jpg" alt="user4" />
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Smithmin Leyon</p>
                                                                        <small>Thanks</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <img class="img-fluid" src="assets/img/avtar/05.jpg" alt="user5" />
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Jennyns Leyon</p>
                                                                        <small>How are you</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <img class="img-fluid" src="assets/img/avtar/06.jpg" alt="user6" />
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Demian Leyon</p>
                                                                        <small>I like your themes</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-footer">
                                                    <a class="font-13" href="javascript:void(0)"> View All messages </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="ti ti-wallet"></i>
                                            <span class="notify">
                                                <span class="blink"></span>
                                                <span class="dot"></span>
                                            </span>
                                        </a>
                                        <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                                            <ul>
                                                <li class="dropdown-header bg-gradient p-4 text-white text-left"> RS. 10,00,000
                                                    <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                        <span class="font-13"> View all</span></a>
                                                </li>
                                                <li class="dropdown-body min-h-240 nicescroll">
                                                    <ul class="scrollbar scroll_dark max-h-240">
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <div class="bg-type bg-type-md">
                                                                            <span>HY</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">New registered user</p>
                                                                        <small>Just now</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <div class="bg-type bg-type-md bg-danger">
                                                                            <span>FR</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Server error report</p>
                                                                        <small>7 min</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <div class="bg-type bg-type-md bg-info">
                                                                            <span>HT</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Database report</p>
                                                                        <small>1 day</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <div class="notification d-flex flex-row align-items-center">
                                                                    <div class="notify-icon bg-img align-self-center">
                                                                        <div class="bg-type bg-type-md">
                                                                            <span>DE</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">Order confirmation</p>
                                                                        <small>2 day</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-footer">
                                                    <a class="font-13" href="javascript:void(0)"> View All Transaction
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link search" href="javascript:void(0)">
                                            <i class="ti ti-search"></i>
                                        </a>
                                        <div class="search-wrapper">
                                            <div class="close-btn">
                                                <i class="ti ti-close"></i>
                                            </div>
                                            <div class="search-content">
                                                <form>
                                                    <div class="form-group">
                                                        <i class="ti ti-search magnifier"></i>
                                                        <input type="text" class="form-control autocomplete" placeholder="Search Stock Here" id="autocomplete-ajax" autofocus="autofocus" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown user-profile">
                                        <a href="javascript:void(0)" class="nav-link dropdown-toggle " id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="assets/img/avtar/02.jpg" alt="avtar-img" />
                                            <span class="bg-success user-status"></span>
                                        </a>
                                        <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                            <div class="bg-gradient px-4 py-3">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="mr-1">
                                                        <h4 class="text-white mb-0">{user.firstName} {user.lastName}</h4>
                                                        <small class="text-white">{user.email}</small>
                                                    </div>
                                                    <a href="#" class="text-white font-20 tooltip-wrapper" data-toggle="tooltip" data-placement="top" title="" data-original-title="Logout">
                                                        <LogoutButton />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="p-4">
                                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                    <i class="fa fa-user pr-2 text-success"></i> Profile</a>
                                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                    <i class="ti ti-receipt pr-2 text-primary"></i> History
                                                    <span class="badge badge-primary ml-auto">6</span>
                                                </a>
                                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                    <i class=" ti ti-settings pr-2 text-info"></i> Settings
                                                </a>
                                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                                    <i class="fa fa-compass pr-2 text-warning"></i> Need help?</a>
                                                <div class="row mt-2">
                                                    <div class="col">
                                                        <a class="bg-light p-3 text-center d-block" href="#">
                                                            <i class="ti ti-wallet font-20 text-primary"></i>
                                                            <span class="d-block font-13 mt-2">My Wallet</span>
                                                        </a>
                                                    </div>
                                                    <div class="col">
                                                        <a class="bg-light p-3 text-center d-block" href="#">
                                                            <i class="ti ti-bag font-20 text-primary"></i>
                                                            <span class="d-block font-13 mt-2">My Portfolio</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>

                </header>

                 {/* Main container */}
        <div className="app-container">
          <LeftMenu />
          <div className="app-main" id="main">
            <div className="container-fluid">
              <div className="row">
                <div className="search-content" style={{ width: "100%" }}>
                  <h1 className="mb-4 text-center">Search for Stocks</h1>

                  {/* Search box */}
                  <div className="mb-4 search-box" style={{ position: "relative" }}>
                    <div className="input-group">
                      <input
                        type="text"
                        id="searchInput"
                        className="form-control rounded-start"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => {
                          if (suggestions.length > 0) setShowDropdown(true);
                        }}
                      />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary rounded-end" type="button">
                          <i className="ti ti-search"></i>
                        </button>
                      </div>
                    </div>

                    {/* Suggestions Dropdown */}
                    {showDropdown && suggestions.length > 0 && (
                      <div
                        className="dropdown-menu show"
                        style={{
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
