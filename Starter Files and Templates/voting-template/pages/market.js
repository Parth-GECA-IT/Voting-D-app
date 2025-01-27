import React from "react";

//INTERNAL INPORT

import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  MarketStart,
} from "../Components/index";

const market = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <MarketStart />
      <Footer />
    </>
  );
};

export default market;
