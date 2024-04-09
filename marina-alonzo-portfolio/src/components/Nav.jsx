import React from "react";
import Portfolio from "../pages/Portfolio";

function Navbar() {
  return (
    <header className="header">
      <div className="navbar">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about-me" className="nav-link">
            Marina Alonzo
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="../pages/Portfolio" className="nav-link">
            Portfolio
          </a>
        </nav>
        <a
          href="#contact"
          className="nav-link">
          Work With Me
        </a>
      </div>
    </header>
  );
}

export default Navbar;