import React from "react";
import "./ServicesList.css";

const ServicesList = ({ services }) => {
  return (
    <div id="services" className="services-container">
      <h2>الخدمات و الأسعار</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <span className="name">{service.name}</span>
            <span className="price">
              {service.price}
              <span className="icon-saudi_riyal_new"></span>
              {service.exepte && <span> / {service.exepte}</span>}
            </span>
          </li>
        ))}
      </ul>

      {/* -- NOTE SECTION -- */}
      <p className="services-note">
        ملاحظة: الأسعار تتغير حسب الطلب والإضافات والمساحة وحجم الأثاث والمفروشات
      </p>
      
    </div>
  );
};

export default ServicesList;
