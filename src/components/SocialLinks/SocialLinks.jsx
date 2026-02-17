import React from "react";
import { FaInstagram, FaSnapchatGhost, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "./SocialLinks.css";

const SocialLinks = () => {
  const whatsappNumber = "https://wa.me/9660570447478";
  const snapchatLink = "https://www.snapchat.com/";
  const instagramLink = "https://www.instagram.com/";
  const tiktokLink = "https://www.tiktok.com/";
  return (
    <div className="links-container">
      <p className="social-title">
        تابعنا على منصات التواصل
      </p>
      <div className="social-links">
      <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href={snapchatLink} target="_blank" rel="noopener noreferrer">
        <FaSnapchatGhost />
      </a>
      <a href={instagramLink} target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
    </div>
    </div>
  );
};

export default SocialLinks;
