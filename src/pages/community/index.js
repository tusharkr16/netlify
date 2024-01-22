"use client"; // This is a client component 👈🏽

import React, { useEffect } from 'react'
import { Footer, Header, HeroSection, Layout } from '../../components'
import styles from "./page.module.scss";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import communityImage from '@/images/community.jpeg'
import Image from 'next/image';


const BlogSection = (props) => {
  const isBrowser = () => typeof window !== "undefined"
  const isMobile = isBrowser() && window.innerWidth < 768;
  const getImage = () => (
    <Image
      src={props.imgSrc}
      alt="Image"
      width={600}
      height={600}
    />
  );

  const getText = () => (
    <div className="blog-text" data-aos={isMobile ? "fade-up" : "fade-right"}>
      <h2>{props.title}</h2>
      <p>
        {props.description}
      </p>
    </div>
  );

  const getBlogSection = (position) => {
    if (position === 'right') {
      return (
        <>
          {getImage()}
          {getText()}
        </>
      )
    }

    if (position === 'left' && isMobile) {
      return (
        <>
          {getText()}
          {getImage()}
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

const Community = () => {
  useEffect(() => {
    AOS.init({
      delay: 800,
      duration: 700,
    });
  }, []);
  return (
    <>
      <Header />
        <div className="home">
          <BlogSection
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