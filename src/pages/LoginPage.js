import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function LoginPage() {
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

    return () => {
      // Clean up: remove dynamically added elements
      document.head.removeChild(googleFont);
      document.head.removeChild(vendorsStyle);
      document.head.removeChild(appStyle);
      document.body.removeChild(vendorsScript);
      document.body.removeChild(appScript);
    };
  }, []);

  return (
    <div className="app">
      {/* Preloader */}
      <div className="loader">
        <div className="h-100 d-flex justify-content-center">
          <div className="align-self-center">
            <img src="/assets/img/loader/loader.svg" alt="Loader" />
          </div>
        </div>
      </div>

      {/* Login Content */}
      <div className="app-contant">
        <div className="bg-white">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {/* Left Section */}
              <div className="col-sm-6 col-lg-5 col-xxl-3 align-self-center order-2 order-sm-1">
                <div className="d-flex align-items-center h-100-vh">
                  <div className="login p-50">
                    <h1 className="mb-2">We Are Trader </h1>
                    <p>Welcome back, please login to your account.</p>
                    <form className="mt-3 mt-sm-5">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label className="control-label">User Name*</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="control-label">Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-block d-sm-flex align-items-center">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                            <a href="#" className="ml-auto">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <button className="btn btn-primary text-uppercase w-100">
                            Sign In
                          </button>
                        </div>
                        <div className="col-12 mt-3 text-center">
                          <p>
                            Don't have an account?{" "}
                            <Link to="/register">Sign Up</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
                <div className="row align-items-center h-100">
                  <div className="col-7 mx-auto">
                    <img
                      className="img-fluid"
                      src="/assets/img/bg/login.svg"
                      alt="Background"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
