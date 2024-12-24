import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
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
 
    <div class="app">
      
        <div class="app-wrap">
        <div class="loader">
                <div class="h-100 d-flex justify-content-center">
                    <div class="align-self-center">
                        <img src="assets/img/loader/loader.svg" alt="loader" />
                    </div>
                </div>
            </div>
           
        <nav class="navbar navbar-expand-xl py-lg-3 lp-menu">
            <div class="container py-2 rounded">
                <a class="navbar-brand fw-bold  fs-3" href="index.html" title="Logo"><i class="fa fa-gg-circle fs-3 text-primary pe-2"></i>PaperTradingAI</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                    <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link me-2 page-scroll" href="#Market">Market</a></li>
                        <li class="nav-item"><a class="nav-link me-2 page-scroll" href="#Exchanges">Exchanges</a></li>
                        <li class="nav-item"><a class="nav-link me-2 page-scroll" href="#anywhere">Compatible</a></li>
                        <li class="nav-item"><a class="nav-link me-2 page-scroll" href="#get-touch">Get in Touch</a></li>
                        <li class="nav-item"><a class="nav-link me-2 page-scroll" href="#Contact">Contact</a></li>
                    </ul>
                    <form class="d-flex">
                        <div class="dropdown Language d-none d-sm-block">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                    <img src="assets/images/flag/GB.png" alt="" />
                                </a>
                                <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0">
                                    <div class="card border-0">
                                        <ul class="list-unstyled py-2 px-3">
                                            <li>
                                                <a href="#" class=""><img src="assets/images/flag/GB.png" alt="" /> English</a>
                                            </li>
                                            <li>
                                                <a href="#" class=""><img src="assets/images/flag/DE.png" alt="" /> German</a>
                                            </li>
                                            <li>
                                                <a href="#" class=""><img src="assets/images/flag/FR.png" alt="" /> French</a>
                                            </li>
                                            <li>
                                                <a href="#" class=""><img src="assets/images/flag/IT.png" alt="" /> Italian</a>
                                            </li>
                                            <li>
                                                <a href="#" class=""><img src="assets/images/flag/RU.png" alt="" /> Russian</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown Language d-none d-sm-block">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Download
                                </a>
                                <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0">
                                    <div class="card border-0">
                                        <ul class="list-unstyled py-2 px-1">
                                            <li>
                                                <img src="assets/images/qr-code.png" alt="" class="img-fluid" />
                                                <span class="small text-muted px-2 mt-1">Download Mobile App</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="http://pixelwibes.com/template/Stockon/html/dist/ui-elements/auth-signin.html" target="_blank" title="login" class="btn text-uppercase mx-sm-1 py-2">Login</a>
                        <a href="http://pixelwibes.com/template/Stockon/html/dist/ui-elements/auth-signup.html" target="_blank" title="Register" class="btn btn-primary rounded text-uppercase py-2">Register</a>
                    </form>
                </div>
            </div>
        </nav>

        
        <div class="section hero-area my-5">
            <div class="container">
                <div class="row g-3 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <img src="assets/images/hero.svg" alt="#" class="img-fluid" />
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="inner-content">
                            <div class="hero-text">
                                <h1>Profiltable Leading <br/>of <strong class="text-uppercase text-primary">Stocktrading</strong><br/> on the Market</h1>
                                <div class="lead">Get started with the easiest and most Secure palteform to buy,sell,trade and earn Stockcurrencies.</div>
                            </div>
                            <button type="button" class="btn btn-secondary text-uppercase my-4 py-2 fs-5 ">Start Trading</button>
                        </div>
                    </div>
                </div> 
                <div class="row g-3 align-items-center mt-md-3 pt-md-3 mt-lg-5 pt-lg-5">
                    <div class="col">
                        <div class="d-flex align-items-center flex-nowrap">
                            <button type="button" class="play-btn"></button><span class="px-2 lead">How it's Work?</span>
                        </div>
                    </div>
                    <div class="col-auto">
                        <ul class="row row-cols-2 row-cols-md-2 row-cols-lg-4 list-unstyled">
                            <li class="col lead"><a href="#">Facebook</a></li>
                            <li class="col lead"><a href="#">Twitter</a></li>
                            <li class="col lead"><a href="#">Linkedin</a></li>
                            <li class="col lead"><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      
        <div class="section market-update" id="Market">
            <div class="container">
                <div class="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-4 price-chart p-3 rounded">
                    <div class="col">
                        <div class="card no-bg border-0">
                            <div class="card-body d-flex align-items-center">
                                <div class="flex-fill text-truncate">
                                    <span class="text-muted small text-uppercase">BNB/BUSD</span>
                                    <div class="d-flex flex-column">
                                        <div class="price-block">
                                            <span class="fs-6 fw-bold color-price-up">418</span>
                                            <span class="small text-muted px-2">$418</span>
                                        </div>
                                        <div class="price-report">
                                            <span class="small text-danger">- 1.28% <i class="fa fa-level-down"></i></span>
                                            <span class="small text-muted px-2">Volume:109,267,865.92 BUSD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="apexspark1"></div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card no-bg border-0">
                            <div class="card-body d-flex align-items-center">
                                <div class="flex-fill text-truncate">
                                    <span class="text-muted small text-uppercase">ETH/USDT</span>
                                    <div class="d-flex flex-column">
                                        <div class="price-block">
                                            <span class="fs-6 fw-bold color-price-down">3499</span>
                                            <span class="small text-muted px-2">$3500</span>
                                        </div>
                                        <div class="price-report">
                                            <span class="small text-danger">- 1.79% <i class="fa fa-level-down"></i></span>
                                            <span class="small text-muted px-2">Volume:541,545,011.76 USDT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="apexspark2"></div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card no-bg border-0">
                            <div class="card-body d-flex align-items-center">
                                <div class="flex-fill text-truncate">
                                    <span class="text-muted small text-uppercase">DOT/BUSD</span>
                                    <div class="d-flex flex-column">
                                        <div class="price-block">
                                            <span class="fs-6 fw-bold">35.00</span>
                                            <span class="small text-muted px-2">$35</span>
                                        </div>
                                        <div class="price-report">
                                            <span class="small text-success">+ 3.78% <i class="fa fa-level-up"></i></span>
                                            <span class="small text-muted px-2">Volume:63,324,607.43 BUSD BUSD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="apexspark3"></div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card no-bg border-0">
                            <div class="card-body d-flex align-items-center">
                                <div class="flex-fill text-truncate">
                                    <span class="text-muted small text-uppercase">GRT/USDT</span>
                                    <div class="d-flex flex-column">
                                        <div class="price-block">
                                            <span class="fs-6 fw-bold color-price-up">0.8413</span>
                                            <span class="small text-muted px-2">$1</span>
                                        </div>
                                        <div class="price-report">
                                            <span class="small text-danger">- 1.11% <i class="fa fa-level-down"></i></span>
                                            <span class="small text-muted px-2">Volume:28,538,521.44 USDT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="apexspark4"></div>
                        </div>
                    </div>
                </div>
        </div>

        <div class="section exchange" id="Exchanges">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-xl-6 col-lg-10 col-md-12">
                        <h2 class="h1">Trusted and secure bitcoin and Stock <span class="text-primary">exchanges</span></h2> 
                        <p class="lead">Stock is more than just a Stock trading platform.it's the best place to learn about Stock</p>
                    </div>
                </div>
                <div class="row g-3 align-items-center pt-2">
                    <div class="col-xl-7">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="300px" viewBox="0 0 38 38">
                            <path xmlns="http://www.w3.org/2000/svg" d="M20,25c0-1.698,0-6.334,0-11c0-4.418-1.582-8-6-8c-2.083,0-4.072,0.888-5.538,2.335  C5.708,11.053,4,14.826,4,19c0,8.284,6.716,15,15,15c2.736,0,5.294-0.745,7.503-2.025C22.87,31.719,20,28.698,20,25z" data-st="fill:var(--chart-color4);"></path>
                            <path xmlns="http://www.w3.org/2000/svg" class="st0" d="M15,11l-1,0.01c0,0,0,0,0-0.01H15z M22,0.24v2.04C29.95,3.69,36,10.65,36,19c0,4.17-1.52,8.01-4.03,10.97  l-0.02-0.02C30.68,31.22,28.93,32,27,32c-2.79,0-5.2-1.64-6.32-4H24l2-2h-5.92C20.02,25.67,20,25.34,20,25s0.02-0.67,0.08-1H28l2-2  h-9.32c1.12-2.36,3.53-4,6.32-4c1.93,0,3.68,0.78,4.95,2.05l1.41-1.41C31.73,17.01,29.48,16,27,16c-3.91,0-7.25,2.51-8.48,6H16v2  h2.06C18.02,24.33,18,24.66,18,25s0.02,0.67,0.06,1H16v2h2.52c1.23,3.48,4.56,5.99,8.46,6C24.6,35.28,21.88,36,19,36  C9.63,36,2,28.37,2,19c0-6.07,3.2-11.41,8-14.41V6.1C8.24,6.44,6,7.72,6,11c0,2.78,2.64,3.44,4.76,3.97C12.96,15.52,14,15.9,14,17  c0,2.82-2.5,2.99-2.99,3C10.5,19.99,8,19.82,8,17H6c0,3.28,2.24,4.56,4,4.9V24h2v-2.1c1.76-0.341,4-1.62,4-4.9  c0-2.78-2.64-3.44-4.76-3.97C9.04,12.48,8,12.1,8,11c0-2.82,2.5-2.99,3-3c2.81,0,2.99,2.48,3,3h2c0-1.57-0.86-4.42-4-4.91V3.52  C14.13,2.54,16.51,2,19,2c0.34,0,0.67,0.01,1,0.03V0.02C19.67,0.01,19.33,0,19,0C8.52,0,0,8.52,0,19c0,10.48,8.52,19,19,19  c10.48,0,19-8.52,19-19C38,9.54,31.06,1.68,22,0.24z"></path>
                        </svg>
                    </div>
                    <div class="col-xl-5">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <div class="input-group mb-4">
                                        <span class="input-group-text">GET</span>
                                        <input type="text" class="form-control" />
                                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">BTC</button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="#">USDT</a></li>
                                            <li><a class="dropdown-item" href="#">BTC</a></li>
                                        </ul>
                                    </div>
                                    <div class="input-group mb-4">
                                        <span class="input-group-text">PAY</span>
                                        <input type="text" class="form-control" />
                                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="#">USDT</a></li>
                                            <li><a class="dropdown-item" href="#">BTC</a></li>
                                        </ul>
                                    </div>
                                    <div class="d-flex justify-content-between flex-wrap mb-3">
                                        <div class="d-flex">
                                            <div class="truncated">Buy</div>
                                            <div class="text-muted truncated px-1"> 0.00 USDT</div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <button type="submit" class="btn btn-light-success py-2 text-uppercase w-100">BUY Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="section market-trend" id="trend">
            <div class="container">
                <div class="row mb-5 justify-content-end">
                    <div class="col-xl-6 col-lg-10 col-md-12 text-end">
                        <h2 class="h1">Trusted and secure Market <span class="text-primary">trend</span></h2> 
                        <p class="lead">Buy & sell Stock in minutes</p>
                    </div>
                </div>
                <div class="row g-3 align-items-center pt-2">
                    <div class="col-xl-12">
                        <div class="tradingview-widget-container">
                            <div id="tradingview_85dc0" style={{ height: "697px" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="section market-trend" id="anywhere">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-xl-7 col-lg-10 col-md-12">
                        <h2 class="h1">Trade <span class="text-primary">Anywhere.</span></h2> 
                        <p class="lead">Compatible with multiple devices, start trading with safety and convenience.</p>
                    </div>
                </div>
                <div class="row g-3 align-items-center pt-2">
                    <div class="col-xl-8">
                        <img src="assets/images/dhashbord.png" alt="#" class="img-fluid" />
                    </div>
                    <div class="col-xl-4">
                        <div class="download-app text-center">
                            <img src="assets/images/qr-code.png" alt="#" class="img-fluid" />
                            <h4 class="px-2 mt-2">Scan Download App</h4>
                        </div>
                        <div class="row g-4 mt-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                            <div class="col text-center">
                                <i class="fa fa-apple fs-2 chart-text-color5" aria-hidden="true"></i>
                                <span class="d-block">App Store</span>
                            </div>
                            <div class="col text-center">
                                <i class="fa fa-android fs-2 chart-text-color5" aria-hidden="true"></i>
                                <span class="d-block">Android APK</span>
                            </div>
                            <div class="col text-center">
                                <i class="fa fa-google fs-2 chart-text-color5" aria-hidden="true"></i>
                                <span class="d-block">Google Play</span>
                            </div>
                            <div class="col text-center">
                                <i class="fa fa-windows fs-2 chart-text-color5" aria-hidden="true"></i>
                                <span class="d-block">Windows</span>
                            </div>
                            <div class="col text-center">
                                <i class="fa fa-linux fs-2 chart-text-color5" aria-hidden="true"></i>
                                <span class="d-block">Linux</span>
                            </div>
                            <div class="col text-center">
                                <i class="fa fa-plug fs-2 chart-text-color5" aria-hidden="true"></i>
                                <span class="d-block">API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="section get-touch" id="get-touch">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-xl-7 col-lg-10 col-md-12">
                        <h2 class="h1">Get in touch. <span class="text-primary">Stay in touch.</span></h2> 
                        <p class="lead">If you really care about someone you will make time for them.</p>
                    </div>
                </div>
                <div class="row g-3 align-items-center pt-2">
                    <div class="col-xl-3">
                        <div class="card p-3">
                            <i class="icofont-live-support fs-1 chart-text-color5"></i>
                            <h5 class="my-3">24 / 7 Support</h5>
                            <p>Got a problem? Just get in touch. Our support team is available 24/7.</p>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="card p-3">
                            <i class="icofont-file-document fs-1 chart-text-color5"></i>
                            <h5 class="my-3">Stockon Blog</h5>
                            <p>News and updates from the world’s leading Stocktrading exchange.</p>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="card p-3">
                            <i class="icofont-speech-comments fs-1 chart-text-color5"></i>
                            <h5 class="my-3">Community</h5>
                            <p>Stockon is global. Join the discussion in our worldwide communities.</p>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="card p-3">
                            <i class="icofont-hat fs-1 chart-text-color5"></i>
                            <h5 class="my-3">Careers</h5>
                            <p>Help build the future of technology. Start your new career at Stockon.</p>
                        </div>
                    </div>
                </div>
            </div>
        

        
        <div class="section contactus" id="Contact">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-xl-7 col-lg-10 col-md-12">
                        <h2 class="h1">Feel to Free <span class="text-primary">ContactUs</span></h2> 
                        <p class="lead">We look forward to hearing from you.</p>
                    </div>
                </div>
                <form class="row g-2">
                    <div class="col-md-4 col-sm-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputname" placeholder="Your Name" />
                            <label for="floatingInputname">Your Name</label>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" placeholder="Your Email" />
                            <label>Your Email</label>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected value="Tread Help">Tread Help</option>
                                <option value="P2P Query">P2P Query</option>
                                <option value="Exchange Isuue">Exchange Isuue</option>
                                <option value="Others">Others</option>
                            </select>
                            <label>Type Of Query</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Message (Optional)" style={{ height: "160px" }}></textarea>
                            <label>Message (Optional)</label>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <button type="submit" class="btn btn-secondary text-uppercase mt-4 py-2 fs-5">Submit Query</button>
                    </div>
                </form>

            </div>
        </div>
       
    
        <div class="section footer color-bg-100 pb-0">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="d-flex align-items-center">
                            <h4 class="mb-4 fw-bold "><i class="fa fa-gg-circle fs-3 text-primary pe-2"></i>Cryptoon</h4>
                        </div>
                    <span class="lead">Pixelwibes is the world’s leading community for creatives to share, grow, and get hired.</span>
                    <ul class="mt-3 fs-6 list-unstyled">
                        <li><span>Address:</span> 2071 Eva Pearl Street,LA</li>
                        <li><span>Email:</span> example@pw.com</li>
                        <li><span>Call:</span> 225-747-3640</li>
                    </ul>
                    </div>
                    <div class="col-lg-8 col-12">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <h5 class="mb-4">For Community</h5>
                                <ul class="footer-link px-3">
                                    <li class="my-1"><a href="#">Freewallet Peer Program</a></li>
                                    <li class="my-1"><a href="#">Freewallet Affiliate Program</a></li>
                                    <li class="my-1"><a href="#">Freewallet Alliance</a></li>
                                    <li class="my-1"><a href="#">Community</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <h5 class="mb-4">Exchange</h5>
                                <ul class="footer-link px-3">
                                    <li class="my-1"><a href="#">Exchange</a></li>
                                    <li class="my-1"><a href="#">Wallet</a></li>
                                    <li class="my-1"><a href="#">Explorer</a></li>
                                    <li class="my-1"><a href="#">Learn</a></li>
                                    <li class="my-1"><a href="#">Price</a></li>
                                    <li><a href="#">Chart</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <h5 class="mb-4">About Us</h5>
                                <ul class="footer-link px-3">
                                    <li class="my-1"><a href="#">About Us</a></li>
                                    <li class="my-1"><a href="#">Business Contact</a></li>
                                    <li class="my-1"><a href="#">Careers</a></li>
                                    <li><a href="#">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
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

export default LandingPage;
