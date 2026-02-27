const express = require("express");
const router = express.Router();
const resources = require("../data/resources");
const quizData = require("../data/quizData");
const fs = require("fs");
const { getRecommendations } = require("../utils/recommendationEngine");
router.get("/", (req, res) => {
  const { studentClass, subject } = req.query;

  const quiz = quizData.find(
    (q) =>
      q.class === studentClass &&
      q.subject.toLowerCase() === subject.toLowerCase()
  );

  if (!quiz) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  res.json(quiz.questions);
});

router.post("/submit", (req, res) => {
  const { studentClass, subject, answers, preference } = req.body;

  const quiz = quizData.find(
  (q) =>
    q.class === studentClass &&
    q.subject.toLowerCase() === subject.toLowerCase()
);

const questions = quiz?.questions;

  if (!questions) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  let score = 0;
  let weakTopics = [];

  questions.forEach((q, index) => {
    if (answers[index] === q.answer) {
      score++;
    } else {
      weakTopics.push((q.topic || "General").toLowerCase());
    }
  });

  const percentage = (score / questions.length) * 100;
  let level = "weak";
  if (percentage >= 70) level = "strong";
  else if (percentage >= 40) level = "average";
  const filtered = getRecommendations({
  resources,
  subject,
  weakTopics,
  level,
  preference,
});
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
router.get("/", (req, res) => {
  const { studentClass, subject } = req.query;

  const questions = quizData[studentClass]?.[subject];

  if (!questions) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  res.json(questions);
});

module.exports = router;