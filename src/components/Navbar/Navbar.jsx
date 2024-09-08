import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 id="navbarh1">Rahul Nanera</h1>
      <nav>
        <ul>
          <li>
            <Link to="hero" smooth={true} offset={-4} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={180} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={-10} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} offset={90} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={85} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button id="navConnectbtn">
        <Link to="contact" smooth={true} offset={85} duration={500}>
          Connect With Me
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
