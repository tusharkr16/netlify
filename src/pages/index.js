"use client"; // This is a client component 👈🏽

import Image from "next/image";
import React, { useEffect } from "react";
import { Footer, Header, HeroSection, Layout } from "@/components";
import styles from "../styles/home.module.scss";
import communityImage from '@/images/community.jpeg';
import InteriorImage from '@/images/Interior Image.jpg';
import CrossfitAreaImage from '@/images/Crossfit Area.jpg';

const BlogSection = ({ imgSrc, title, description }) => {
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

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
        <div className={styles.wrapper}>
          <BlogSection
            imgSrc={communityImage}
            title="Our Community"
            description="Join our gym community where fitness and sociability go hand in hand. Workout alongside like-minded individuals, share knowledge and motivate each other towards your fitness goals. With a supportive and inclusive environment, you'll push past limits and achieve more than you ever thought possible. Come see why our gym community is second to none. Sign up now and be a part of something special."
          />
          <BlogSection
            imgSrc={CrossfitAreaImage}
            title="Our Equipments"
            description="Transform your workout with our top-of-the-line gym equipment. With the latest technology and a wide variety of machines, you'll be able to take your fitness to the next level. From free weights to cardio equipment, we have everything you need to achieve your goals. Come experience the difference and see why our gym is a cut above the rest. Sign up now and start reaching your full potential."
          />
          <BlogSection
            imgSrc={InteriorImage}
            title="Squat, Sweat, Achieve Greatness"
            description={"As we invite you to join the Squat2Fit movement, we extend our hand in friendship and support. Whether you're a fitness enthusiast seeking a new home or someone taking the first steps towards a healthier lifestyle, Squat2Fit is where you belong. Together, let's redefine fitness, break barriers, and create a legacy of empowered lives. Welcome to Squat2Fit – where the journey to greatness begins."}
          />
        </div>
      <Footer />
    </>
  );
};

export default Home;
