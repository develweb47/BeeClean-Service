import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import "../../styles/packages.css";

export default function PackageCard({ pkg }) {
  const navigate = useNavigate();

  return (
    <div className="package-card">

      <div className="package-title">{pkg.name}</div>

      <p className="package-short">{pkg.shortDesc}</p>

      <div className="package-target">
        <strong>الفئة المستهدفة: </strong> {pkg.targetGroup}
      </div>

      <div className="package-price">
        السعر التقديري: {pkg.estimatedPrice}
      </div>

      <div className="package-buttons">
        <button className="btn btn-show"
          onClick={() => navigate(`/packages/${pkg.id}`)}>
          <FaInfoCircle /> عرض الباقة
        </button>

        <button className="btn btn-select"
          onClick={() => navigate(`/packages/${pkg.id}/select`)}>
          <FaCheckCircle /> اختيار الباقة
        </button>
      </div>
    </div>
  );
}
