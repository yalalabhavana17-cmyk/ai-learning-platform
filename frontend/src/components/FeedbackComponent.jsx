import { useState } from "react";
import API from "../services/api";

function FeedbackComponent({ resultData }) {
  const [speed, setSpeed] = useState("");
  const [updatedResults, setUpdatedResults] = useState([]);

  const handleFeedback = async (type) => {
    try {
      const res = await API.post("/api/feedback/update", {
        subject: resultData.subject,
        currentLevel: resultData.level,
        feedback: type,     // helpful / not_helpful
        speed: speed,       // slow / fast / perfect
        preference: resultData.preference,
      });

      console.log(res.data);

      setUpdatedResults(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Feedback</h3>

      {/* Helpful or Not */}
      <p>Was this helpful?</p>
      <button onClick={() => handleFeedback("helpful")}>👍 Helpful</button>
      <button onClick={() => handleFeedback("not_helpful")}>👎 Not Helpful</button>

      {/* Speed selection */}
      <p>Content Speed</p>
      <button onClick={() => setSpeed("slow")}>Too Slow</button>
      <button onClick={() => setSpeed("perfect")}>Perfect</button>
      <button onClick={() => setSpeed("fast")}>Too Fast</button>

      {/* Show updated recommendations */}
      {updatedResults.length > 0 && (
        <div>
          <h4>Updated Recommendations:</h4>
          {updatedResults.map((item, i) => (
            <div key={i}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackComponent;