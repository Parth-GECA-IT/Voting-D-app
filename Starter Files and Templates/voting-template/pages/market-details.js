import React from "react";

//INTERNAL INPORT

import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  MarketDetail,
} from "../Components/index";
const marketDetail = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <MarketDetail />
      <Footer />
    </>
  );
};

export default marketDetail;
