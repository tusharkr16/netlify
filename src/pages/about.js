import React, { useEffect } from "react";
import { Footer, Header, HeroSection, Layout } from "../components";
import "./index.scss";
import AboutUsImage from '../images/Aboutus.jpg';
import AboutUs2Image from '../images/Aboutus2.jpg';
import AboutUs3Image from '../images/Aboutus3.jpg';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';


const BlogSection = (props) => {

  const isBrowser = () => typeof window !== "undefined"
  const isMobile = isBrowser() && window.innerWidth < 768;
  const getImage = () => (
    <img
      src={props.imgSrc}
      alt="Image"
      data-aos={isMobile ? "fade-up" : "fade-left"}
    />
  );

  const getText = () => (
    <div class="blog-text" data-aos={isMobile ? "fade-up" : "fade-right"}>
      <h2>{props.title}</h2>
      <p>
        {props.description}
      </p>
    </div>
  );

  const getBlogSection = (position) => {
    if (position === 'right' || isMobile) {
      return (
        <>
          {getImage()}
          {getText()}
        </>
      )
    }

    if (position === 'left') {
      return (
        <>
          {getText()}
          {getImage()}
        </>
      )
    }

    return null;
  }

  return (
    <div class="blog-section">
      {getBlogSection(props.position)}
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
      <Header />
      <HeroSection />
      <Layout>
        <div className="home">
          <BlogSection
            imgSrc={AboutUsImage}
            title="About Us"
            description={
              <>
                Welcome to Squat2Fit, a dynamic and inclusive fitness community committed to transforming lives through wellness, strength, and camaraderie. At Squat2Fit, we believe that fitness is more than just a physical journey; it's a holistic approach to well-being that encompasses mind, body, and community.
                <br />
                <br />
                Our story began with a simple yet powerful idea: to create a space where individuals of all fitness levels could come together, support one another, and embark on a transformative journey towards a healthier, happier lifestyle. Founded by a team of passionate fitness enthusiasts, Squat2Fit is not just a gym; it's a vibrant community that values the unique strengths and stories each member brings to the table.
              </>
            }
            position="right"
          />
          <BlogSection
            imgSrc={AboutUs2Image}
            title="A Community that Inspires"
            description={
              <>
                Step into Squat2Fit, and you step into a community that breathes life into our shared vision. The camaraderie within our walls is palpable it's the high-fives after a challenging workout, the encouragement during a tough set, and the celebration of each other's victories. In our community, every achievement, big or small, is a collective win.
                <br />
                <br />

                Beyond Physical Fitness

                Squat2Fit recognizes that true well-being goes beyond physical fitness. We organize workshops, events, and community activities that nurture mental and emotional wellness. From yoga sessions that calm the mind to nutritional seminars that educate, we aim to provide a comprehensive approach to health.
              </>
            }
            position="left"
          />
          <BlogSection
            imgSrc={AboutUs3Image}
            title="Join the Squat2Fit Movement"
            description="As we invite you to join the Squat2Fit movement, we extend our hand in friendship and support. Whether you're a fitness enthusiast seeking a new home or someone taking the first steps towards a healthier lifestyle, Squat2Fit is where you belong. Together, let’s redefine fitness, break barriers, and create a legacy of empowered lives. Welcome to Squat2Fit – where the journey to greatness begins."
            position="right"
          />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default About;

