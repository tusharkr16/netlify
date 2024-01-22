"use client"

import React, { useEffect } from 'react'
import { Footer, Header, HeroSection, Layout } from '../../components'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./page.scss"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';


const BlogSection = (props) => {

  const isBrowser = () => typeof window !== "undefined"
  const isMobile = isBrowser() && window.innerWidth < 768;
  const getFrame = () => (
    <iframe
      src={props.framesrc}
      width={600}
      height={600}
    />
  );

  const getText = () => (
    <div className="blog-text">
      <h2>{props.title}</h2>
      <div>
        {props.description}
      </div>
    </div>
  );

  const getBlogSection = (position) => {
    if (position === 'right') {
      return (
        <>
          {getFrame()}
          {getText()}
        </>
      )
    }

    if (position === 'left' && isMobile) {
      return (
        <>
          {getText()}
          {getFrame()}
        </>
      )
    }


  }

  return (
    <div className="blog-section">
      {getBlogSection(props.position)}
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        delay: 800,
        duration: 700,
      });

    }
  }, []);
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
        <div className="home">
          <BlogSection
            framesrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14001.520114429526!2d77.30926370000002!3d28.678276500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf839e426f7%3A0x3a45dfb8f83b3f77!2sSQUAT%202%20FIT%20unisex%20gym!5e0!3m2!1sen!2sin!4v1705770341537!5m2!1sen!2sin"
            title="Contact Us"
            description={
              <>

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
              </>

            }
            position="right"
          />
        </div>
    </>
  )
}

export default Contact