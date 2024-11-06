import React from "react";

const PopUp = ({ candidate }) => {
  return (
    <div class="custom-new">
      <div class="custom-card">
        <div class="custom-header">
          <span class="custom-icon">
            <img
              src={candidate?.image}
              style={{
                with: "50px",
                height: "50px",
                borderRadius: "50px",
              }}
              alt=""
            />
          </span>
          <p class="custom-alert">
            Welcome {candidate?._name}! <a href="/">X</a>
          </p>
        </div>

        <p class="custom-message">
          We hope this message finds you well. This is a friendly reminder that
          you have successfully registered for our application. Please ensure
          that all your details are up to date and complete.
        </p>

        <p class="custom-message">
          Thank you for being a part of our community!
        </p>
        <div class="custom-actions">
          <a class="custom-read" href="">
            Status:{" "}
            {candidate?.status == 0
              ? "Pending"
              : candidate?.status == 1
              ? "Approved"
              : "Rejected"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
