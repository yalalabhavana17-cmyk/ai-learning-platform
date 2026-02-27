import { useEffect, useState } from "react";
import API from "../services/api";

function QuizPage({ setupData }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    API.get("/api/quiz", {
      params: {
        studentClass: setupData.studentClass,
        subject: setupData.subject,
      },
    })
      .then((res) => {
        console.log("DATA:", res.data);
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [resultData, setResultData] = useState(null);

const handleSubmit = async () => {
  try {
    const res = await API.post("/api/quiz/submit", {
      studentClass: setupData.studentClass,
      subject: setupData.subject,
      answers: Object.values(answers),
      preference: setupData.preference,
    });

    console.log("BACKEND RESPONSE:", res.data); // debug

    setResultData(res.data);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div>
      <h2>Quiz</h2>

      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <>
          {/* Questions */}
          {questions.map((q, i) => (
            <div key={i}>
              <p>{q.question}</p>

              {q.options.map((opt, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value={opt}
                    onChange={() =>
                      setAnswers({
                        ...answers,
                        [i]: opt,
                      })
                    }
                  />
                  {opt}
                </div>
              ))}
            </div>
          ))}

          {/* ✅ OUTSIDE LOOP */}
          <button onClick={handleSubmit}>Submit Quiz</button>

          {/* Score */}
          {resultData && (
  <div>
    <h3>Score: {resultData.score}</h3>
    <h3>Level: {resultData.level}</h3>

    <h4>Weak Topics:</h4>
    <ul>
      {resultData.weakTopics.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>

    <h4>Recommended Resources:</h4>
    {resultData.recommendations.map((r, i) => (
      <div key={i}>
        <p><b>{r.title}</b></p>
        <p>Type: {r.type}</p>
        <a href={r.link} target="_blank">Open</a>
      </div>
    ))}
  </div>
)}
        </>
      )}
    </div>
  );
}

export default QuizPage;