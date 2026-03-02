const express = require("express");
const router = express.Router();
const resources = require("../data/resources");
const fs = require("fs");
const path = require("path");
const { getRecommendations } = require("../utils/recommendationEngine");
const sessionFilePath = path.join(__dirname, "../data/sessions.json");

router.post("/update", (req, res) => {
  const { subject, currentLevel, feedback, speed, preference } = req.body;

  let newLevel = currentLevel;
  if (feedback === "helpful") {
    if (speed === "slow") {
      if (currentLevel === "weak") newLevel = "average";
      else if (currentLevel === "average") newLevel = "strong";
    }

    if (speed === "fast") {
      newLevel = currentLevel;
    }

    if (speed === "perfect") {
      newLevel = currentLevel;
    }
  }
  if (feedback === "not_helpful") {
    if (speed === "fast") {
      if (currentLevel === "strong") newLevel = "average";
      else if (currentLevel === "average") newLevel = "weak";
    }

    if (speed === "slow") {
      newLevel = currentLevel;
    }

    if (speed === "perfect") {
      newLevel = "weak";
    }
  }
  if (feedback === "helpful" && speed === "perfect") {
    if (currentLevel === "weak") newLevel = "average";
  }
  const updatedResources = getRecommendations({
    resources,
    subject,
    weakTopics: [],
    level: newLevel,
    preference,
  });
  const feedbackSession = {
    subject,
    previousLevel: currentLevel,
    newLevel,
    feedback,
    speed,
    preference,
    results: updatedResources,
    timestamp: new Date(),
  };

  let sessions = [];

  try {
    if (fs.existsSync(sessionFilePath)) {
      sessions = JSON.parse(fs.readFileSync(sessionFilePath));
    }
  } catch (err) {
    console.log("Error reading sessions:", err);
    sessions = [];
  }

  sessions.push(feedbackSession);

  try {
    fs.writeFileSync(sessionFilePath, JSON.stringify(sessions, null, 2));
  } catch (err) {
    console.log("Error writing sessions:", err);
  }
  res.json({
    message: "Recommendations updated based on feedback",
    newLevel,
    results: updatedResources,
  });
});

module.exports = router;