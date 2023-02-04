import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about footer_item">
          <h3 className="title">Squat2Fit Unisex Gym</h3>
          <div className="description">
            <strong>Address:</strong>
            <br />
            1st floor, sikka cham, B-Block, dda market, C-Block, Dilshad Garden,
            Delhi, 110095
          </div>
        </div>
        <div className="navigation footer_item">
          <div className="wrapper">
            <h3 className="title">Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="contact footer_item">
          <div className="wrapper">
            <h3 className="title">Contact</h3>
            <span>FB</span>
            <span>IG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
