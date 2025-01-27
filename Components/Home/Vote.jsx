import React from "react";

const Vote = () => {
  return (
    <section className="trade_on a2-bg pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/coin.png"
          alt="vector"
          className="position-absolute d-none d-md-flex previewShapeRevX"
        />
        <img
          src="assets/images/star2.png"
          alt="vector"
          className="position-absolute d-none d-xl-flex push_animat"
        />
        <img
          src="assets/images/coin_vector.png"
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX opacity-50"
        />
      </div>
      <div className="container">
        <div className="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
          <div className="col-lg-6 col-xxl-5">
            <div className="trade_on__content">
              <span className="heading s1-color fs-five mb-5">Choose us to vote</span>
              <h3 className="mb-4 mb-lg-5">World className Platform</h3>
              <p className="fs-six mx-ch">
              Our platform is built to meet global standards of excellence, combining innovation, security, and user-centric design to deliver a seamless voting experience. Trusted by individuals, organizations, and governments, we strive to set the benchmark for modern democratic processes.
              </p>
              <ul className="d-flex gap-4 flex-column mt-6">
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>Security and Integrity
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>
                  Transparency{" "}
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>Privacy and Anonymity{" "}
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four"></i>Reduced Fraud and Manipulation{" "}
                </li>
              </ul>
              <a
                href="#top"
                className="cmn-btn secondary-alt fs-six-up nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6 mt-7 mt-xxl-8"
              >
                Sign up Now <i className="ti ti-arrow-right fs-four"></i>
              </a>
            </div>
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="trade_on__thumbs d-flex justify-content-end">
              <img src="assets/images/trade_on.png" alt="Imgae" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vote;
