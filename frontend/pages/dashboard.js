import Head from "next/head";

export default function Dashboard() {
  jQuery(function ($) {
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
        $(".sidebar-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
      }
    });

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  });

  return (
    <>
      <Head>
        {/* <!-- Bootstrap 4 CSS and JavaScript --> */}
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        {/* <!-- jQuery JS --> */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        {/* <!-- Font Awesome 5 CSS --> */}
        <link
          href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <article>
          <p>
            This page demo the Bootstrap 4 responsive dahboard sidebar menu.
          </p>

          <div class="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
              <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
              <div class="sidebar-content">
                <div class="sidebar-brand">
                  <a href="#">pro sidebar</a>
                  <div id="close-sidebar">
                    <i class="fas fa-times"></i>
                  </div>
                </div>
                <div class="sidebar-header">
                  <div class="user-pic">
                    <img
                      class="img-responsive img-rounded"
                      src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                      alt="User picture"
                    />
                  </div>
                  <div class="user-info">
                    <span class="user-name">
                      Jhon
                      <strong>Smith</strong>
                    </span>
                    <span class="user-role">Administrator</span>
                    <span class="user-status">
                      <i class="fa fa-circle"></i>
                      <span>Online</span>
                    </span>
                  </div>
                </div>
                <div class="sidebar-search">
                  <div>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control search-menu"
                        placeholder="Search..."
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sidebar-menu">
                  <ul>
                    <li class="header-menu">
                      <span>General</span>
                    </li>
                    <li class="sidebar-dropdown">
                      <a href="#">
                        <i class="fa fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                        <span class="badge badge-pill badge-warning">New</span>
                      </a>
                      <div class="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">
                              Dashboard 1
                              <span class="badge badge-pill badge-success">
                                Pro
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">Dashboard 2</a>
                          </li>
                          <li>
                            <a href="#">Dashboard 3</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="sidebar-dropdown">
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                        <span>E-commerce</span>
                        <span class="badge badge-pill badge-danger">3</span>
                      </a>
                      <div class="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Products</a>
                          </li>
                          <li>
                            <a href="#">Orders</a>
                          </li>
                          <li>
                            <a href="#">Credit cart</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="sidebar-dropdown">
                      <a href="#">
                        <i class="far fa-gem"></i>
                        <span>Components</span>
                      </a>
                      <div class="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">General</a>
                          </li>
                          <li>
                            <a href="#">Panels</a>
                          </li>
                          <li>
                            <a href="#">Tables</a>
                          </li>
                          <li>
                            <a href="#">Icons</a>
                          </li>
                          <li>
                            <a href="#">Forms</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="sidebar-dropdown">
                      <a href="#">
                        <i class="fa fa-chart-line"></i>
                        <span>Charts</span>
                      </a>
                      <div class="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Pie chart</a>
                          </li>
                          <li>
                            <a href="#">Line chart</a>
                          </li>
                          <li>
                            <a href="#">Bar chart</a>
                          </li>
                          <li>
                            <a href="#">Histogram</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="sidebar-dropdown">
                      <a href="#">
                        <i class="fa fa-globe"></i>
                        <span>Maps</span>
                      </a>
                      <div class="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Google maps</a>
                          </li>
                          <li>
                            <a href="#">Open street map</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="header-menu">
                      <span>Extra</span>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-book"></i>
                        <span>Documentation</span>
                        <span class="badge badge-pill badge-primary">Beta</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-calendar"></i>
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-folder"></i>
                        <span>Examples</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="sidebar-footer">
                <a href="#">
                  <i class="fa fa-bell"></i>
                  <span class="badge badge-pill badge-warning notification">
                    3
                  </span>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                  <span class="badge badge-pill badge-success notification">
                    7
                  </span>
                </a>
                <a href="#">
                  <i class="fa fa-cog"></i>
                  <span class="badge-sonar"></span>
                </a>
                <a href="#">
                  <i class="fa fa-power-off"></i>
                </a>
              </div>
            </nav>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"
          ></script>
        </article>
      </main>
    </>
  );
}
