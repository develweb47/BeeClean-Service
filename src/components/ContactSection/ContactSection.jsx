import React from "react";
import "./ContactSection.css";
import { FaWhatsapp, FaStar, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const whatsappNumber = "5555555555";
  const message = "مرحباً، أود حجز موعد لخدمة التنظيف.";
  const phoneNumber = "5555555555";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  const phoneLink = `tel:${phoneNumber}`;
  return (
    <div id="contact" className="contact-section">
      <h2>تواصل معنا</h2>
      <div className="buttons">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <FaWhatsapp className="icon" /> حجز موعد
        </a>
        
        <Link to="/rating" className="rating-btn">
         <FaStar className="icon" /> رايك يهمنا
        </Link>

        <a href={phoneLink} className="contact-btn">
          <FaPhone className="icon" /> الإدارة
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
