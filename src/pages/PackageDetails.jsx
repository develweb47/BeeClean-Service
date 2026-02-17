import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import packages from "../data/packagesData.json";

import { FaInfoCircle, FaListUl, FaUsers, FaMoneyBill, FaStickyNote, FaArrowRight } from "react-icons/fa";


export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // FIND PACKAGE BY STRING ID
  const pkg = packages.find((p) => p.id === id);

  // If not found
  if (!pkg) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
        الباقة غير موجودة
      </div>
    );
  }
  const whatsappMessage = encodeURIComponent(
    `مرحباً! أريد اختيار الباقة التالية:\n\n${pkg.name}\n${pkg.shortDesc}`
  );

  return (
    <div className="details-page">

      <h1 className="details-title">تفاصيل الباقة</h1>

      <div className="details-card">

        <div className="details-name">{pkg.name}</div>

        {/* Description */}
        <div className="details-section">
          <h3><FaInfoCircle /> وصف مختصر</h3>
          <p>{pkg.shortDesc}</p>
        </div>

        {/* Services */}
        <div className="details-section details-services">
          <h3><FaListUl /> الخدمات الرئيسية</h3>
          <ul>
            {pkg.mainServices.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Target Group */}
        <div className="details-section">
          <h3><FaUsers /> الفئة المستهدفة</h3>
          <p>{pkg.targetGroup}</p>
        </div>

        {/* Price */}
        <div className="details-section">
          <h3><FaMoneyBill /> السعر التقديري</h3>
          <p>{pkg.estimatedPrice}</p>
        </div>

        {/* Notes */}
        {pkg.note && (
          <div className="details-section">
            <h3><FaStickyNote /> ملاحظة</h3>
            <p>{pkg.note}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="details-buttons">
          <button className="btn-details" onClick={() => navigate(-1)}>
            <FaArrowRight /> رجوع
          </button>

          <button className="btn-select"
            onClick={() => navigate(`/packages/${id}/select`)}>
            اختيار الباقة
          </button>
        </div>

        {/* WhatsApp CTA */}
        <a
          className="order-whatsapp-btn"
          href={`https://wa.me/5555555555?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          تواصل عبر واتساب لإتمام الحجز
        </a>

      </div>
    </div>
  );
}
