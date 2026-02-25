const express = require("express");
const router = express.Router();
const resources = require("../data/resources");
const quizData = require("../data/quizData");
const fs = require("fs");

router.post("/submit", (req, res) => {
  const { studentClass, subject, answers, preference } = req.body;

  const questions = quizData[studentClass]?.[subject];

  if (!questions) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  let score = 0;
  let weakTopics = [];

  questions.forEach((q, index) => {
    if (answers[index] === q.answer) {
      score++;
    } else {
      weakTopics.push(q.topic || "General");
    }
  });

  const percentage = (score / questions.length) * 100;
  let level = "weak";
  if (percentage >= 70) level = "strong";
  else if (percentage >= 40) level = "average";
  let filtered = [];
  weakTopics.forEach((topic) => {
    const topicResources = resources.filter(
      (r) =>
        r.subject === subject &&
        r.topic === topic &&
        r.type === preference
    );
    filtered.push(...topicResources);
  });
  if (filtered.length === 0) {
    filtered = resources.filter(
      (r) =>
        r.subject === subject &&
        r.level === level &&
        r.type === preference
    );
  }
  const session = {
    studentClass,
    subject,
    score,
    percentage,
    level,
    weakTopics,
    preference,
    recommendations: filtered,
    timestamp: new Date(),
  };
  let sessions = [];
  try {
    sessions = JSON.parse(fs.readFileSync("./data/sessions.json"));
  } catch (err) {
    sessions = [];
  }

  sessions.push(session);

  fs.writeFileSync("./data/sessions.json", JSON.stringify(sessions, null, 2));

  res.json({
    message: "Quiz evaluated successfully",
    score,
    percentage,
    level,
    weakTopics,
    recommendations: filtered,
  });
});

module.exports = router;