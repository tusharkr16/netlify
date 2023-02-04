import React from "react";
import './index.scss';

const HeroSection = () => {
  return (
    <main className="hero_section_main">
        <section className="hero_banner">
            <div className="container">
              <h1>Start your fitness journey</h1>
              <button>Get Started</button>
            </div>
        </section>
      {/* <section class="section banner banner-section">
        <div class="container banner-column">
          <img
            class="banner-image"
            src="https://i.ibb.co/sVqYmS2/Illustration.png"
            alt="Illustration"
          />
          <div class="banner-inner">
            <h1 class="heading-xl">All Your Files in One Secure Location.</h1>
            <p class="paragraph">
              We stores all your most important files in one secure location.
              Access them whenever needed, share and collaborate with your
              connections.
            </p>
            <button class="btn btn-darken btn-inline">
              Get Started<i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default HeroSection;
