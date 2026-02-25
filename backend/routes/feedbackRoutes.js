const express = require("express");
const router = express.Router();
const resources = require("../data/resources");
const fs = require("fs");

router.post("/update", (req, res) => {
  const { subject, currentLevel, feedback, preference } = req.body;

  let newLevel = currentLevel;

  // Feedback logic
  if (feedback === "too easy") {
    newLevel = "average";
  } else if (feedback === "too hard") {
    newLevel = "weak";
  } else if (feedback === "too slow") {
    newLevel = "fast";
  }

  const updatedResources = resources.filter(
    (r) =>
      r.subject === subject &&
      r.level === newLevel &&
      r.type === preference
  );
const feedbackSession = {
  subject,
  previousLevel: currentLevel,
  newLevel,
  feedback,
  preference,
  results: updatedResources,
  timestamp: new Date(),
};

let sessions = JSON.parse(fs.readFileSync("./data/sessions.json"));

sessions.push(feedbackSession);

fs.writeFileSync("./data/sessions.json", JSON.stringify(sessions, null, 2));
  res.json({
    message: "Recommendations updated based on feedback",
    newLevel,
    results: updatedResources,
  });
});

module.exports = router;