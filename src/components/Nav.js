import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#aboutMe" onClick={() => handlePageChange("AboutMe")}>
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
