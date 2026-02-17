import { useEffect, useState } from "react";
import "./leadPopup.css";

const API_URL = import.meta.env.VITE_API_URL;


export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("leadSubmitted");
    if (!submitted) {
      setTimeout(() => setOpen(true), 3000); // better UX
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const res = await fetch(`${API_URL}/save-lead.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();

      if (data.success) {
        localStorage.setItem("leadSubmitted", "true");
        localStorage.setItem("leadName", form.name);
        setOpen(false);
      } else {
        alert(data.message || "حدث خطأ");
      }
    } catch (err) {
      console.error(err);
      alert("فشل الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <h3>مرحباً بك 👋</h3>

        <input
          type="text"
          name="name"
          placeholder="اسمك"
          required
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="رقم جوالك"
          required
          value={form.phone}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "جارٍ الإرسال..." : "إرسال"}
        </button>
      </form>
    </div>
  );
}
