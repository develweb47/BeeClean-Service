import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-text-box">
            <p className="hero-text">
              <span className="wel-text">مرحباً بك في بي كلين</span>
              <br />
              هنا حيث تقدم خدمات غسيل المفروشات باحترافية للمنازل، الشركات،
              الفنادق، الشاليهات والمركبات باستخدام معدات ومواد عالية الجودة
              والسرعة أولويتنا ان نخدم جميع الفئات:
              <br />
              تجاري - سكني - أفراد.
              <br />
              يوجد اشتراكات وباقات مميزة شهرية وربع سنوية ونصف سنوية بأسعار
              وخدمات تنافسية.
            </p>
        </div>

        <h3 className="hero-order-text">اطلب الآن</h3>

        {/* Action Buttons (WhatsApp + Call) */}
        <div className="hero-action-buttons">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/966057044748"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn whatsapp-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          {/* Call Button */}
          <a href="tel:966057044748" className="hero-btn call-btn">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
