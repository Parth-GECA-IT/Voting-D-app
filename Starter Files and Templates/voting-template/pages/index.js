import React from "react";

//INTERNAL INPORT

import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  HeroSection,
  WhyVote,
  Blog,
  Provide,
  Testimonial,
  Trust,
  Vote,
} from "../Components/index";

const index = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <HeroSection />
      <WhyVote />
      <Provide />
      <Vote />
      <Trust />
      {/* <Testimonial /> */}
      <Blog />
      <Footer />
    </>
  );
};

export default index;
