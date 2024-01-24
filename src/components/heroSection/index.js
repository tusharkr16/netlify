import React from "react";
// import style from "../../styles/home.module.scss";
import style from "./hersection.module.scss"


const HeroSection = () => {
  return (
    <main className={style.heroSection}>
      <section className={style.heroBanner}>
        <div className={style.container} >
          <h1>Squat 2 Fit</h1>
          <p>Discover your potential & thrive within our supportive <br />community. Start today for stronger, healthier you , <br /> join us for transformation fitness journey</p>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
