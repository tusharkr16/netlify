"use client"; // This is a client component 👈🏽

import React, { useEffect } from 'react'
import { Footer, Header, HeroSection, Layout } from '../../components'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import communityImage from '@/images/community.jpeg'
import Image from 'next/image';
import styles from "../../styles/home.module.scss"

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


const Community = () => {
  useEffect(() => {
    AOS.init({
      delay: 800,
      duration: 700,
    });
  }, []);
  return (
    <>

      <div className={styles.wrapper}>
        <Section
          imgSrc={communityImage}
          title="Our Community"
          description={
            <>
              Welcome to the heart of Squat2Fit — our thriving fitness community where passion, commitment, and camaraderie come together to create an environment like no other. At Squat2Fit, we believe that fitness is more than just lifting weights or running on a treadmill; it's about the connections we make, the friendships we forge, and the shared journey towards a healthier, happier life.

            </>

          }
          position="right"
        />

      </div>
    </>
  )
}

export default Community