import React from "react";

const Banner = () => {
  return (
    <section class="banner-section  pt-120 pb-120">
      <div class="container mt-lg-0 pt-18 pt-xl-20">
        <div class="row">
          <div class="col-12 breadcrumb-area ">
            <h2 class="mb-4">About Us</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li
                  class="breadcrumb-item ms-2 ps-7 active"
                  aria-current="page"
                >
                  <span>About Us</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
