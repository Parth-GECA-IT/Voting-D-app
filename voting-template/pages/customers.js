import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  Customers,
} from "../Components/index";

const customers = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <Customers />
      <Footer />
    </>
  );
};

export default customers;
