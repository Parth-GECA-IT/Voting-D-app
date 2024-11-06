import React from "react";

const Link = () => {
  const navMenu = [
    {
      link: "#",
      menu: "Home",
    },
    {
      link: "#",
      menu: "Markets",
    },
    {
      link: "#",
      menu: "Company",
    },
    {
      link: "#",
      menu: "Education",
    },
    {
      link: "#",
      menu: "Resources",
    },
  ];
  return (
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbar-content"
    >
      <ul class="navbar-nav gap-2 gap-lg-3 gap-xxl-8  align-self-center mx-auto mt-4 mt-lg-0">
        {navMenu.map((menu, index) => (
          <li key={index + 1} class="dropdown show-dropdown">
            <a class=" dropdown-nav" href={menu.menu}>
              {menu.menu}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Link;
