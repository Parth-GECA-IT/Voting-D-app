import React from "react";

const Provide = () => {
  return (
    <section className="provide-world pt-120 pb-120  position-relative z-0">
      <div className="container">
        <div className="row gy-6 gy-xxl-0">
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-users-group fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Beginner Course</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <a
                href="signup.html"
                className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Enter Course<i className="ti ti-arrow-narrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-tool fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Trading Tools</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <a
                href="signup.html"
                className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Enter Course<i className="ti ti-arrow-narrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-brand-stackshare fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Stocks and CFDs</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <a
                href="signup.html"
                className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Enter Course<i className="ti ti-arrow-narrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
