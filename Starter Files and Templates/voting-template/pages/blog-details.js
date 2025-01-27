import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  BlogDetail,
} from "../Components/index";
const blogDetails = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default blogDetails;
