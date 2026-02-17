import React, { useEffect, useRef } from "react";
/*import { BadgePercent, PackageCheck, CalendarClock } from "lucide-react";*/
import "./StatsCounters.css";

function StatsCounters() {
  const numberRefs = useRef([]);
  const cardRefs = useRef([]);
  const numbers = [20, 50, 100];

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // Find actual index of card
          const index = cardRefs.current.indexOf(entry.target);

          if (index !== -1) {
            animateNumber(numberRefs.current[index], numbers[index]);
          }

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  cardRefs.current.forEach((card, index) => {
    if (!card) return;
    observer.observe(card);

    // Handle "already visible" on mobile refresh
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animateNumber(numberRefs.current[index], numbers[index]);
      card.classList.add("visible");
      observer.unobserve(card);
    }
  });
}, []);



  const animateNumber = (element, finalValue) => {
    if (!element) return;

    let start = 0;
    const duration = 1800;
    const step = 10;
    const increment = finalValue / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        element.innerText = finalValue.toLocaleString();
        clearInterval(timer);
      } else {
        element.innerText = Math.floor(start).toLocaleString();
      }
    }, step);
  };

  return (
    <section className="stats-section">
      <div className="stats-container">

        {/* 1 */}
        <div
          className="stat-box fade-up"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="stat-icon gold-glow">
            <i className={"fa-solid fa-gift"}></i>
            <span className="shine"></span>
          </div>
          <h2 className="stat-number gold">
            <span ref={(el) => (numberRefs.current[0] = el)}></span>%
          </h2>
          <p className="stat-text gold">خصم لكل خدمات التنظيف</p>
        </div>

        {/* 2 */}
        <div
          className="stat-box fade-up delay-1"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="stat-icon gold-glow">
           <i className="fa-solid fa-trophy"></i>
            <span className="shine"></span>
          </div>
          <h2 className="stat-number gold">
            <span ref={(el) => (numberRefs.current[1] = el)}></span>+
          </h2>
          <p className="stat-text gold">أعمال سابقة</p>
        </div>

        {/* 3 */}
        <div
          className="stat-box fade-up delay-2"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <div className="stat-icon gold-glow">
            <i className="fa-solid fa-person-rays"></i>
            <span className="shine"></span>
          </div>
          <h2 className="stat-number gold">
            <span ref={(el) => (numberRefs.current[2] = el)}></span>+
          </h2>
          <p className="stat-text gold">يعملون من أجلك!</p>
        </div>

      </div>
    </section>
  );
}

export default StatsCounters;
