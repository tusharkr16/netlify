import React from "react";
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './footer.module.scss'
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={clsx(style.about, style.footerItem)}>
          <h3 className={style.title}>Squat2Fit Unisex Gym</h3>
          <div className={style.description}>
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
        <div className={clsx(style.contact, style.footerItem)}>
          <div className={style.wrapper}>
            <h3 className={style.title}>Connect With Us On :</h3>
            <div className={style.icon_wrapper}>
              <a className={clsx(style.social_icon, style.facebook)} href="https://www.facebook.com/pages/Squat2fit-Unisex-gym/113054150112092" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className={clsx(style.social_icon, style.instagram)} href="https://www.instagram.com/squat2fit/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className={clsx(style.social_icon, style.whatsapp)} href="https://api.whatsapp.com/send?phone=9999777798&text=Hello" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
