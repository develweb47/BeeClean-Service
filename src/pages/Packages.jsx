import React from "react";
import packages from "../data/packagesData.json";
import PackageCard from "../components/PackageCard/PackageCard";
import "../styles/packages.css";

export default function Packages() {
  return (
    <div className="packages-page">

      <h1 className="packages-title">الباقات والاشتراكات</h1>
      <p className="packages-subtext">
        اختر الباقة المناسبة لك. اضغط على عرض التفاصيل أو اختيار للمتابعة.
      </p>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

    </div>
  );
}
