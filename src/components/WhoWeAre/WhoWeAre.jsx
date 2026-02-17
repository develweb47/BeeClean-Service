import React from "react";
import data from "../../data/whoWeAre.json";
import "./WhoWeAre.css";
import { MdEmail, MdPhone } from "react-icons/md";

const WhoWeAre = () => {
  return (
    <div className="who-container">
      <h2 className="section-title">من نحن</h2>
      <p className="paragraph">{data.about}</p>

      <div className="section">
        <h3>{data.vision_title}</h3>
        <p>{data.vision}</p>
      </div>

      <div className="section">
        <h3>{data.mission_title}</h3>
        <p>{data.mission}</p>
      </div>

      <div className="section">
        <h3>{data.our_task_title}</h3>
        <p>{data.our_task}</p>
      </div>

      <div className="section">
        <h3>{data.our_goal_title}</h3>
        <p>{data.our_goal}</p>
      </div>

      <div className="section">
        <h3>{data.values_title}</h3>
        <ul className="data-values">
          {data.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      <p className="paragraph">{data.extra}</p>

      <div className="info-box">
        <p><strong>الاسم التجاري:</strong> {data.trade_name}</p>
        <p><strong>المقر الرئيسي:</strong> {data.location}</p>

        <p><strong>{data.contact_title}:</strong></p>
        <p className="info-line">
          <MdEmail className="info-icon" /> 
          {data.email}
        </p>

        <p className="info-line">
          <MdPhone className="info-icon" />
           {data.phone}
        </p>

        <p><strong>النشاط:</strong> {data.activity}</p>
        <p><strong>الهدف المجتمعي:</strong> {data.social_goal}</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
