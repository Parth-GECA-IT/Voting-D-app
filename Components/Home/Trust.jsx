import React from "react";

const Trust = () => {
  return (
    <section className="people_trust pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/vector.png"
          alt="vector"
          className="position-absolute jello d-none d-xl-flex"
        />
        <img
          src="assets/images/star3.png"
          alt="vector"
          className="position-absolute push_animat d-none d-xxxl-flex"
        />
        <img
          src="assets/images/vector3.png"
          alt="vector"
          className="position-absolute bottom-0 end-0 d-none d-xxxl-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-xxl-7">
            <div className="heading__content mb-8 mb-lg-10 text-center">
              <span className="heading p1-color fs-three mb-5">People Trust Us</span>
              <h4 className="mb-4 mb-lg-6">And we’re proud to earn it every day.</h4>
              <p className="fs-six-up mx-ch mx-auto">
              Our platform is built on principles of transparency, security, and reliability, ensuring that every voter, candidate, and stakeholder feels confident in the process. 
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="singletab">
              <ul className="tablinks d-center flex-wrap gap-3 gap-lg-4  mb-10 mb-xxl-15">
                <li className="nav-links active">
                  <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6  px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                    <i className="ti ti-video fs-four s1-color"></i>Test Your
                    Knowledge
                  </button>
                </li>
                <li className="nav-links">
                  <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6  px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                    <i className="ti ti-video fs-four s1-color"></i>Tutorial Videos
                  </button>
                </li>
                <li className="nav-links">
                  <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6  px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                    <i className="ti ti-video fs-four s1-color"></i>Live Commentary
                  </button>
                </li>
              </ul>
              <div className="tabcontents">
                <div className="tabitem active">
                  <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">
                    <div className="col-xl-6 col-xxl-7 ">
                      <div className="people_trust_thumb d-center p-2 p-lg-5 pseudo_element_after overflow-hidden">
                        <img
                          src="assets/images/people_trust_video.png"
                          className="w-100 max-xxl-un cus-rounded-2"
                          alt="video"
                        />
                        <a
                          href="https://www.youtube.com/watch?v=QphJEO9ZX6s"
                          className="popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle"
                        >
                          <i className="fa-solid fa-play fs-four"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-xxl-5">
                      <div className="trade_on__content">
                        <h4 className="mb-4">Why Blockchain?</h4>
                        <p className="mx-ch">
                        Investing time in blockchain education not only enhances your tech skills but also opens doors to exciting and future-proof opportunities
                        </p>
                        <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Innovation
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Decentralization
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Security
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Transparency
                          </li>
                        </ul>
                        <div className="mt-8 mt-xxl-10">
                          <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="display-four s1-color odometer odometer-auto-theme"
                                  data-odometer-final="1"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  K
                                </span>
                              </div>
                              <span className="mt-4">Users Joined</span>
                            </div>
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="display-four s1-color odometer odometer-auto-theme"
                                  data-odometer-final="10"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  K
                                </span>
                              </div>
                              <span className="mt-4">Volume (In INR)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabitem">
                  <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">
                    <div className="col-xl-6 col-xxl-5">
                      <div className="trade_on__content">
                        <h4 className="mb-4">Why Blockchain?</h4>
                        <p className="mx-ch">
                        Investing time in blockchain education not only enhances your tech skills but also opens doors to exciting and future-proof opportunities
                        </p>
                        <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color"></i>Innovation
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color"></i>Decentralization
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color"></i>Security
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color"></i>Transparency
                          </li>
                        </ul>
                        <div className="mt-8 mt-xxl-10">
                          <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="display-four s1-color odometer odometer-auto-theme"
                                  data-odometer-final="1"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  K
                                </span>
                              </div>
                              <span className="mt-4">Users Joined</span>
                            </div>
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="display-four s1-color odometer odometer-auto-theme"
                                  data-odometer-final="10"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  K
                                </span>
                              </div>
                              <span className="mt-4">Volume (In INR)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-xxl-7 ">
                      <div className="people_trust_thumb d-center p-2 p-lg-5 pseudo_element_after overflow-hidden">
                        <img
                          src="assets/images/people_trust_video.png"
                          className="w-100 max-xxl-un cus-rounded-2"
                          alt="video"
                        />
                        <a
                          href="https://www.youtube.com/watch?v=QphJEO9ZX6s"
                          className="popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle"
                        >
                          <i className="fa-solid fa-play fs-four"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabitem">
                  <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">
                    <div className="col-xl-6 col-xxl-7 ">
                      <div className="people_trust_thumb d-center p-2 p-lg-5 pseudo_element_after overflow-hidden">
                        <img
                          src="assets/images/people_trust_video.png"
                          className="w-100 max-xxl-un cus-rounded-2"
                          alt="video"
                        />
                        <a
                          href="https://www.youtube.com/watch?v=QphJEO9ZX6s"
                          className="popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle"
                        >
                          <i className="fa-solid fa-play fs-four"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-xxl-5">
                      <div className="trade_on__content">
                        <h4 className="mb-4">Why Blockchain?</h4>
                        <p className="mx-ch">
                        Investing time in blockchain education not only enhances your tech skills but also opens doors to exciting and future-proof opportunities
                        </p>
                        <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Innovation
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Decentralization
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Security
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>
                            Transparency
                          </li>
                        </ul>
                        <div className="mt-8 mt-xxl-10">
                          <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="display-four s1-color odometer odometer-auto-theme"
                                  data-odometer-final="1"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  K
                                </span>
                              </div>
                              <span className="mt-4">Users Joined</span>
                            </div>
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="display-four s1-color odometer odometer-auto-theme"
                                  data-odometer-final="10"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  K
                                </span>
                              </div>
                              <span className="mt-4">Volume (In INR)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Trust;
