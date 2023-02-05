import React from "react";
import { navigate } from "@reach/router";
import "./index.scss";
import companyLogo from "../../images/Squat2Fit_Logo.jpeg";

const tabs = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "About Us",
    route: "/about"
  },
  {
    title: "Community",
    route: "/community"
  },
  {
    title: "Contact",
    route: "/contact"
  },
]

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
            {
              tabs.map(tab => {
                return <li role="button" onClick={() => navigate(tab.route)}>{tab.title}</li>
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
