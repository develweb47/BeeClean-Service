import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

import "./rating.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [userName, setUserName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ratingsList, setRatingsList] = useState([]);

  // get user name from localStorage (from popup)
  useEffect(() => {
    const name = localStorage.getItem("leadName");
    if (name) setUserName(name);
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    const res = await fetch(`${API_URL}/get-ratings.php`);
    const data = await res.json();
    setRatingsList(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) return alert("اختر تقييمًا");

    const res = await fetch(`${API_URL}/save-rating.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName, rating, feedback }),
    });
    const data = await res.json();

    if (data.success) {
      setSubmitted(true);
      setRatingsList((prev) => [data.rating, ...prev]);
    } else {
      alert(data.message || "حدث خطأ");
    }
  };

  return (
    <div className="rating-page">
      <h1>رأيك يهمنا</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="stars">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type="radio"
                    name="rating"
                    value={starValue}
                    onClick={() => setRating(starValue)}
                  />
                  <FaStar
                    size={32}
                    color={
                      starValue <= (hover || rating) ? "#facc15" : "#e5e7eb"
                    }
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.15s",
                      transform:
                        starValue <= (hover || rating)
                          ? "scale(1.15)"
                          : "scale(1)",
                    }}
                  />
                </label>
              );
            })}
          </div>

          <textarea
            placeholder="اكتب رأيك هنا..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />

          <button type="submit">إرسال</button>
        </form>
      ) : (
        <p>شكرًا لمشاركتك رأيك!</p>
      )}

      <h2>التقييمات السابقة</h2>
      <ul className="ratings-list">
        {ratingsList.map((r) => (
          <li key={r.id} className="rating-item">
            <div className="rating-name">
              {r.name}
            </div>

            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={20}
                  color={i < r.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>

            <div className="rating-feedback">
              {r.feedback}
            </div>

            <div className="rating-date">
              <small>
                {new Date(r.created_at).toLocaleString("ar-SA", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
