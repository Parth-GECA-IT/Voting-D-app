import React from "react";

const Details = () => {
  return (
    <section class="team-details pt-120 pb-120 position-relative z-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-12 col-xxl-10">
            <div class="team-details__card d-center flex-column flex-md-row gap-6">
              <div class="team-details__thumbs">
                <img
                  src="assets/images/team_details.png"
                  alt="Image"
                  class="cus-rounded-1 max-auto max-lg-un"
                />
              </div>
              <div class="team__content pe-md-4">
                <h5 class="team__title mb-4">Esther Howard</h5>
                <p class="mb-4">
                  Hey there! So glad you stopped by to Meet Our Company. Don't
                  miss out on this opportunity to learn about what we do and the
                  amazing team that makes it all happen!
                </p>
                <p>
                  Our company is all about creating innovative solutions and
                  providing top-notch services to our clients. From start to
                  finish, we're dedicated to delivering results that exceed
                  expectations.
                </p>
                <ul class="social-area d-flex align-items-center gap-2 gap-md-3 mt-8 mt-lg-10">
                  <li>
                    <a class="d-center cus-rounded-1 fs-four" href="#">
                      <i class="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="d-center cus-rounded-1 fs-four" href="#">
                      <i class="ti ti-brand-twitch"></i>
                    </a>
                  </li>
                  <li>
                    <a class="d-center cus-rounded-1 fs-four" href="#">
                      <i class="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a class="d-center cus-rounded-1 fs-four" href="#">
                      <i class="ti ti-brand-discord-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a class="d-center cus-rounded-1 fs-four" href="#">
                      <i class="ti ti-brand-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
