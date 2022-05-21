import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="box">
      <h1 className="text-center">Jason Couch</h1>
      <nav>
        <a href="#aboutMe" onClick={() => handlePageChange("AboutMe")}>
          About Me
        </a>

        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>

        <a href="#resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>

        <a href="#contact" onClick={() => handlePageChange("Contact")}>
          Contact Me
        </a>
      </nav>
    </div>
  );
}

export default Nav;
