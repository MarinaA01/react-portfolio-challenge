import React from "react";
import Portfolio from "../pages/Portfolio";

function Navbar() {
  return (
    <header className="header">
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#" className="nav-link">About Me</a>
            </li>
            <li>
              <a href="#" className="nav-link">Portfolio</a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link">
                Work With Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;