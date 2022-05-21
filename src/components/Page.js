import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import AboutMe from "./Pages/AboutMe";
import Nav from "./Nav";
import Footer from "./Footer";
import React, { useState } from "react";

function Body() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>Jason Couch</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer />
    </div>
  );
}

export default Body;
