"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import companyLogo from "../../images/Squat2Fit_Logo.jpeg";
import Image from "next/image";
import styles from "./header.module.scss";
import clsx from "clsx";

const tabs = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "About Us",
    route: "/about"
  },
  {
    title: "Community",
    route: "/community"
  },
  {
    title: "Contact",
    route: "/contact"
  },
];

const Header = () => {
  const router = useRouter()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    router.push("/");
  };


  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <div className={styles.brand} onClick={navigateToHome}>
          <Image src={companyLogo} alt="Squat2Fit" />
          <h2 className="title">Squat2Fit</h2>
        </div>
        <nav className={clsx(styles.mainNav, { [styles.mobileMenuOpen] : isMobileMenuOpen })}>
          <div className="menu-toggle" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="main_nav_list">
            {tabs.map((tab) => (
              <li key={tab.title} role="button" onClick={() => router.push(tab.route)}>
                {tab.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
