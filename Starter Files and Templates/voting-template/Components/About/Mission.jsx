import React from "react";

const Mission = () => {
  return (
    <section class="provide-world our_mission pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/vector7.png"
          alt="vector"
          class="position-absolute bottom-0 pt-6 pt-xl-15 d-none d-lg-flex push_animat"
        />
      </div>
      <div class="container">
        <div class="row justify-content-between align-items-center mb-10 mb-lg-15">
          <div class="col-xl-5">
            <span class="heading s1-color fs-five mb-5">Our Mission</span>
            <h3>Empowering Success How We're Making a Difference</h3>
          </div>
          <div class="col-xl-4">
            <p class="fs-six-up mx-ch text-xl-end mt-3 mt-xl-0">
              we believe that success is not reserved for the privileged few.
              It's a journey that anyone can embark upon with right guidance
            </p>
          </div>
        </div>
        <div class="row gy-6 gy-xxl-0">
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-currency-dollar-brunei  fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Client-first approach</h4>
              <p>
                Transformed the trading landscape. Online trading platforms and
                mobile apps have made it easier than ever for individuals
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-brand-cakephp fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Integrity and Compliance</h4>
              <p>
                One of the fundamental principles of trading is risk management.
                Successful traders carefully manage their capital,
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-broadcast fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Fast Execution</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
