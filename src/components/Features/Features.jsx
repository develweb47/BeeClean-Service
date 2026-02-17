import React from "react";
import "./Features.css";

const Features = ({ features }) => {
  return (
    <div className="features-page">
      <h1 className="features-title">مميزاتنا</h1>

      <div className="features-list">
        {features.map((category, index) =>
          category.items.map((item, i) => (
            <div className="feature-card" key={`${index}-${i}`}>
              <div className="icon">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-text">{item.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Features;
