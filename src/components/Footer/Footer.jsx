import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo / Brand */}
        <div className="footer-section brand">
          <img src={logo} alt="Dareen Clean Logo" className="footer-logo" />
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <div className="contact-grid">
            {/* Icons column */}
            <div className="contact-icons">
              <i className="fa-solid fa-location-dot"></i>
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-envelope"></i>
            </div>

            {/* Text column */}
            <div className="contact-text">
              <span>جدة، المملكة العربية السعودية</span>
              <span>057-044-7478</span>
              <span>beeclean@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p> Frontend-devel © {new Date().getFullYear()} — جميع الحقوق محفوظة للمطور</p>
      </div>
    </footer>
  );
}

export default Footer;
