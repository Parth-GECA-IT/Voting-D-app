import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Careers,
} from "../Components/index";
const careers = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <Careers />
      <Footer />
    </>
  );
};

export default careers;
