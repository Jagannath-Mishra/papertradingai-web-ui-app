import React from 'react';

const LeftMenu = () => {
    return (

        <aside class="app-navbar">

            <div class="sidebar-nav scrollbar scroll_light">
                <ul class="metismenu " id="sidebarNav">
                    <li class="nav-static-title">Personal</li>
                    <li class="active">
                        <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                            <i class="nav-icon ti ti-rocket"></i>
                            <span class="nav-title">Dashboards</span>
                            <span class="nav-label label label-danger">11</span>
                        </a>
                        <ul aria-expanded="false">

                            <li class="active"> <a href='index-stock-market.html'>Stock Market</a> </li>
                            <li> <a href=''>Search Stocks</a> </li>
                            <li> <a href=''>Trade FNO</a></li>
                            <li> <a href=''>Portfolio</a> </li>
                            <li> <a href=''>Orders</a> </li>

                        </ul>
                        <ul aria-expanded="false">

                            <li class="active"> <a href='index-stock-market.html'>Crypto Currency</a> </li>
                            <li> <a href=''>Trade Crypto</a></li>
                            <li> <a href=''>Crypto FNO</a></li>
                            <li> <a href=''>Crypto Portfolio</a> </li>
                            <li> <a href=''>Crypto Orders</a> </li>
                        </ul>
                        <ul aria-expanded="false">

                            <li class="active"> <a href='index-stock-market.html'>Forex Trading</a> </li>
                            <li> <a href=''>Trade Forex</a></li>
                            <li> <a href=''>Forex Portfolio</a> </li>
                            <li> <a href=''>Forex Orders</a> </li>

                        </ul>
                    </li>
                   


                    <li class="nav-static-title">Personal Components</li>
                    <li>
                        <a class="has-arrow" href="javascript:void(0)" aria-expanded="false"><i class="nav-icon ti ti-map-alt"></i><span class="nav-title">User</span></a>
                        <ul aria-expanded="false">
                            <li> <a href="maps-google.html">Profile</a> </li>
                            <li> <a href="maps-vector.html">History</a> </li>
                            <li> <a href="maps-mapael.html">Settings</a> </li>
                        </ul>
                    </li>
                    
                    <li>
                        <a class="has-arrow" href="javascript:void(0)" aria-expanded="false"><i class="nav-icon ti ti-key"></i><span class="nav-title">Help</span></a>
                        <ul aria-expanded="false">
                            <li> <a href="auth-login.html">Contact Us</a> </li>
                            <li> <a href="auth-register.html">Chart</a> </li>
                            <li> <a href="auth-lockscreen.html">Support Ticket</a> </li>
                        </ul>
                    </li>
                    
                    <li class="sidebar-banner p-4 bg-gradient text-center m-3 d-block rounded">
                        <h5 class="text-white mb-1">Paper Trading AI</h5>
                        <p class="font-13 text-white line-20">Multipurpose Paper Trading Plartform</p>
                        <a class="btn btn-square btn-inverse-light btn-xs d-inline-block mt-2 mb-0" href="#"> Join now</a>
                    </li>
                </ul>
            </div>

        </aside>

    );
};

export default LeftMenu;