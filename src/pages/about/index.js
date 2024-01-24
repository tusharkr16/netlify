"use client"; // This is a client component 👈🏽

import React, { useEffect } from "react";
import { Footer, Header, HeroSection, Layout } from "../../components";
import AboutUsImage from '@/images/Aboutus.jpg';
import AboutUs2Image from '@/images/Aboutus2.jpg';
import AboutUs3Image from '@/images/Aboutus3.jpg';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import Image from "next/image";
import style from "./about.module.scss"
import styles from "../../styles/home.module.scss"

const isMobile = false;

const Section = ({ imgSrc, title, description }) => {
  const getImage = () => {
    return <Image src={imgSrc} alt={title} height={400} width={400} />
  };

  const getText = () => (
    <div className={styles.blogText}>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );


  return (
    <div className={styles.blogSection}>
      {getImage()}
      {getText()}
    </div>
  );
};


const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 700,
    });
  }, []);
  return (
    <>
      <HeroSection />
      <div className={styles.wrapper}>
        <Section
          imgSrc={AboutUsImage}
          title="About Us"
          description={
            " Welcome to Squat2Fit, a dynamic and inclusive fitness community committed to transforming lives through wellness, strength, and camaraderie. At Squat2Fit, we believe that fitness is more than just a physical journey; it's a holistic approach to well-being that encompasses mind, body, and community."
          }
          position="right"
        />
        <Section
          imgSrc={AboutUs2Image}
          title="A Team that Inspires"
          description={
            "Step into Squat2Fit, and you step into a community that breathes life into our shared vision. The camaraderie within our walls is palpable it's the high-fives after a challenging workout, the encouragement during a tough set, and the celebration of each other's victories. In our community, every achievement, big or small, is a collective win."
          }
          position="left"
        />
        <Section
          imgSrc={AboutUs3Image}
          title="Join Squat2Fit"
          description="As we invite you to join the Squat2Fit movement, we extend our hand in friendship and support. Whether you're a fitness enthusiast seeking a new home or someone taking the first steps towards a healthier lifestyle, Squat2Fit is where you belong. Together, let’s redefine fitness, break barriers, and create a legacy of empowered lives. Welcome to Squat2Fit – where the journey to greatness begins."
          position="right"
        />
      </div>
      <Footer />
    </>
  );
};

export default About;

