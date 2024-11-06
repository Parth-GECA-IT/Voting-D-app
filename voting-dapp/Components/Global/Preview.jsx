import React from "react";

const Preview = ({ pdf }) => {
  return (
    <object
      class="pdf"
      data={pdf}
      style={{
        width: "100%",
        height: "500px",
      }}
    ></object>
  );
};

export default Preview;
