import React from "react";

const Provide = () => {
  return (
    <section className="provide-world bg nb4-bg pt-120 pb-120  position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
        <img
          src="assets/images/button.png"
          alt="vector"
          className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading p1-color fs-five mb-5">
              Welcome to the Online Voting System
              </span>
              <h3 className="mb-5 mb-lg-6">
              Empowering  <span className="s1-color">Democracy</span>{" "}
              with secure and transparent voting
              </h3>
              <p className="fs-six-up mx-ch mx-auto">
              Participate in the elections, Your voice matters.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-6 gy-xxl-0">
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-award-filled fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Secure & Transparent Voting</h4>
              <p>
              Our platform ensures secure, decentralized, and transparent voting using cutting-edge blockchain technology.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-users fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Anonymity</h4>
              <p>
              We aim to make elections fair, efficient, and accessible for everyone.Our mission is to make voting accessible, fair, and secure for everyone, no matter where they are. </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-shield-check-filled fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Real-time Results</h4>
              <p>
              We ensure that results are updated in real-time as votes are cast and recorded. Every vote is instantly verified, encrypted, and added to the digital ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
