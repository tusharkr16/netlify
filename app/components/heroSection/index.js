import React, { useEffect } from "react";
import './index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 700,
    });
  }, []);
  return (
    <main className="hero_section_main">
      <section className="hero_banner">
        <div className="container" data-aos="fade-left">
          <h1>Squat 2 Fit</h1>
          <p>Discover your potential & thrive within our supportive <br />community. Start today for stronger, healthier you , <br /> join us for transformation fitness journey</p>
          {/* <h1> New Era Of </h1>
          <h1>Fitness Journey</h1> */}
          {/* <button>Get Started</button> */}
        </div>
      </section>
      {/* <section className="section banner banner-section">
        <div className="container banner-column">
          <img
            className="banner-image"
            src="https://i.ibb.co/sVqYmS2/Illustration.png"
            alt="Illustration"
          />
          <div className="banner-inner">
            <h1 className="heading-xl">All Your Files in One Secure Location.</h1>
            <p className="paragraph">
              We stores all your most important files in one secure location.
              Access them whenever needed, share and collaborate with your
              connections.
            </p>
            <button className="btn btn-darken btn-inline">
              Get Started<i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default HeroSection;
