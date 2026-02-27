import { useState } from "react";

function SetupPage({ onStart }) {
  const [studentClass, setStudentClass] = useState("9");
  const [subject, setSubject] = useState("Math");
  const [preference, setPreference] = useState("video");

  const handleStart = () => {
    onStart({ studentClass, subject, preference });
  };

  return (
    <div>
      <h2>Setup</h2>

      <label>Class:</label>
      <select onChange={(e) => setStudentClass(e.target.value)}>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <br />

      <label>Subject:</label>
      <select onChange={(e) => setSubject(e.target.value)}>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
      </select>

      <br />

      <label>Preference:</label>
      <select onChange={(e) => setPreference(e.target.value)}>
        <option value="video">Video</option>
        <option value="article">Article</option>
      </select>

      <br />

      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default SetupPage;