import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import "./index.scss";
import companyLogo from "../../images/Squat2Fit_Logo.jpeg";
import Image from "next/image";

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

  const navigateTo = (route) => {
    router.push(route);
    window.location.reload(); // Refresh the page
  };

  return (
    <header className="main_header">
      <div className="container">
        <div className="brand" onClick={() => navigateTo("/")}>
          <Image src={companyLogo} alt="Squat2Fit" />
          <h2 className="title">Squat2Fit</h2>
        </div>
        <nav className={`main_nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
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
