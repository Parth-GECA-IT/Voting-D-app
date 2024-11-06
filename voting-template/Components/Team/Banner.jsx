import React from "react";

const Banner = () => {
  return (
    <section class="banner-section pt-120 pb-120">
      <div class="container mt-10 mt-lg-0 pt-15 pt-lg-20 pb-5 pb-lg-0">
        <div class="row">
          <div class="col-12 breadcrumb-area">
            <h2 class="mb-4">Team</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li
                  class="breadcrumb-item ms-2 ps-7 active"
                  aria-current="page"
                >
                  <span>Team</span>
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
