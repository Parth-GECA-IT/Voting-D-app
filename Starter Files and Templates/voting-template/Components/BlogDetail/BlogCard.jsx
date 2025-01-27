import React from "react";

const BlogCard = () => {
  return (
    <section class="blog-details overflow-visible sidebar-section  pt-120 pb-120">
      <div class="container">
        <div class="row gy-4 gy-lg-0">
          <div class="col-lg-7 col-xl-8">
            <div class="d-lg-none">
              <button class="button sidebar_toggler_btn mb-4 d-flex align-items-center gap-2">
                <i class="ti ti-layout-sidebar-left-collapse"></i>
                <span>Sidebar Toggler</span>
              </button>
            </div>
            <div class="d-flex flex-column gap-10 gap-lg-15 ">
              <div class="blog__card">
                <div class="blog__thumbs position-relative">
                  <img
                    src="assets/images/blog_details.png"
                    alt="Image"
                    class="w-100 cus-rounded-1"
                  />
                </div>
                <div class="blog_news__content mt-5">
                  <div class="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-3">
                    August 17,2023 <span>|</span> Written by jason Turner
                  </div>
                  <h2 class="mb-5">
                    Trading Pitfalls Common Mistakes and How to Avoid Them...
                  </h2>
                  <p class=" mb-7 mb-lg-8">
                    rading can be a rewarding endeavor, but it's not without its
                    challenges. Even experienced traders can fall victim to
                    common mistakes that can negatively impact their portfolios.
                    In this blog post, we'll highlight ten common trading
                    mistakes and provide insights on how to avoid them to
                    enhance your chances of success in the financial markets.
                  </p>
                  <div class="border-start border-color border-4 ps-4 ps-lg-5 py-1">
                    <em class="fs-five fw_500 nw1-color">
                      One of the most prevalent mistakes is trading without a
                      well-defined plan. Trading without clear objectives, entry
                      and exit strategies, and risk management guidelines can
                      lead to impulsive decisions and losses.
                    </em>
                  </div>
                </div>
              </div>
              <div class="blog-details__inner">
                <h3>Navigating the Trading Jungle A Beginner's Guide</h3>
                <p class="mt-3">
                  Before you venture into the trading world, it's crucial to
                  grasp the fundamentals. Trading involves the buying and
                  selling of financial assets, such as stocks, currencies,
                  commodities, or cryptocurrencies, with the goal of making a
                  profit.{" "}
                </p>
                <div class="row mt-5">
                  <div class="col-md-6">
                    <img
                      src="assets/images/blog_details_inner.png"
                      class="cus-rounded"
                      alt="Images"
                    />
                  </div>
                  <div class="col-md-6">
                    <img
                      src="assets/images/blog_details_inner2.png"
                      class="cus-rounded"
                      alt="Images"
                    />
                  </div>
                </div>
                <p class="mt-5">
                  One of the most prevalent mistakes is trading without a
                  well-defined plan. Trading without clear objectives and risk
                  management guidelines can lead to impulsive decisions and
                  losses.
                </p>
              </div>
              <div class="tag-area border-top border-bottom border-color third py-5 d-flex justify-content-between gap-10 flex-wrap row-gap-4">
                <div class="tag d-center gap-5 gap-lg-6">
                  <span class="heading fs-four">Tags</span>
                  <div class="tag-content d-flex gap-3 ">
                    <a
                      href="#"
                      class="cmn-btn tag_btn active cus-rounded-3 py-2 px-4"
                    >
                      Trading
                    </a>
                    <a href="#" class="cmn-btn tag_btn cus-rounded-3 py-2 px-4">
                      Investor
                    </a>
                  </div>
                </div>
                <div class="tag d-center gap-5 gap-lg-6">
                  <span class="heading fs-four">Share</span>
                  <ul class="social-area d-center gap-2 gap-md-3">
                    <li>
                      <a class="d-center cus-rounded-1 fs-four" href="#">
                        <i class="ti ti-brand-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-center cus-rounded-1 fs-four" href="#">
                        <i class="ti ti-brand-twitch"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-center cus-rounded-1 fs-four" href="#">
                        <i class="ti ti-brand-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-center cus-rounded-1 fs-four" href="#">
                        <i class="ti ti-brand-discord-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-center cus-rounded-1 fs-four" href="#">
                        <i class="ti ti-brand-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="comments-area d-flex gap-7 gap-lg-8 flex-column">
                <h4 class="mb-2">
                  <span>02</span> Comment
                </h4>
                <div class="content-part d-flex flex-column flex-sm-row gap-4 gap-lg-6">
                  <div class="author__thumbs">
                    <img
                      src="assets/images/comment_author.png"
                      class="rounded-circle max-un"
                      alt="image"
                    />
                  </div>
                  <div class="author__content">
                    <div class="d-flex justify-content-between gap-10">
                      <div class="author__info">
                        <span class="fs-five fw_500 nw1-color">
                          Marvin McKinney
                        </span>
                        <p class="author__submit-time fs-seven mt-1">
                          October 07,2023
                        </p>
                      </div>
                      <div class="feedback__content">
                        <button class="reply-btn gap-2 d-center fs-six-up fw_500 nw1-color">
                          <i class="ti ti-message-dots fs-four p1-color"></i>
                          Reply
                        </button>
                      </div>
                    </div>
                    <p class="mt-3">
                      Trading is not just about making money; it's about
                      personal growth. It challenges you to become a better
                      decision-maker, strategist, and disciplined individual.
                    </p>
                    <form class="reply-form">
                      <div class="input-area d-flex p-3 px-lg-5 gap-2 cus-rounded-1 mt-4">
                        <input type="text" placeholder="Search" required />
                        <button
                          type="submit"
                          class="icon_btn d-center p1-bg rounded-circle "
                        >
                          <i class="ti ti-search fs-five nb4-color"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="content-part d-flex flex-column flex-sm-row gap-4 gap-lg-6">
                  <div class="author__thumbs">
                    <img
                      src="assets/images/comment_author2.png"
                      class="rounded-circle max-un"
                      alt="image"
                    />
                  </div>
                  <div class="author__content">
                    <div class="d-flex justify-content-between gap-10">
                      <div class="author__info">
                        <span class="fs-five fw_500 nw1-color">Robert Fox</span>
                        <p class="author__submit-time fs-seven mt-1">
                          October 05,2023
                        </p>
                      </div>
                      <div class="feedback__content">
                        <button class="reply-btn gap-2 d-center fs-six-up fw_500 nw1-color">
                          <i class="ti ti-message-dots fs-four p1-color"></i>
                          Reply
                        </button>
                      </div>
                    </div>
                    <p class="mt-3">
                      Trading is not just about making money; it's about
                      personal growth. It challenges you to become a better
                      decision-maker, strategist, and disciplined individual.
                    </p>
                    <form class="reply-form">
                      <div class="input-area d-flex p-3 px-lg-5 gap-2 cus-rounded-1 mt-4">
                        <input type="text" placeholder="Search" required />
                        <button
                          type="submit"
                          class="icon_btn d-center p1-bg rounded-circle "
                        >
                          <i class="ti ti-search fs-five nb4-color"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="comments-form cus-rounded-1 nb3-bg">
                <form
                  autocomplete="off"
                  id="frmContactus"
                  class="message__form p-4 p-lg-8"
                >
                  <h6 class="message__title mb-8 mb-lg-10">Leave A Comment</h6>
                  <div class="d-flex gap-7 gap-lg-8 flex-column">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="single-input">
                          <label class="label fw_500 nw1-color mb-4" for="name">
                            Name
                          </label>
                          <input
                            type="text"
                            class="fs-seven"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="single-input">
                          <label
                            class="label fw_500 nw1-color mb-4"
                            for="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            class="fs-seven"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="input-single">
                      <label class="label fw_500 nw1-color mb-4" for="message">
                        Message
                      </label>
                      <textarea
                        class="fs-seven"
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Enter Your Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <span id="msg"></span>
                  <button
                    type="submit"
                    class="cmn-btn py-3 px-5 px-lg-6 mt-8 mt-lg-10 d-flex ms-auto"
                    name="submit"
                    id="submit"
                  >
                    Submit Comments<i class="bi bi-arrow-up-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xl-4 ">
            <div class="sidebar nb4-bg cus-scrollbar sidebar-lg-section d-flex flex-column gap-5 gap-lg-6">
              <div class="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 class="mb-4">Search Here</h5>
                <form class="sidebar-search">
                  <div class="input-area d-flex p-3 gap-2 cus-rounded-1">
                    <input type="text" placeholder="Search" required />
                    <button
                      type="submit"
                      class="icon_btn d-center p1-bg rounded-circle"
                    >
                      <i class="ti ti-search fs-five nb4-color"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 class="pb-5 mb-5 border-bottom border-color four">
                  Category
                </h5>
                <ul class="category d-flex flex-column gap-4">
                  <li>
                    <a
                      href="blog.html"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Trading Strategies</span> <span>02</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Technical Analysis</span> <span>01</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Fundamental Analysis</span> <span>07</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Risk Management</span> <span>04</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog.html"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>Cryptocurrency Trading</span> <span>03</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 class="pb-5 mb-5 border-bottom border-color four">
                  Recent Post
                </h5>
                <div class="recent-posts d-flex flex-column gap-5">
                  <div class="recent-posts__part d-flex gap-3 align-items-center">
                    <div class="recent-posts__thumb">
                      <img
                        src="assets/images/sidebar_blog.png"
                        class="cus-rounded-1"
                        alt="image"
                      />
                    </div>
                    <div class="recent-posts__title">
                      <a href="blog-details.html">
                        <h5>The Psychology of Trading</h5>
                      </a>
                      <p class="author__submit-time mt-3">October 07,2023</p>
                    </div>
                  </div>
                  <div class="recent-posts__part d-flex gap-3 align-items-center">
                    <div class="recent-posts__thumb">
                      <img
                        src="assets/images/sidebar_blog2.png"
                        class="cus-rounded-1"
                        alt="image"
                      />
                    </div>
                    <div class="recent-posts__title">
                      <a href="blog-details.html">
                        <h5>The Crypto Revolution</h5>
                      </a>
                      <p class="author__submit-time mt-3">September 20,2023</p>
                    </div>
                  </div>
                  <div class="recent-posts__part d-flex gap-3 align-items-center">
                    <div class="recent-posts__thumb">
                      <img
                        src="assets/images/sidebar_blog3.png"
                        class="cus-rounded-1"
                        alt="image"
                      />
                    </div>
                    <div class="recent-posts__title">
                      <a href="blog-details.html">
                        <h5>Building Your Trading Plan</h5>
                      </a>
                      <p class="author__submit-time mt-3">August 28,2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nb3-bg cus-rounded-1 p-4 p-lg-6">
                <h5 class="pb-5 mb-5 border-bottom border-color four">
                  Populer Tag
                </h5>
                <div class="tag-area">
                  <div class="tag d-center gap-5 gap-lg-6">
                    <div class="tag-content d-flex gap-3 flex-wrap">
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn active cus-rounded-3 py-2 px-4"
                      >
                        Trading
                      </a>
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Analysis
                      </a>
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Research
                      </a>
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Mentoring
                      </a>
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Strategy
                      </a>
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Planning
                      </a>
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Business
                      </a>
                      <a
                        href="blog.html"
                        class="cmn-btn tag_btn cus-rounded-3 py-2 px-4"
                      >
                        Leadership
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
