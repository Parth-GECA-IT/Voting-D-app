import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  RoadMap,
} from "../Components/index";

const signup = () => {
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
            <div class="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto">
              <div class="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
                <div class="head_part">
                  <a href="index.html">
                    {" "}
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                  <h5 class="mt-5 mt-lg-6">Sign up to Your Account</h5>
                </div>
                <form
                  method="POST"
                  autocomplete="off"
                  id="frmContactus"
                  class="contact__form mt-8 mt-lg-10  text-start"
                >
                  <div class="d-flex flex-column gap-5 gap-lg-6 ">
                    <div class="row g-5 g-lg-6">
                      <div class="col-sm-6 col-md-12 col-xl-6">
                        <div class="single-input">
                          <label class="mb-2 nw1-color " for="fname">
                            First Name
                          </label>
                          <input
                            type="text"
                            class="fs-six-up bg_transparent"
                            name="fname"
                            id="fname"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-12 col-xl-6">
                        <div class="single-input">
                          <label class="mb-2 nw1-color" for="lname">
                            Last Name
                          </label>
                          <input
                            type="text"
                            class="fs-six-up bg_transparent"
                            name="lname"
                            id="lname"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
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
                    <div class="single-input">
                      <label class="mb-2 nw1-color" for="cpassword">
                        Confirm Password
                      </label>
                      <div class="input-pass">
                        <input
                          type="password"
                          class="fs-six-up bg_transparent pe-13"
                          name="cpassword"
                          id="cpassword"
                          placeholder="Confirm Password"
                          required
                        />
                        <span class="password-eye-icon"></span>
                      </div>
                    </div>
                    <div class="single-input">
                      <label class="mb-2 nw1-color" for="email">
                        Email
                      </label>
                      <input
                        type="email"
                        class="fs-six-up bg_transparent"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <label class="checkbox-single d-flex align-items-center nw1-color mt-3">
                    <span class="checkbox-area d-center">
                      <input type="checkbox" />
                      <span class="checkmark d-center"></span>
                    </span>
                    I accept the privacy policy
                  </label>
                  <div class=" mt-7 mt-lg-8">
                    <button
                      type="submit"
                      class="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                      name="submit"
                      id="submit"
                    >
                      Sign Up
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
                    Already have an account? <a href="signin.html">Log in</a>
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

export default signup;
