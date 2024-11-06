import React from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  BlogPage,
} from "../Components/index";

const blog = () => {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <BlogPage />
      <Footer />
    </>
  );
};

export default blog;
