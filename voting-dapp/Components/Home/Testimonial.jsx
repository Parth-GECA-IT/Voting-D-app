import React from "react";

const Testimonial = () => {
  return (
    <section class="testimonial p1-bg pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/star.png"
          alt="vector"
          class="position-absolute push_animat"
        />
        <img
          src="assets/images/vector2.png"
          alt="vector"
          class="position-absolute bottom-0 start-0 d-none d-xxxl-flex"
        />
        <img
          src="assets/images/sun.png"
          alt="vector"
          class="position-absolute push_animat d-none d-xxl-flex"
        />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xxl-7">
            <div class="heading__content alt-color mb-10 mb-lg-15 text-center">
              <span class="heading fs-five mb-5">Testimonial</span>
              <h3>What people say</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="swiper common-slider1 cus-rounded-1 d-center align-items-end align-items-xxl-center ">
              <div class="swiper-wrapper">
                <div class="swiper-slide cus-rounded-1 overflow-hidden cus-rounded-1 overflow-hidden">
                  <div class="testimonial__part a2-bg d-flex flex-column flex-sm-row  align-items-center">
                    <div class="testimonial__author d-none d-sm-flex">
                      <img
                        src="assets/images/author.png"
                        class="max-xxl-un "
                        alt="Image"
                      />
                    </div>
                    <div class="testimonial__content p-4 px-lg-7 px-xxl-8 py-lg-6 py-xxl-7">
                      <div class="content__part">
                        <img
                          src="assets/images/icon/quote_left.png"
                          alt="icon"
                        />
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't
                          management that began to see consistent profits. The
                          journey was not without its ups and downs, but the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-4">Brooklyn Simmons</h5>
                        <span class="fs-seven fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide cus-rounded-1 overflow-hidden">
                  <div class="testimonial__part a2-bg d-flex flex-column flex-sm-row  align-items-center">
                    <div class="testimonial__author d-none d-sm-flex">
                      <img
                        src="assets/images/author2.png"
                        class="max-xxl-un "
                        alt="Image"
                      />
                    </div>
                    <div class="testimonial__content p-4 p-lg-7 p-xxl-8">
                      <div class="content__part">
                        <img
                          src="assets/images/icon/quote_left.png"
                          alt="icon"
                        />
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't
                          management that began to see consistent profits. The
                          journey was not without its ups and downs, but the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-4">Chris Moore</h5>
                        <span class="fs-seven fw_500 mt-2">
                          President of Sales
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide cus-rounded-1 overflow-hidden">
                  <div class="testimonial__part a2-bg d-flex flex-column flex-sm-row  align-items-center">
                    <div class="testimonial__author d-none d-sm-flex">
                      <img
                        src="assets/images/author3.png"
                        class="max-xxl-un"
                        alt="Image"
                      />
                    </div>
                    <div class="testimonial__content p-4 p-lg-7 p-xxl-8">
                      <div class="content__part">
                        <img
                          src="assets/images/icon/quote_left.png"
                          alt="icon"
                        />
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't
                          management that began to see consistent profits. The
                          journey was not without its ups and downs, but the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-4">Balogh Imre</h5>
                        <span class="fs-seven fw_500 mt-2">
                          Account Executive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider-btn position-absolute justify-content-end d-center justify-content-xxl-between gap-2 w-100 pb-3 pb-sm-5 pb-xxl-0 px-8 px-sm-18 px-xl-12 px-xxl-18">
                <button
                  type="button"
                  aria-label="Slide Prev"
                  class="ara-prev slide-button cmn-btn2 d-center"
                >
                  <i class="ti ti-arrow-narrow-right"></i>
                </button>
                <button
                  type="button"
                  aria-label="Slide Next"
                  class="ara-next slide-button cmn-btn2 d-center"
                >
                  <i class="ti ti-arrow-narrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
