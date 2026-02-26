const express = require("express");
const router = express.Router();
const resources = require("../data/resources");
const fs = require("fs");
const { getRecommendations } = require("../utils/recommendationEngine");

router.post("/update", (req, res) => {
  const { subject, currentLevel, feedback, preference } = req.body;

  let newLevel = currentLevel;

  // Smart adaptive logic
  if (feedback === "too easy") {
    if (currentLevel === "weak") newLevel = "average";
    else if (currentLevel === "average") newLevel = "strong";
  } else if (feedback === "too hard") {
    if (currentLevel === "strong") newLevel = "average";
    else if (currentLevel === "average") newLevel = "weak";
  } else if (feedback === "too slow") {
    newLevel = "fast";
  }

  // Use recommendation engine (AI behavior)
  const updatedResources = getRecommendations({
    resources,
    subject,
    weakTopics: [],
    level: newLevel,
    preference,
  });

  // Save session safely
  const feedbackSession = {
    subject,
    previousLevel: currentLevel,
    newLevel,
    feedback,
    preference,
    results: updatedResources,
    timestamp: new Date(),
  };

  let sessions = [];

  try {
    sessions = JSON.parse(fs.readFileSync("./data/sessions.json"));
  } catch {
    sessions = [];
  }

  sessions.push(feedbackSession);

  fs.writeFileSync("./data/sessions.json", JSON.stringify(sessions, null, 2));

  res.json({
    message: "Recommendations updated based on feedback",
    newLevel,
    results: updatedResources,
  });
});

module.exports = router;