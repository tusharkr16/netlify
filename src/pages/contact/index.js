"use client"

import React, { useEffect } from 'react'
import { Footer, Header, HeroSection, Layout } from '../../components'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import styles from "./contact.module.scss"


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



  const BlogSection = (position) => {
    if (position === 'right') {
      return (
        <>
          {getFrame()}
        </>
      )
    }
  }

  return (
    <div className={styles.BlogSection}>
      {BlogSection(props.position)}
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.wrapper}>
        <BlogSection
          framesrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14001.520114429526!2d77.30926370000002!3d28.678276500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf839e426f7%3A0x3a45dfb8f83b3f77!2sSQUAT%202%20FIT%20unisex%20gym!5e0!3m2!1sen!2sin!4v1705770341537!5m2!1sen!2sin"
          position="right"
        />
      </div>
    </>
  )
}

export default Contact