import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate(); // This returns a function named 'navigate'
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (formData.firstName.trim().length < 3) {
      newErrors.firstName = "First Name must be at least 3 characters";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (formData.lastName.trim().length < 3) {
      newErrors.lastName = "Last Name must be at least 3 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone validation (optional)
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password validation
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms and Conditions validation
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms & policy";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      try {
        // Send data to the backend
        const response = await axios.post("http://localhost:5000/api/users/register", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          password: formData.password,
        });

        setSuccessMessage(response.data.message || "Registration Successful!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          termsAccepted: false,
        });

        // Wait 2 seconds, then redirect to login
        setTimeout(() => {
          navigate("/login");
        }, 2000);

      } catch (error) {
        setErrors({ general: error.response?.data?.error || "Registration failed" });
        setSuccessMessage("");
      }
    }
  };

  useEffect(() => {
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
      <div className="app-contant">
        <div className="bg-white">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {/* Left Section */}
              <div className="col-sm-6 col-lg-5 col-xxl-3 align-self-center order-2 order-sm-1">
                <div className="d-flex align-items-center h-100-vh">
                  <div className="register p-5">
                    <h1 className="mb-2">We Are Trader</h1>
                    <p>Welcome, Please create your account.</p>
                    {errors.general && <div className="alert alert-danger">{errors.general}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <form className="mt-2 mt-sm-5" onSubmit={handleSubmit}>
                      <div className="row">
                        {/* First Name */}
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label className="control-label">First Name*</label>
                            <input
                              type="text"
                              name="firstName"
                              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                          </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label className="control-label">Last Name*</label>
                            <input
                              type="text"
                              name="lastName"
                              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="col-12">
                          <div className="form-group">
                            <label className="control-label">Email*</label>
                            <input
                              type="email"
                              name="email"
                              className={`form-control ${errors.email ? "is-invalid" : ""}`}
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="col-12">
                          <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input
                              type="text"
                              name="phone"
                              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                              placeholder="Phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                          </div>
                        </div>

                        {/* Password */}
                        <div className="col-12">
                          <div className="form-group">
                            <label className="control-label">Password*</label>
                            <input
                              type="password"
                              name="password"
                              className={`form-control ${errors.password ? "is-invalid" : ""}`}
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                          </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="col-12">
                          <div className="form-group">
                            <label className="control-label">Confirm Password*</label>
                            <input
                              type="password"
                              name="confirmPassword"
                              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                              placeholder="Confirm Password"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                            />
                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                          </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className={`form-check-input ${errors.termsAccepted ? "is-invalid" : ""}`}
                              type="checkbox"
                              name="termsAccepted"
                              id="gridCheck"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="gridCheck">
                              I accept terms & policy
                            </label>
                            {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 mt-3">
                          <button type="submit" className="btn btn-primary text-uppercase w-100">
                            Sign Up
                          </button>
                        </div>

                        {/* Login Link */}
                        <div className="col-12 mt-3 text-center">
                          <p>
                            Already have an account?{" "}
                            <Link to="/login">Sign In</Link>
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

export default RegisterPage;
