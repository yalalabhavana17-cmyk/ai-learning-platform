import { useState } from "react";
import SetupPage from "./components/SetupPage";
import QuizPage from "./components/QuizPage";
import "./index.css";

function App() {
  const [setupData, setSetupData] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div>
      {!setupData ? (
        <SetupPage onStart={setSetupData} />
      ) : !result ? (
        <QuizPage setupData={setupData} onFinish={setResult} />
      ) : (
        <h2>Next: Result Page 🔥</h2>
      )}
    </div>
  );
}

export default App;