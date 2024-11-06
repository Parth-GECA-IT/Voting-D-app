import React from "react";

const Footer = () => {
  return (
    <footer class="footer a2-bg position-relative pt-15 pt-lg-0 z-0 ">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-xxxl-flex">
        <img
          src="assets/images/vector.png"
          alt="vector"
          class="position-absolute jello"
        />
        <img
          src="assets/images/vector4.png"
          alt="vector"
          class="position-absolute bottom-0 end-0"
        />
      </div>
      <div class="container">
        <div class="start-earning nb3-bg cus-rounded-2 d-flex align-items-center p-4 p-sm-6 p-md-10 p-lg-15 p-xl-20 pe-lg-6 pe-xl-16 overflow-hidden position-relative">
          <div class="vector_effect position-absolute d-center justify-content-end end-0  d-flex gap-20">
            <img
              src="assets/images/star2.png"
              alt="vector"
              class="d-none d-xxl-flex push_animat"
            />
            <img
              src="assets/images/star_focus.png"
              alt="vector"
              class="d-none d-sm-flex rotate time_dur ms-auto ms-lg-0 me-md-5"
            />
          </div>
          <div class="row gy-6 w-100 text-center text-sm-start align-items-center justify-content-sm-between">
            <div class="col-sm-8">
              <h2>Start earning with only $20</h2>
              <p class="fs-six-up fw_500 mt-5">
                Try our super easy portal for free
              </p>
            </div>
            <div class="col-sm-4 text-sm-end">
              <a
                href="signup.html"
                class="cmn-btn secondary-alt ms-auto fs-five nb4-xxl-bg gap-2 align-items-center  py-2 px-4 py-lg-3 px-lg-5"
              >
                Register <i class="ti ti-arrow-right fs-four"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="row gy-8 gy-sm-12 gy-lg-0 pt-120 pb-120">
          <div class="col-6 col-lg-3">
            <div class="footer__part">
              <h4 class="mb-6 mb-lg-8">Quick Link</h4>
              <ul class="footer_list d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <li>
                  <a
                    class="n2-color d-flex align-items-center"
                    href="market.html"
                  >
                    {" "}
                    markets
                  </a>
                </li>
                <li>
                  <a class="n2-color" href="education.html">
                    Education
                  </a>
                </li>
                <li>
                  <a class="n2-color" href="support.html">
                    Support
                  </a>
                </li>
                <li>
                  <a class="n2-color" href="legal-docs.html">
                    Legal docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="footer__part">
              <h4 class="mb-6 mb-lg-8">Company</h4>
              <ul class="footer_list d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <li>
                  <a class="n2-color" href="about.html">
                    About
                  </a>
                </li>
                <li>
                  <a class="n2-color" href="blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="n2-color" href="careers.html">
                    Carreers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="footer__part">
              <h4 class="mb-6 mb-lg-8">Legal</h4>
              <ul class="footer_list d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <li>
                  <a class="n2-color" href="terms-conditions.html">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a class="n2-color" href="privacy-policy.html">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a class="n2-color" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="footer__part">
              <h4 class="mb-6 mb-lg-8">Contact Us</h4>
              <div class="d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                <a href="/cdn-cgi/l/email-protection#d7beb9b1b897b2afb6baa7bbb2f9b4b8ba">
                  <span
                    class="__cf_email__"
                    data-cfemail="375e59515877524f565a475b521954585a"
                  >
                    [email&#160;protected]
                  </span>
                </a>
                <a href="tel:+123456789">+0123 456 789</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 border-top border-color opac-20 py-7 py-xxl-8">
            <div class="footer__copyright d-center gap-15 flex-wrap justify-content-md-between">
              <p class="fs-six order-2 order-md-0 text-center text-md-start">
                Copyright ©<span class=""></span> @theblockchaincoders{" "}
              </p>
              <ul class="social-area d-center gap-2 gap-md-3">
                <li>
                  <a class="d-center cus-rounded-1 fs-four" href="#">
                    <i class="ti ti-brand-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="d-center cus-rounded-1 fs-four" href="#">
                    <i class="ti ti-brand-twitch"></i>
                  </a>
                </li>
                <li>
                  <a class="d-center cus-rounded-1 fs-four" href="#">
                    <i class="ti ti-brand-instagram"></i>
                  </a>
                </li>
                <li>
                  <a class="d-center cus-rounded-1 fs-four" href="#">
                    <i class="ti ti-brand-discord-filled"></i>
                  </a>
                </li>
                <li>
                  <a class="d-center cus-rounded-1 fs-four" href="#">
                    <i class="ti ti-brand-youtube"></i>
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
