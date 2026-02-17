import React from "react";
import { useParams } from "react-router-dom";
import packages from "../data/packagesData.json";
import "../styles/packageDetails.css";
import "../styles/selectPackage.css"

export default function SelectPackage() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) return <div className="not-found">الباقة غير موجودة</div>;

  // TODO: WhatsApp number
  const whatsappNumber = "5555555555";

  // Pre-filled Arabic message (URI encoded)
  const message = encodeURIComponent(`مرحباً، أرغب بطلب باقة "${pkg.name}". نرجو تزويدي بتفاصيل السعر وإمكانية الحجز.`);

  const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="pkg-select-page">
      <div className="pkg-details-card">
        <h2>تأكيد اختيار الباقة</h2>
        <p className="pkg-name-confirm">{pkg.name}</p>
        <p><strong>السعر التقديري: </strong>{pkg.estimatedPrice}</p>
        <p><strong>الفئة المستهدفة: </strong>{pkg.targetGroup}</p>

        <div className="pkg-details-actions">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <i className="fab fa-whatsapp"></i> متابعة عبر واتساب
          </a>

          <button className="btn btn-outline" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-right"></i> العودة
          </button>
        </div>

        <p className="note">ملاحظة: سيتم تحديد السعر النهائي بعد المعاينة إن لزم.</p>
      </div>
    </div>
  );
}
