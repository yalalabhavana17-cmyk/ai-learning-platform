import { useState } from "react";
import "./SetupPage.css";

function SetupPage({ onStart }) {
  const [studentClass, setStudentClass] = useState("9");
  const [subject, setSubject] = useState("Math");
  const [preference, setPreference] = useState("video");

  const handleStart = () => {
    onStart({ studentClass, subject, preference });
  };

  return (
    <div className="setup-container">
      <div className="setup-card">
        <h2 className="title">Setup Your Quiz</h2>

        {/* Class */}
        <div className="form-group">
          <label>Class</label>
          <select
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
          >
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
        </div>

        {/* Subject */}
        <div className="form-group">
          <label>Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="Math">Mathematics</option>
            <option value="Science">Science</option>
          </select>
        </div>

        {/* Preference */}
        <div className="form-group">
          <label>Learning Preference</label>
          <select
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
          >
            <option value="video"> Video</option>
            <option value="article">Article</option>
          </select>
        </div>

        {/* Button */}
        <button className="start-btn" onClick={handleStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default SetupPage;