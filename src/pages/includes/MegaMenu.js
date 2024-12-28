import React from 'react';

const MegaMenu = () => {
  return (
    <li class="nav-item">
    <a class="nav-link  " href="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mega Menu
        <i class="fa fa-angle-down"></i>
    </a>
    <div class="dropdown-menu mega-menu animated fadeIn" aria-labelledby="navbarDropdown">
        <div class="row no-gutters">
            <div class="col-sm-2 p-20">
                <h4>UI Kit</h4>
                <ul>
                    <li class="nav-link">
                        <a href="ui-alerts.html">Alerts</a>
                    </li>
                    <li class="nav-link">
                        <a href="ui-button.html">Buttons</a>
                    </li>
                    <li class="nav-link">
                        <a href="ui-cards.html">Cards</a>
                    </li>
                    <li class="nav-link">
                        <a href="ui-carousel.html">Carousel</a>
                    </li>

                    <li class="nav-link">
                        <a href="ui-dropdowns.html">Dropdowns</a>
                    </li>
                    <li class="nav-link">
                        <a href="ui-list-group.html">List Group</a>
                    </li>
                    <li class="nav-link">
                        <a href="ui-modals.html">Modals</a>
                    </li>
                    <li class="nav-link">
                        <a href="ui-progressbars.html">Progress Bars</a>
                    </li>
                    <li class="nav-link">
                        <a href="ui-tabs.html">Tabs</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-2 p-20">
                <h4>Pages</h4>
                <ul>
                    <li class="nav-link">
                        <a href="page-account-settings.html">Account Settings</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-clients.html">Clients</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-contacts.html">Contacts</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-gallery.html">Gallery</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-pricing.html">Pricing</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-task-list.html">Task List</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-404.html">404</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-500.html">500</a>
                    </li>
                    <li class="nav-link">
                        <a href="page-coming-soon.html">Coming Soon</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-4 p-20">
                <h4>Contact Us</h4>
                <div>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="Password1" placeholder="Enter Name" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="Email1" placeholder="Enter Email" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Message" id="Textarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary text-uppercase">Submit</button>
                    </form>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="chart-wrap">
                    <div class="p-20">
                        <h4 class="mb-1">Page Views</h4>
                        <p>Daily page visitors</p>
                        <h2 class="text-primary font-xxl mt-2">80+</h2>
                    </div>
                    <div class="apexchart-wrapper">
                        <div id="pageview"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</li>

  );
};

export default MegaMenu;