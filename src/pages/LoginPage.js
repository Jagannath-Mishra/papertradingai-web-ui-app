import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState(""); // state for email input
  const [password, setPassword] = useState(""); // state for password input
  const [rememberMe, setRememberMe] = useState(false); // state for remember me checkbox
  const [error, setError] = useState(""); // state to handle error messages
  const navigate = useNavigate(); // For navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
// Get the token from the response
const token = response.data.token;

// Set expiration time (1 hour in this case)
const expirationTime = Date.now() + 3600 * 12000; // 12 hour expiration time

// Store the JWT token and expiration time in the appropriate storage
if (rememberMe) {
  // Store in localStorage if "Remember Me" is checked
  localStorage.setItem("jwt_token", token);
  localStorage.setItem("token_expiration", expirationTime);
} else {
  // Store in sessionStorage if "Remember Me" is unchecked
  sessionStorage.setItem("jwt_token", token);
  sessionStorage.setItem("token_expiration", expirationTime);
}

// Redirect the user to the home page or a protected route
navigate("/login-home");
} catch (err) {
setError("Invalid email or password.");
}
  };
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

      {/* Login Content */}
      <div className="app-contant">
        <div className="bg-white">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {/* Left Section */}
              <div className="col-sm-6 col-lg-5 col-xxl-3 align-self-center order-2 order-sm-1">
                <div className="d-flex align-items-center h-100-vh">
                  <div className="login p-50">
                    <h1 className="mb-2">We Are Trader</h1>
                    <p>Welcome back, please login to your account.</p>
                    <form className="mt-3 mt-sm-5" onSubmit={handleLogin}>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label className="control-label">Email*</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
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
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        {error && (
                          <div className="col-12">
                            <div className="alert alert-danger">{error}</div>
                          </div>
                        )}
                        <div className="col-12">
                          <div className="d-block d-sm-flex align-items-center">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                              />
                              <label className="form-check-label" htmlFor="gridCheck">
                                Remember Me
                              </label>
                            </div>
                            <a href="#" className="ml-auto">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <button type="submit" className="btn btn-primary text-uppercase w-100">
                            Sign In
                          </button>
                        </div>
                        <div className="col-12 mt-3 text-center">
                          <p>
                            Don't have an account? <Link to="/register">Sign Up</Link>
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
