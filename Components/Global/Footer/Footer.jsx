"use client"
import React from "react";

const Footer = () => {
  return (
    <footer className="footer a2-bg position-relative pt-15 pt-lg-0 z-0 ">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-xxxl-flex">
        <img
          src="assets/images/vector.png"
          alt="vector"
          className="position-absolute jello"
        />
        <img
          src="assets/images/vector4.png"
          alt="vector"
          className="position-absolute bottom-0 end-0"
        />
      </div>
      <div className="container">
        <div className="start-earning nb3-bg cus-rounded-2 d-flex align-items-center p-4 p-sm-6 p-md-10 p-lg-15 p-xl-20 pe-lg-6 pe-xl-16 overflow-hidden position-relative">
          <div className="vector_effect position-absolute d-center justify-content-end end-0  d-flex gap-20">
            <img
              src="/assets/images/star2.png"
              alt="vector"
              className="d-none d-xxl-flex push_animat"
            />
            <img
              src="/assets/images/star_focus.png"
              alt="vector"
              className="d-none d-sm-flex rotate time_dur ms-auto ms-lg-0 me-md-5"
            />
          </div>
          <div className="row gy-6 w-100 text-center text-sm-start align-items-center justify-content-sm-between">
            <div className="col-sm-8">
              <h2>Start learning </h2>
              <p className="fs-six-up fw_500 mt-5">
                Try our super easy portal for free
              </p>
            </div>
            <div className="col-sm-4 text-sm-end">
              <a
                href="/"
                className="cmn-btn secondary-alt ms-auto fs-five nb4-xxl-bg gap-2 align-items-center  py-2 px-4 py-lg-3 px-lg-5"
              >
                Register <i className="ti ti-arrow-right fs-four"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row gy-8 gy-sm-12 gy-lg-0 pt-120 pb-120">
          <div className="col-6 col-lg-3">
            <div className="footer__part">
              <h4 className="mb-6 mb-lg-8">Quick Link</h4>
              <ul className="footer_list d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <li>
                  <a
                    className="n2-color d-flex align-items-center"
                    href="market.html"
                  >
                    {" "}
                    Markets
                  </a>
                </li>
                <li>
                  <a className="n2-color" href="/roadmap">
                    Education
                  </a>
                </li>
                <li>
                  <a className="n2-color" href="/support">
                    Support
                  </a>
                </li>
                <li>
                  <a className="n2-color" href="/legal-docs">
                    Legal docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="footer__part">
              <h4 className="mb-6 mb-lg-8">Company</h4>
              <ul className="footer_list d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <li>
                  <a className="n2-color" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="n2-color" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="n2-color" href="#">
                    Carreers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="footer__part">
              <h4 className="mb-6 mb-lg-8">Legal</h4>
              <ul className="footer_list d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <li>
                  <a className="n2-color" href="/terms-conditions">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="n2-color" href="/privacy-policy">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a className="n2-color" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="footer__part">
              <h4 className="mb-6 mb-lg-8">Contact Us</h4>
              <div className="d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <a href="/contact">
                  <span className="__cf_email__">abc@geca.ac.in</span>
                </a>
                <a href="tel:+123456789">+0123 456 789</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 border-top border-color opac-20 py-7 py-xxl-8">
            <div className="footer__copyright d-center gap-15 flex-wrap justify-content-md-between">
              <p className="fs-six order-2 order-md-0 text-center text-md-start">
                Copyright ©<span className=""></span> @votz{" "}
              </p>
              <ul className="social-area d-center gap-2 gap-md-3">
                <li>
                  <a className="d-center cus-rounded-1 fs-four" href="#">
                    <i className="ti ti-brand-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="d-center cus-rounded-1 fs-four" href="#">
                    <i className="ti ti-brand-twitch"></i>
                  </a>
                </li>
                <li>
                  <a className="d-center cus-rounded-1 fs-four" href="#">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="d-center cus-rounded-1 fs-four" href="#">
                    <i className="ti ti-brand-discord-filled"></i>
                  </a>
                </li>
                <li>
                  <a className="d-center cus-rounded-1 fs-four" href="#">
                    <i className="ti ti-brand-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
