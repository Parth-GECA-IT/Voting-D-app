import React from "react";

//INTERNAL IMPORT
import Link from "./Link";
const Header = () => {
  return (
    <header class="header-section a2-bg-0 header-section--secondary header-menu w-100">
      <div class="container d-center ">
        <nav class="navbar a2-lg-bg py-5 p-lg-5 rounded-3 navbar-expand-lg w-100 justify-content-between ">
          <div class="d-flex align-items-center">
            <button
              class="navbar-toggler ms-4"
              type="button"
              data-bs-toggle="collapse"
              aria-label="Navbar Toggler"
              data-bs-target="#navbar-content"
              aria-expanded="true"
              id="nav-icon3"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a
              href="/"
              class="navbar-brand m-0 p-0 d-flex align-items-center gap-5 gap-xl-5 me-2"
            >
              <img
                src="assets/images/fav.png"
                class="logo small_logo d-sm-none"
                alt="logo"
              />
              <img
                src="assets/images/logo.png"
                class="logo d-none d-sm-flex"
                alt="logo"
              />
            </a>
          </div>
          <div class="nav_alt">
            <div class="right-area position-relative ms-0 d-center gap-1 gap-xl-4 d-lg-none">
              <div class="single-item">
                <a
                  href="#"
                  class="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color"
                >
                  {" "}
                  Login <i class="ti ti-arrow-right fs-six-up"></i>
                </a>
              </div>
              <div class="single-item">
                <a
                  href="#"
                  class="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                >
                  {" "}
                  Sign Up{" "}
                  <i class="ti ti-arrow-right fw-semibold fs-six-up"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <Link /> */}
          <ul class="navbar-nav gap-2 gap-lg-3 gap-xxl-8  align-self-center mx-auto mt-4 mt-lg-0">
            <li class="dropdown show-dropdown">
              <a
                href="/"
                aria-label="Navbar Dropdown Button"
                class=" dropdown-nav"
              >
                home
              </a>
            </li>
            <li class="dropdown show-dropdown">
              <button
                type="button"
                aria-label="Navbar Dropdown Button"
                class=" dropdown-nav"
              >
                Markets
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/market">
                    Markets
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/market-details">
                    Markets Details
                  </a>
                </li>
              </ul>
            </li>
            <li class="dropdown show-dropdown">
              <button
                type="button"
                aria-label="Navbar Dropdown Button"
                class=" dropdown-nav"
              >
                Company
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/about">
                    about
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/team">
                    team
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/team-details">
                    team details
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/blog-details">
                    Blog Details
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/careers">
                    careers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/contact">
                    contact
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="dropdown-item" href="/education">
                Education
              </a>
            </li>
            <li class="dropdown show-dropdown">
              <button
                type="button"
                aria-label="Navbar Dropdown Button"
                class=" dropdown-nav"
              >
                Resources
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/legal-docs">
                    legal docs
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/customers">
                    customers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/roadmap">
                    roadmap
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/support">
                    support
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/terms-conditions">
                    terms conditions
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/privacy-policy">
                    privacy-policy
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="right-area position-relative  ms-0 d-center gap-1 gap-xl-4 d-none d-lg-flex">
            <div class="single-item">
              <a
                href="/signin"
                class="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color"
              >
                {" "}
                Login <i class="ti ti-arrow-right fs-six-up"></i>
              </a>
            </div>
            <div class="single-item">
              <a
                href="/signup"
                class="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
              >
                {" "}
                Sign Up <i class="ti ti-arrow-right fw-semibold fs-six-up"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
