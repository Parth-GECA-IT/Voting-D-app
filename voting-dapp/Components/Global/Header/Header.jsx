import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Link from "./Link";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../../../context/context";
const Header = () => {
  const { connectWallet, address, setAddress, OWNER_ADDRESS } =
    useContext(VOTING_DAPP_CONTEXT);

  const clickConnect = async () => {
    const userAddress = await connectWallet();
    setAddress(userAddress);
  };

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
              <div className="logodiv" style={{ display:'flex', alignItems:'center' }}>
                <img
                  src="assets/images/LogoF.png"
                  class="logo small_logo d-sm-none"
                  style={{ width: '4em' }}
                  alt="logo"
                />
                <img
                  src="assets/images/LogoF.png"
                  class="logo d-none d-sm-flex"
                  style={{ width: '4em' }}
                  alt="logo"
                />
                <span className="d-none d-sm-flex" 
                style={{ left: '5.1rem', position: 'absolute', fontSize: '38px', fontFamily: 'cursive' }}
                >otz</span>
                {/* <img
                src="assets/images/logo.png"
                class="logo d-none d-sm-flex"
                alt="logo"
              /> */}
              </div>
            </a>
          </div>
          <div class="nav_alt">
            <div class="right-area position-relative ms-0 d-center gap-1 gap-xl-4 d-lg-none">
              {address ? (
                <>
                  <div class="single-item">
                    <a
                      href="/voter"
                      class="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color"
                    >
                      {" "}
                      Voter <i class="ti ti-arrow-right fs-six-up"></i>
                    </a>
                  </div>
                  <div class="single-item">
                    <a
                      href="/candidate"
                      class="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                    >
                      {" "}
                      Candidate{" "}
                      <i class="ti ti-arrow-right fw-semibold fs-six-up"></i>
                    </a>
                  </div>
                </>
              ) : (
                <div class="single-item">
                  <a
                    onClick={() => clickConnect()}
                    class="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                  >
                    {" "}
                    Connect Wallet{" "}
                    <i class="ti ti-arrow-right fw-semibold fs-six-up"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbar-content"
          >
            <ul class="navbar-nav gap-2 gap-lg-3 gap-xxl-8  align-self-center mx-auto mt-4 mt-lg-0">
              <li class="dropdown show-dropdown">
                <a href="/" class=" dropdown-nav active">
                  home
                </a>
              </li>
              <li class="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  class=" dropdown-nav"
                >
                  Candidate
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/register-candidate">
                      All Candidate
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/approve-candidate">
                      Approve Candidate
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
                  Voter
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/register-voter">
                      All Voters
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/approve-voter">
                      Approve Voters
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/all-voters-voted">
                      All Voted Voters
                    </a>
                  </li>
                </ul>
              </li>

              {address == OWNER_ADDRESS?.toLowerCase() && (
                <li>
                  <a class="dropdown-item" href="/owner">
                    Owner
                  </a>
                </li>
              )}
              <li class="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  class=" dropdown-nav"
                >
                  {/* Resources */}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/legal-docs">
                      legal docs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/contact">
                      Contact Us
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
          </div>
          <div class="right-area position-relative  ms-0 d-center gap-1 gap-xl-4 d-none d-lg-flex">
            {address ? (
              <>
                <div class="single-item">
                  <a
                    href="/voter"
                    class="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color"
                  >
                    {" "}
                    Voter <i class="ti ti-arrow-right fs-six-up"></i>
                  </a>
                </div>
                <div class="single-item">
                  <a
                    href="/candidate"
                    class="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                  >
                    {" "}
                    Candidate{" "}
                    <i class="ti ti-arrow-right fw-semibold fs-six-up"></i>
                  </a>
                </div>
              </>
            ) : (
              <div class="single-item">
                <a
                  onClick={() => clickConnect()}
                  class="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                >
                  {" "}
                  Connet Wallet{" "}
                  <i class="ti ti-arrow-right fw-semibold fs-six-up"></i>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
