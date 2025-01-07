import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Footer from "../includes/Footer";
import LeftMenu from "../includes/LeftMenu";
import Header from "../includes/Header";

const StocDetails = () => {
    const [user, setUser] = useState(null);
    const { symbol } = useParams(); // Get stock symbol from URL
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        productType: "intraday",
        qty: "",
        price: 0.0,
        priceType: "market",
        slTriggerPrice: "",
        tpTriggerPrice: "",
    });

    const [errors, setErrors] = useState({});

    // Form Validation
    const validate = () => {
        const newErrors = {};
        if (!formData.qty || formData.qty <= 0) {
            newErrors.qty = "Quantity must be a positive number.";
        }
        if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
            newErrors.price = "Price must be a positive number.";
        }
        if (formData.slTriggerPrice && formData.slTriggerPrice < 0) {
            newErrors.slTriggerPrice = "SL Trigger Price must be a positive number.";
        }
        if (formData.tpTriggerPrice && formData.tpTriggerPrice < 0) {
            newErrors.tpTriggerPrice = "Take Profit Trigger Price must be a positive number.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted", formData);
            alert("Order placed successfully!");
            // Add API call logic here
        }
    };

    useEffect(() => {
        // Dynamically load external styles and scripts
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

        // Retrieve user details from sessionStorage or localStorage
        const storedUser =
            sessionStorage.getItem("user_details") || localStorage.getItem("user_details");
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

    useEffect(() => {
        // Fetch stock details
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
                <Header />

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
                                                                                    <span className={stockData?.additionalInfo?.priceInfo?.pChange?.toFixed(2) >= 0 ? 'text-success' : 'text-danger'}>
                                                                                        {stockData?.lastPrice  ?? 'N/A '} 
                                                                                    </span>{" "}
                                                                                    <small className="text-muted">
                                                                                        ( {stockData?.additionalInfo?.priceInfo?.pChange?.toFixed(2) ?? 'N/A'}% )
                                                                                    </small>
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
                                                                                        <form onSubmit={handleSubmit}>
                                                                                            <div className="form-row">
                                                                                                <div className="form-group col-md-6">
                                                                                                    <label>Product Type</label>
                                                                                                    <div className="btn-group btn-group-toggle d-flex" data-toggle="buttons">
                                                                                                        <label
                                                                                                            className={`btn btn-outline-primary ${formData.productType === "intraday" ? "active" : ""}`}
                                                                                                        >
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="productType"
                                                                                                                id="intraday"
                                                                                                                checked={formData.productType === "intraday"}
                                                                                                                onChange={() => setFormData({ ...formData, productType: "intraday" })}
                                                                                                            />
                                                                                                            Intraday
                                                                                                        </label>
                                                                                                        <label
                                                                                                            className={`btn btn-outline-primary ${formData.productType === "carryforward" ? "active" : ""}`}
                                                                                                        >
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="productType"
                                                                                                                id="carryforward"
                                                                                                                checked={formData.productType === "carryforward"}
                                                                                                                onChange={() => setFormData({ ...formData, productType: "carryforward" })}
                                                                                                            />
                                                                                                            Carry Forward
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="form-group col-md-3">
                                                                                                    <label htmlFor="qty">Qty</label>
                                                                                                    <input
                                                                                                        type="number"
                                                                                                        className="form-control"
                                                                                                        id="qty"
                                                                                                        placeholder="1"
                                                                                                        value={formData.qty}
                                                                                                        onChange={handleChange}
                                                                                                    />
                                                                                                    {errors.qty && <small className="text-danger">{errors.qty}</small>}
                                                                                                </div>

                                                                                                <div className="form-group col-md-3">
                                                                                                    <label htmlFor="price">Price</label>
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control"
                                                                                                        id="price"
                                                                                                        placeholder="1"
                                                                                                        value={stockData?.lastPrice}
                                                                                                        onChange={handleChange}
                                                                                                    />
                                                                                                    {errors.price && <small className="text-danger">{errors.price}</small>}
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Price Type</label>
                                                                                                <div className="btn-group btn-group-toggle d-flex" data-toggle="buttons">
                                                                                                    <label
                                                                                                        className={`btn btn-outline-primary ${formData.priceType === "limit" ? "active" : ""}`}
                                                                                                    >
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            name="priceType"
                                                                                                            id="limit"
                                                                                                            checked={formData.priceType === "limit"}
                                                                                                            onChange={() => setFormData({ ...formData, priceType: "limit" })}
                                                                                                        />
                                                                                                        Limit
                                                                                                    </label>
                                                                                                    <label
                                                                                                        className={`btn btn-outline-primary ${formData.priceType === "market" ? "active" : ""}`}
                                                                                                    >
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            name="priceType"
                                                                                                            id="market"
                                                                                                            checked={formData.priceType === "market"}
                                                                                                            onChange={() => setFormData({ ...formData, priceType: "market" })}
                                                                                                        />
                                                                                                        Market
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label htmlFor="slTriggerPrice">SL Trigger Price</label>
                                                                                                <input
                                                                                                    type="number"
                                                                                                    className="form-control"
                                                                                                    id="slTriggerPrice"
                                                                                                    placeholder="0"
                                                                                                    value={formData.slTriggerPrice}
                                                                                                    onChange={handleChange}
                                                                                                />
                                                                                                {errors.slTriggerPrice && <small className="text-danger">{errors.slTriggerPrice}</small>}

                                                                                                <br />
                                                                                                <label htmlFor="tpTriggerPrice">Take Profit Trigger Price</label>
                                                                                                <input
                                                                                                    type="number"
                                                                                                    className="form-control"
                                                                                                    id="tpTriggerPrice"
                                                                                                    placeholder="0"
                                                                                                    value={formData.tpTriggerPrice}
                                                                                                    onChange={handleChange}
                                                                                                />
                                                                                                {errors.tpTriggerPrice && <small className="text-danger">{errors.tpTriggerPrice}</small>}
                                                                                            </div>

                                                                                            <div className="d-flex justify-content-between">
                                                                                                <div>
                                                                                                    <p className="mb-0">
                                                                                                        <strong>Available Funds:</strong> ₹100000.09
                                                                                                    </p>
                                                                                                    <p>
                                                                                                        <strong>Total Charges:</strong> ₹0
                                                                                                    </p>
                                                                                                </div>
                                                                                                <button type="submit" className="btn btn-primary btn-lg">
                                                                                                    Place Buy Order
                                                                                                </button>
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
