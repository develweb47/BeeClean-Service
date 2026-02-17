import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from '../../assets/images/logo.png'
import "./Header.css";
import services from '../../data/data.json'
import data from "../../data/whoWeAre.json";

function Header() {

  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <header id="main-header" className={`header ${isScrolled ? "scrolled" : ""}`}>

        {/* Logo */}
        <div className="header-right">
          <img src={logo} alt="Dareen Clean Logo" className="header-logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {isMenuOpen && <div className="menu-overlay active" onClick={() => setIsMenuOpen(false)}></div>}


        {/* Menu */}
        <nav className={`header-left ${isMenuOpen ? "open" : ""}`}>
          <ul className="menu">

            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >الرئيسية</Link>
            </li>

            <li>
              <Link to="/features" className={location.pathname === "/features" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                المميزات
              </Link>
            </li>

            <li>
              <Link to="/services" className={location.pathname === "/services" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >الخدمات</Link>
            </li>
            <li>
              <Link to="/packages"
                onClick={() => setIsMenuOpen(false)}
              >الباقات</Link>
            </li>

            <li>
              <Link to="/data"
                className={location.pathname === "/data" ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >من نحن</Link>
            </li>

          </ul>
        </nav>

      </header>
    </div>

  );
}

export default Header;

