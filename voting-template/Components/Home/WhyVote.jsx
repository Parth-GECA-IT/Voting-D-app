import React from "react";

const WhyVote = () => {
  return (
    <section class="why-trade s1-bg alt-color position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/sun.png"
          alt="vector"
          class="position-absolute push_animat"
        />
        <img
          src="assets/images/star.png"
          alt="vector"
          class="position-absolute  d-xxxl-flex previewSkew"
        />
      </div>
      <div class="container">
        <div class="row gy-3 gy-lg-0 justify-content-center">
          <div class="col-sm-7 col-lg-6 col-xxl-5 order-2 order-lg-0">
            <div class="why-trade__thumbs h-100 d-flex align-items-end ps-20 ps-sm-5 ps-lg-0">
              <img src="assets/images/why_trade.png" alt="Imgae" />
            </div>
          </div>
          <div class="col-lg-6 col-xxl-7">
            <div class="row pt-120 pb-120">
              <div class="col-xxl-6 offset-xxl-2">
                <div class="why-trade__part">
                  <span class="heading fs-five">Why Trade With</span>
                  <h3 class="mb-3 mt-5">Trade Genius</h3>
                  <p>
                    Trading is the art and science of buying and selling
                    financial instruments, such as stocks bonds currencies.{" "}
                  </p>
                  <a
                    href="about.html"
                    class="cmn-btn link secondary-link fs-six-up  gap-2 gap-lg-3 align-items-center mt-5"
                  >
                    {" "}
                    Learn more <i class="ti ti-arrow-narrow-right fs-four"></i>
                  </a>
                </div>
              </div>
              <div class="col-xxl-12 mt-7 mt-md-8 mt-xxl-3">
                <div class="why-trade__part d-flex align-items-center">
                  <div class="vector d-none d-xxl-flex px-xxl-15">
                    <img
                      src="assets/images/trade_vector.png"
                      alt="Image"
                      class="max-xxl-un"
                    />
                  </div>
                  <div class="content">
                    <h3 class="mb-3">Trade Apex</h3>
                    <p>
                      Trading is the art and science of buying and selling
                      financial instruments, suc stocks, bonds, currencies
                      commodities, and cryptocurrencies, with the aim of making
                      a profit. It's a dynamic and multifaceted professionals
                      from around the world.
                    </p>
                    <a
                      href="about.html"
                      class="cmn-btn link secondary-link fs-six-up  gap-2 gap-lg-3 align-items-center mt-5"
                    >
                      {" "}
                      Learn more{" "}
                      <i class="ti ti-arrow-narrow-right fs-four"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVote;
