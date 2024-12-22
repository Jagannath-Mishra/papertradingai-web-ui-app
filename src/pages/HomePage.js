import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  // Dynamically load external styles and scripts
  useEffect(() => {
    const loadExternalResource = (type, attributes) => {
      const element = document.createElement(type);
      Object.entries(attributes).forEach(([key, value]) => {
        element[key] = value;
      });
      if (type === "script") {
        document.body.appendChild(element);
      } else {
        document.head.appendChild(element);
      }
      return element;
    };

    // Load Google Fonts
    const googleFont = loadExternalResource("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
      rel: "stylesheet",
    });

    // Load Vendors CSS
    const vendorsStyle = loadExternalResource("link", {
      href: "/assets/css/vendors.css",
      rel: "stylesheet",
    });

    // Load App CSS
    const appStyle = loadExternalResource("link", {
      href: "/assets/css/style.css",
      rel: "stylesheet",
    });

    // Load Vendors JS
    const vendorsScript = loadExternalResource("script", {
      src: "/assets/js/vendors.js",
      async: true,
    });

    // Load App JS
    const appScript = loadExternalResource("script", {
      src: "/assets/js/app.js",
      async: true,
    });

    // Cleanup dynamically added resources
    return () => {
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

      {/* Coming Soon Content */}
      <div className="app-wrap">
        <div className="app-contant">
          <div className="bg-white comingsoon">
            <div className="container-fluid p-0">
              <div className="row no-gutters">
                {/* Left Section */}
                <div className="col-lg-6 align-self-center bg-gradient">
                  <div className="d-flex align-items-center h-100-vh">
                    <div className="comingsoon-wrap w-100">
                      <div className="row no-gutters align-items-center justify-content-center">
                        <div className="col-md-10 text-center mb-4">
                          {/* Coming Soon Text */}
                          <div className="px-5">
                            <h2 className="text-white display-3 font-weight-normal">
                              We are Coming Soon
                            </h2>
                            <span className="text-white">
                              We are currently working on a website and won't
                              take long. Don't forget to check out our Social
                              updates.
                            </span>
                          </div>

                          {/* Countdown */}
                          <ul className="my-5 text-center list-inline">
                            <li className="list-inline-item mx-4 text-white">
                              <p
                                className="text-white display-3 font-weight-normal"
                                id="days"
                              ></p>
                              <span className="font-20"> Days</span>
                            </li>
                            <li className="list-inline-item mx-4 text-white">
                              <p
                                className="text-white display-3 font-weight-normal"
                                id="hours"
                              ></p>
                              <span className="font-20"> Hours</span>
                            </li>
                            <li className="list-inline-item mx-4 text-white">
                              <p
                                className="text-white display-3 font-weight-normal"
                                id="minutes"
                              ></p>
                              <span className="font-20"> Minutes</span>
                            </li>
                            <li className="list-inline-item mx-4 text-white">
                              <p
                                className="text-white display-3 font-weight-normal"
                                id="seconds"
                              ></p>
                              <span className="font-20"> Seconds</span>
                            </li>
                          </ul>

                          {/* Newsletter */}
                          <div className="row no-gutters">
                            <div className="col-md-7 mx-auto">
                              <p className="text-white">
                                Provide your email address & we will notify you
                                when the site is ready
                              </p>
                              <form className="px-5 mt-3">
                                <input
                                  type="email"
                                  className="form-control bg-white-inverse"
                                  placeholder="Email address"
                                />
                              </form>
                              <div className="mt-3">
                                <button className="btn btn-inverse-light">
                                  Get Notified
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Link to Login Page */}
                          <div className="mt-4">
                            <Link to="/login" className="btn btn-primary">
                              Go to Login Page
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-6 align-self-end">
                  <img
                    className="img-fluid"
                    src="/assets/img/bg/coming-soon-bg.svg"
                    alt="Background"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
