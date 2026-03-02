import { useEffect, useState } from "react";
import API from "../services/api";
import ResultPage from "./ResultPage";
import "./QuizPage.css";

function QuizPage({ setupData }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

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

  const handleSubmit = async () => {
    try {
      const res = await API.post("/api/quiz/submit", {
        studentClass: setupData.studentClass,
        subject: setupData.subject,
        answers,
        preference: setupData.preference,
      });

      console.log("RESULT:", res.data);
      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  if (result) {
    return <ResultPage resultData={result} />;
  }

  return (
    
    <div className="quiz-container">
      <h2>
        Class {setupData.studentClass} - {setupData.subject} Quiz
      </h2>

      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <>
          {questions.map((q, i) => (
  <div key={i} className="question-card">
    <p className="question-title">{i + 1}. {q.question}</p>

    {q.options.map((opt, idx) => (
      <label key={idx} className="option">
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
        {" "}{opt}
      </label>
    ))}
  </div>
))}

          <button className="submit-btn" onClick={handleSubmit}>
  Submit Quiz 
</button>
        </>
      )}
    </div>
  );
}

export default QuizPage;