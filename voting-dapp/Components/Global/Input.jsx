import React from "react";

const Input = ({ name, placeholder, type, handleClick }) => {
  return (
    <div class="single-input">
      <label class="mb-2 nw1-color" for="lname">
        {name}
      </label>
      <input
        type={type}
        class="fs-six-up bg_transparent"
        name={name}
        id={name}
        placeholder={placeholder}
        required
        onChange={handleClick}
      />
    </div>
  );
};

export default Input;
