import React, { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";
import LogoutButton from "../LogoutButton";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);

  // Load user details from sessionStorage or localStorage
  useEffect(() => {
    const storedUser =
      sessionStorage.getItem("user_details") ||
      localStorage.getItem("user_details");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
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
                    <li class="dropdown-header bg-gradient p-4 text-white text-left font-20"> RS. 10,00,000.00 /-
                      <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                        <span class="font-13"><Link to="/wallet"> View all </Link></span></a>
                    </li>
                    <li class="dropdown-body min-h-240 nicescroll">
                      <ul class="scrollbar scroll_dark max-h-240">
                        <li>
                          <a href="javascript:void(0)">
                            <div class="notification d-flex flex-row align-items-center">
                              <div class="notify-icon bg-img align-self-center">
                                <div class="bg-type bg-type-md">
                                  <span>TB</span>
                                </div>
                              </div>
                              <div class="notify-message">
                                <p class="font-weight-bold">Used Trading Balance</p>
                                <small>84,000.00 /-</small>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)">
                            <div class="notification d-flex flex-row align-items-center">
                              <div class="notify-icon bg-img align-self-center">
                                <div class="bg-type bg-type-md bg-danger">
                                  <span>AB</span>
                                </div>
                              </div>
                              <div class="notify-message">
                                <p class="font-weight-bold">Available Balance</p>
                                <small>15,000.00 /-</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <div class="notification d-flex flex-row align-items-center">
                              <div class="notify-icon bg-img align-self-center">
                                <div class="bg-type bg-type-md bg-info">
                                  <span>BC</span>
                                </div>
                              </div>
                              <div class="notify-message">
                                <p class="font-weight-bold">Brocker Charges</p>
                                <small>2,000.00 /-</small>
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
               
                  <Link className="nav-link search" to="/stock-search">
                    <i className="ti ti-search"></i>
                  </Link>
                
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
                        <h4 className="text-white mb-0">
                          {user?.firstName && user?.lastName
                            ? `${user.firstName} ${user.lastName}`
                            : "Guest User"}
                        </h4>
                        <small className="text-white">
                          {user?.email || "guest@example.com"}
                        </small>
                      </div>
                      <a
                        href="#"
                        className="text-white font-20 tooltip-wrapper"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Logout"
                      >
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
                        <Link to="/wallet">
                          <i class="ti ti-wallet font-20 text-primary"></i>
                          
                          <span class="d-block font-13 mt-2">My Wallet</span>
                          </Link>
                        </a>
                      </div>
                      <div class="col">
                        <a class="bg-light p-3 text-center d-block" href="#">
                        <Link to="/portfolio">
                          <i class="ti ti-bag font-20 text-primary"></i>
            
                          <span class="d-block font-13 mt-2">My Portfolio</span>
                          </Link>
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
  );
};

export default Header;
