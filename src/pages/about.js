import React from "react";
import { Footer, Header, HeroSection, Layout } from "../components";
import "./about.scss";
import communityImage from '../images/community.jpeg';

const About = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Layout>
        <div className="about">
          <div className="main">
            <img src={communityImage} />
            <div className="content">
              Welcome to Squat2Fit, where we are dedicated to helping you achieve
              your fitness goals. Our mission is to provide you with the best
              possible gym experience, with a focus on safety, comfort, and
              results. Our facilities are equipped with state-of-the-art equipment
              and a variety of group fitness classes. Our team of experienced and
              knowledgeable fitness professionals are passionate about helping you
              reach your goals. Join us and become part of our fitness community
              where you can find the support, motivation, and guidance you need to
              reach your full potential.
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
