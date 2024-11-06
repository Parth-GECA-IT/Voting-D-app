import React from "react";

const Testimonial = () => {
  return (
    <section class="testimonial-secondary te pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/icon/quote_bg.png"
          alt="vector"
          class="position-absolute push_animat d-none d-md-flex"
        />
        <img
          src="assets/images/icon/quote_bg.png"
          alt="vector"
          class="position-absolute push_animat d-none d-md-flex"
        />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xxl-7">
            <div class="heading__content mb-10 mb-lg-15 text-center">
              <span class="heading fs-five s1-color mb-5">Testimonial</span>
              <h3>What people say</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="swiper testimonial_swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide d-flex justify-content-center">
                  <div class="col-lg-10 col-xl-8 col-xxl-6">
                    <div class="testimonial__par text-center">
                      <div class="author_thumbs">
                        <img
                          src="assets/images/author10.png"
                          alt="icon"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="author_content">
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-5">Brooklyn Simmons</h5>
                        <span class="fs-eight fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide d-flex justify-content-center">
                  <div class="col-lg-10 col-xl-8 col-xxl-6">
                    <div class="testimonial__par text-center">
                      <div class="author_thumbs">
                        <img
                          src="assets/images/author11.png"
                          alt="icon"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="author_content">
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-5">Cody Fisher</h5>
                        <span class="fs-eight fw_500 mt-2">
                          Account Executive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide d-flex justify-content-center">
                  <div class="col-lg-10 col-xl-8 col-xxl-6">
                    <div class="testimonial__par text-center">
                      <div class="author_thumbs">
                        <img
                          src="assets/images/author12.png"
                          alt="icon"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="author_content">
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-5">Wade Warren</h5>
                        <span class="fs-eight fw_500 mt-2">
                          Medical Assistant
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide d-flex justify-content-center">
                  <div class="col-lg-10 col-xl-8 col-xxl-6">
                    <div class="testimonial__par text-center">
                      <div class="author_thumbs">
                        <img
                          src="assets/images/author13.png"
                          alt="icon"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="author_content">
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-5">Esther Howard</h5>
                        <span class="fs-eight fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide d-flex justify-content-center">
                  <div class="col-lg-10 col-xl-8 col-xxl-6">
                    <div class="testimonial__par text-center">
                      <div class="author_thumbs">
                        <img
                          src="assets/images/author14.png"
                          alt="icon"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="author_content">
                        <p class=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 class="heading p1-color mt-5">Brooklyn Simmons</h5>
                        <span class="fs-eight fw_500 mt-2">
                          President of Sales
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination mt-8 mt-md-10 mt-lg-15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
