import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  RoadMap,
} from "../Components/index";

const signin = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <section class="sign nb4-bg h-100 d-flex align-items-center position-relative z-0">
        <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
          <img
            src="assets/images/star.png"
            alt="vector"
            class="position-absolute push_animat"
          />
        </div>
        <div class="container ">
          <div class="row align-items-center justify-content-center justify-content-xl-start">
            <div class="col-12 col-sm-10 col-md-6">
              <div class="welcome alt-color text-center text-md-start pt-120 pb-120 position-relative z-0">
                <h1 class="display-one">Welcome Back!</h1>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto mx-auto">
              <div class="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
                <div class="head_part">
                  <a href="index.html">
                    {" "}
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                  <h5 class="mt-5 mt-lg-6">Login to Your Account</h5>
                </div>
                <form
                  method="POST"
                  autocomplete="off"
                  id="frmContactus"
                  class="contact__form mt-8 mt-lg-10 text-start"
                >
                  <div class="d-flex flex-column gap-5 gap-lg-6 ">
                    <div class="single-input">
                      <label class="mb-2 nw1-color" for="lname">
                        User Name
                      </label>
                      <input
                        type="text"
                        class="fs-six-up bg_transparent"
                        name="uname"
                        id="uname"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div class="single-input">
                      <label class="mb-2 nw1-color" for="password">
                        Password
                      </label>
                      <div class="input-pass">
                        <input
                          type="password"
                          class="fs-six-up bg_transparent pe-13"
                          name="password"
                          id="password"
                          placeholder="Password"
                          required
                        />
                        <span class="password-eye-icon"></span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 d-flex align-items-center justify-content-between gap-10 flex-wrap">
                    <label class="checkbox-single d-flex align-items-center nw1-color">
                      <span class="checkbox-area d-center">
                        <input type="checkbox" />
                        <span class="checkmark d-center"></span>
                      </span>
                      Rember me
                    </label>
                    <a href="#" class="nw1-color">
                      Forgot Password?
                    </a>
                  </div>
                  <div class=" mt-7 mt-lg-8">
                    <button
                      type="submit"
                      class="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                      name="submit"
                      id="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <span class="or-option d-center w-100 mt-7 mt-lg-8 position-relative z-0">
                  <span class="px-3 nb4-bg">Or sign in with</span>
                </span>
                <div class="d-center gap-5 mt-7 mt-lg-8">
                  <a href="#">
                    <img src="assets/images/google.png" alt="Google logo" />
                  </a>
                  <a href="#">
                    {" "}
                    <img src="assets/images/facebook.png" alt="FB logo" />
                  </a>
                </div>
                <div class="mt-8 mt-lg-10">
                  <p>
                    Don’t have an account?{" "}
                    <a href="signup.html">Register Here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default signin;
