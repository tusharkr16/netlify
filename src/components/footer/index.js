import React from "react";
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about footer_item">
          <h3 className="title">Squat2Fit Unisex Gym</h3>
          <div className="description">
            <strong>Address:</strong>
            <br />
            1ST FLOOR SIKKA CHAM B BLOCK DDA MARKET
            DILSHAD GARDEN
            DELHI, DELHI 110095

            <br />
            <strong>Mobile No: </strong>
            09999777798
            <br />
            <strong>Email: </strong>
            SQUAT2FIT@SQUAT2FIT.IN
          </div>
        </div>
        <div className="contact footer_item">
          <div className="wrapper">
            <h3 className="title">Connect With Us On :</h3>
            <div className="icon_wrapper">
              <a className="social_icon facebook" href="https://www.facebook.com/pages/Squat2fit-Unisex-gym/113054150112092" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="social_icon instagram" href="https://www.instagram.com/squat2fit/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="social_icon whatsapp" href="https://api.whatsapp.com/send?phone=9999777798&text=Hello" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
