import { useState } from "react";
import API from "../services/api";
import "./ResultPage.css";

function ResultPage({ resultData }) {
  const [speed, setSpeed] = useState("perfect");
  const [updatedData, setUpdatedData] = useState(null);
  const [selectedFeedback, setSelectedFeedback] = useState("");

  const sendFeedback = async (type, speed) => {
    try {
      setSelectedFeedback(type);

      const res = await API.post("/api/feedback/update", {
  subject: resultData.subject,
  level: resultData.level || "average",
  feedback: type,
  speed: speed,
  preference: "video",
  weakTopics: resultData.weakTopics || [] 
});

      setUpdatedData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const resources = updatedData
    ? updatedData.results || []
    : resultData.recommendations || [];

  return (
    <div className="result-container">
      <h2 className="title">Your Results</h2>

      {/* Score */}
      <div className="card">
        <h3>Score</h3>
        <p className="score">
          {resultData.score} / {resultData.total}
        </p>
      </div>

      {/* Weak Topics */}
      <div className="card">
        <h3>Weak Topics</h3>
        {resultData.weakTopics.length === 0 ? (
          <p>No weak topics 🎉</p>
        ) : (
          <ul>
            {resultData.weakTopics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Recommendations */}
      <div className="card">
        <h3>Recommended Resources</h3>

        {resources.length === 0 ? (
          <p className="no-data"></p>
        ) : (
          <div className="resource-list">
            {resources.map((res, i) => (
              <div key={i} className="resource-card">
                <p className="res-title">{res.title}</p>
                <p className="res-type">{res.type}</p>
                <a href={res.link} target="_blank" rel="noreferrer">
                  Open Resource →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Feedback */}
      <div className="card">
        <h3>Feedback</h3>

        <p>Was this helpful?</p>
        <div className="btn-group">
          <button
            className={selectedFeedback === "helpful" ? "active" : ""}
            onClick={() => sendFeedback("helpful", speed)}
          >
            👍 Helpful
          </button>

          <button
            className={selectedFeedback === "not_helpful" ? "active" : ""}
            onClick={() => sendFeedback("not_helpful", speed)}
          >
            👎 Not Helpful
          </button>
        </div>

        <p>Content Speed:</p>
        <div className="btn-group">
          <button
            className={speed === "slow" ? "active" : ""}
            onClick={() => setSpeed("slow")}
          >
            Too Slow
          </button>

          <button
            className={speed === "perfect" ? "active" : ""}
            onClick={() => setSpeed("perfect")}
          >
            Perfect
          </button>

          <button
            className={speed === "fast" ? "active" : ""}
            onClick={() => setSpeed("fast")}
          >
            Too Fast
          </button>
        </div>

        <p className="selected">Selected Speed: {speed}</p>

        {updatedData && (
          <p className="new-level">
            New Level: <b>{updatedData.newLevel}</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default ResultPage;