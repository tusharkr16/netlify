import React from "react";
import "./index.scss";
import companyLogo from "../../images/Squat2Fit_Logo.jpeg";

const Header = () => {
  return (
    <header class="main_header">
      <div class="container">
        <div className="brand">
          <img src={companyLogo} alt="Squat2Fit" />
          <h2 className="title">Squat2Fit</h2>
        </div>
        <nav class="main_nav">
          <ul class="main_nav_list">
            <li>Home</li>
            <li>About us</li>
            <li>Our clients</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
