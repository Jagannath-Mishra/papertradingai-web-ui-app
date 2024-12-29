import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom"; // Import to get URL parameters
import LogoutButton from "../LogoutButton";
import Footer from "../includes/Footer";
import LeftMenu from "../includes/LeftMenu";
import MegaMenu from "../includes/MegaMenu";

const StocDetails = () => {
    const [user, setUser] = useState(null);
    const { symbol } = useParams(); // Get stock symbol from the URL

    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // UseEffect to dynamically load external styles and scripts
    useEffect(() => {

        // Load Google Fonts
        const googleFont = document.createElement("link");
        googleFont.href =
            "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700";
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

        return () => {
            // Clean up: remove dynamically added elements
            document.head.removeChild(googleFont);
            document.head.removeChild(vendorsStyle);
            document.head.removeChild(appStyle);
            document.body.removeChild(vendorsScript);
            document.body.removeChild(appScript);
        };
    }, []);

    useEffect(() => {
        // Retrieve user details from sessionStorage or localStorage
        const storedUser =
            sessionStorage.getItem("user_details") ||
            localStorage.getItem("user_details");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    useEffect(() => {
        // Fetch stock details from the API
        const fetchStockDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/details/${symbol}`, {
                    headers: {
                        accept: "application/json",
                        "x-api-key": "047f2bcd17e1f22ffb3184469f8cdfc13991d53ad2ff07da71442a71d0ceaeb0",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setStockData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStockDetails();
    }, [symbol]);

    if (loading) {
        return <p>Loading stock information...</p>;
    }

    if (error) {
        return <p>Error fetching stock details: {error}</p>;
    }

    // If no user found, show a fallback or prompt the user to log in
    if (!user) {
        return <p>Loading user info or not logged in...</p>;
    }

    return (
        <div class="app">
            <div class="app-wrap">
                {/* <div class="loader">
                    <div class="h-100 d-flex justify-content-center">
                        <div class="align-self-center">
                            <img src="../assets/img/loader/loader.svg" alt="loader" />
                        </div>
                    </div>
                </div> */}
                <header class="app-header top-bar">

                    <nav class="navbar navbar-expand-md">


                        <div class="navbar-header d-flex align-items-center">
                            <a href="javascript:void:(0)" class="mobile-toggle"><i class="ti ti-align-right"></i></a>
                            <a class="navbar-brand" href="index.html">
                                <img src="../assets/img/logo.png" class="img-fluid logo-desktop" alt="logo" />
                                <img src="../assets/img/logo-icon.png" class="img-fluid logo-mobile" alt="logo" />
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
                                                                        <img class="img-fluid" src="../assets/img/avtar/03.jpg" alt="user3" />
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
                                                                        <img class="img-fluid" src="../assets/img/avtar/01.jpg" alt="user" />
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
                                                                        <img class="img-fluid" src="../assets/img/avtar/02.jpg" alt="user2" />
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
                                                                        <img class="img-fluid" src="../assets/img/avtar/04.jpg" alt="user4" />
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
                                                                        <img class="img-fluid" src="../assets/img/avtar/05.jpg" alt="user5" />
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
                                                                        <img class="img-fluid" src="../assets/img/avtar/06.jpg" alt="user6" />
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
                                                <li class="dropdown-header bg-gradient p-4 text-white text-left">Notifications
                                                    <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                        <span class="font-13"> Clear all</span></a>
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
                                                                        <div class="bg-type bg-type-md bg-success">
                                                                            <span>GM</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="notify-message">
                                                                        <p class="font-weight-bold">New invoice received</p>
                                                                        <small>22 min</small>
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
                                                    <a class="font-13" href="javascript:void(0)"> View All Notifications
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
                                                        <input type="text" class="form-control autocomplete" placeholder="Search Here" id="autocomplete-ajax" autofocus="autofocus" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown user-profile">
                                        <a href="javascript:void(0)" class="nav-link dropdown-toggle " id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="../assets/img/avtar/02.jpg" alt="avtar-img" />
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
                                                    <i class="fa fa-envelope pr-2 text-primary"></i> Inbox
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
                                                            <i class="fe fe-mail font-20 text-primary"></i>
                                                            <span class="d-block font-13 mt-2">My messages</span>
                                                        </a>
                                                    </div>
                                                    <div class="col">
                                                        <a class="bg-light p-3 text-center d-block" href="#">
                                                            <i class="fe fe-plus font-20 text-primary"></i>
                                                            <span class="d-block font-13 mt-2">Compose new</span>
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

                <div class="app-container">

                    <LeftMenu />

                    <div class="app-main" id="main">

                        <div class="container-fluid">
                            <div class="header mb-4 text-center">
                                <h1 class="bg-primary text-white">{stockData.companyName} Stock Details</h1>
                            </div>

                            <div class="col-12 mb-30">
                                <div class="card card-statistics">
                                    <div class="card-header bg-secondary text-white">
                                        <h4 class="card-title">Stock Information</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="card h-100">
                                                    <div class="card-body ">
                                                        <h4 class="card-title ">General Information</h4>
                                                        <p><strong>Company Name:</strong> {stockData?.companyName || "N/A"}</p>
                                                        <p><strong>Stock Symbol:</strong> {stockData?.symbol || "N/A"}</p>
                                                        <p><strong>Last Price:</strong> {stockData?.lastPrice || "N/A"}</p>
                                                        <p><strong>ISIN:</strong> {stockData?.additionalInfo?.metadata?.isin || "N/A"}</p>
                                                        <p><strong>Series:</strong> {stockData?.additionalInfo?.metadata?.series || "N/A"}</p>
                                                        <p><strong>Listing Date:</strong> {stockData?.additionalInfo?.metadata?.listingDate || "N/A"}</p>
                                                        <p><strong>Status:</strong> {stockData?.additionalInfo?.metadata?.status || "N/A"}</p>
                                                        <p><strong>Trading Segment:</strong> {stockData?.additionalInfo?.securityInfo?.tradingSegment || "N/A"}</p>
                                                        <p><strong>Face Value:</strong> &#8377;{stockData?.additionalInfo?.securityInfo?.faceValue || "N/A"}</p>
                                                        <p><strong>Issued Size:</strong> {stockData?.additionalInfo?.securityInfo?.issuedSize || "N/A"}</p>



                                                        <button class="btn btn-square btn-inverse-primary float-end" data-toggle="modal" data-target="#defaultModal">Buy Now</button>

                                                        <div class="modal fade" id="defaultModal" tabindex="-1" role="dialog" aria-labelledby="defaultModal" aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title">Place Stock Buy Order</h5>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div class="card">
                                                                            <div class="card-header bg-light d-flex justify-content-between">
                                                                                <h5 class="mb-0">{stockData.companyName}</h5>
                                                                                <div>
                                                                                    <span class="text-danger">{stockData?.lastPrice || "N/A"}</span>
                                                                                    <small class="text-muted"> (-38.52%)</small>
                                                                                </div>
                                                                            </div>
                                                                            <div class="card-body">
                                                                                <ul class="nav nav-tabs mb-3" id="orderTypeTab" role="tablist">
                                                                                    <li class="nav-item">
                                                                                        <a class="nav-link active" id="regular-tab" data-toggle="tab" href="#regular" role="tab">Regular</a>
                                                                                    </li>

                                                                                </ul>

                                                                                <div class="tab-content">
                                                                                    <div class="tab-pane fade show active" id="regular" role="tabpanel">
                                                                                        <form>
                                                                                            <div class="form-row">
                                                                                                <div class="form-group col-md-6">
                                                                                                    <label for="productType">Product Type</label>
                                                                                                    <div class="btn-group btn-group-toggle d-flex" data-toggle="buttons">
                                                                                                        <label class="btn btn-outline-primary active">
                                                                                                            <input type="radio" name="productType" id="intraday" checked /> Intraday
                                                                                                        </label>
                                                                                                        <label class="btn btn-outline-primary">
                                                                                                            <input type="radio" name="productType" id="carryforward" /> Carry Forward
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="form-group col-md-3">
                                                                                                    <label for="lots">Qty</label>
                                                                                                    <input type="number" class="form-control" id="qty" placeholder="1" />

                                                                                                </div>

                                                                                                <div class="form-group col-md-3">
                                                                                                    <label for="price">Price</label>
                                                                                                    <input type="text" class="form-control" id="price" value={stockData?.lastPrice || 0.0} />
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="form-group">
                                                                                                <label>Price Type</label>
                                                                                                <div class="btn-group btn-group-toggle d-flex" data-toggle="buttons">
                                                                                                    <label class="btn btn-outline-primary ">
                                                                                                        <input type="radio" name="priceType" id="limit" /> Limit
                                                                                                    </label>
                                                                                                    <label class="btn btn-outline-primary active">
                                                                                                        <input type="radio" name="priceType" id="market" checked /> Market
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="form-group">
                                                                                                <label for="slTriggerPrice">SL Trigger Price</label>
                                                                                                <div class="input-group">
                                                                                                    <input type="number" class="form-control" id="slTriggerPrice" placeholder="0" />
                                                                                                    <div class="input-group-append">
                                                                                                        <span class="input-group-text">%</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <br />
                                                                                                <label for="slTriggerPrice" >Take Profit Trigger Price</label>
                                                                                                <div class="input-group">
                                                                                                    <input type="number" class="form-control" id="tpTriggerPrice" placeholder="0" />
                                                                                                    <div class="input-group-append">
                                                                                                        <span class="input-group-text">%</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                           

                                                                                            <div class="d-flex justify-content-between">
                                                                                                <div>
                                                                                                    <p class="mb-0"><strong>Available Funds:</strong> ₹100000.09</p>
                                                                                                    <p><strong>Total Charges:</strong> ₹0</p>
                                                                                                </div>
                                                                                                <button type="submit" class="btn btn-primary btn-lg">Place Buy Order</button>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="card h-100">
                                                    <div class="card-body">
                                                        <h4 class="card-title">Industry Information</h4>
                                                        <p><strong>Macro:</strong> {stockData?.additionalInfo?.industryInfo?.macro || "N/A"}</p>
                                                        <p><strong>Sector:</strong> {stockData?.additionalInfo?.industryInfo?.sector || "N/A"}</p>
                                                        <p><strong>Industry:</strong> {stockData?.additionalInfo?.industryInfo?.industry || "N/A"}</p>
                                                        <p><strong>Basic Industry:</strong> {stockData?.additionalInfo?.industryInfo?.basicIndustry || "N/A"}</p>
                                                        <p>
                                                            <strong>Part of Indices:</strong>{" "}
                                                            {stockData?.additionalInfo?.metadata?.pdSectorIndAll?.join(", ") || "N/A"}
                                                        </p>
                                                        <p>Data as of {stockData?.additionalInfo?.metadata?.lastUpdateTime || "N/A"}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mb-30">
                                <div class="card card-statistics">
                                    <div class="card-header bg-secondary text-white">
                                        <h4 class="card-title">Financial Information</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="card h-100">
                                                    <div class="card-body">
                                                        <h4 class="card-title"> Price Information </h4>
                                                        <p><strong>Open Price:</strong> &#8377;{stockData?.additionalInfo?.priceInfo?.open || "N/A"}</p>
                                                        <p><strong>Previous Close:</strong> &#8377;{stockData?.additionalInfo?.priceInfo?.previousClose || "N/A"}</p>
                                                        <p><strong>Change:</strong> &#8377;{stockData?.additionalInfo?.priceInfo?.change || "N/A"}</p>
                                                        <p>
                                                            <strong>% Change:</strong> {stockData?.additionalInfo?.priceInfo?.pChange?.toFixed(2) || "N/A"}%
                                                        </p>
                                                        <p>
                                                            <strong>High/Low (Intraday):</strong> &#8377;{stockData?.additionalInfo?.priceInfo?.intraDayHighLow?.max || "N/A"} / &#8377;
                                                            {stockData?.priceInfo?.intraDayHighLow?.min || "N/A"}
                                                        </p>
                                                        <p>
                                                            <strong>52 Week High/Low:</strong> &#8377;{stockData?.additionalInfo?.priceInfo?.weekHighLow?.max || "N/A"} / &#8377;
                                                            {stockData?.priceInfo?.weekHighLow?.min || "N/A"}
                                                        </p>
                                                        <p><strong>VWAP:</strong> &#8377;{stockData?.additionalInfo?.priceInfo?.vwap || "N/A"}</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="card h-100">
                                                    <div class="card-body">
                                                        <h4 class="card-title">Pre-Open Market</h4>
                                                        <p><strong>IEP (Indicative Equilibrium Price):</strong> &#8377;{stockData?.additionalInfo?.preOpenMarket?.IEP || "N/A"}</p>
                                                        <p><strong>Total Traded Volume:</strong> {stockData?.additionalInfo?.preOpenMarket?.totalTradedVolume || "N/A"}</p>
                                                        <p><strong>Total Buy Quantity:</strong> {stockData?.additionalInfo?.preOpenMarket?.totalBuyQuantity || "N/A"}</p>
                                                        <p><strong>Total Sell Quantity:</strong> {stockData?.additionalInfo?.preOpenMarket?.totalSellQuantity || "N/A"}</p>
                                                        <p><strong>Change:</strong> &#8377;{stockData?.additionalInfo?.preOpenMarket?.Change || "N/A"}</p>
                                                        <p>
                                                            <strong>% Change:</strong> {stockData?.additionalInfo?.preOpenMarket?.perChange?.toFixed(2) || "N/A"}%
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>

                        <Footer />

                    </div>

                </div>
            </div></div>
    );
};

export default StocDetails;
