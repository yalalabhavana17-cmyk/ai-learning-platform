function getRecommendations({ resources, subject, weakTopics, level, preference }) {
  let result = [];

  resources.forEach((r) => {
    let score = 0;

    //  Subject match
    if (r.subject && r.subject.toLowerCase() === subject.toLowerCase()) {
      score += 2;
    }

    //  Topic match (SAFE + lowercase)
    if (r.topic && weakTopics.includes(r.topic.toLowerCase())) {
      score += 3;
    }

    //  Level match
    if (r.level && r.level.toLowerCase() === level.toLowerCase()) {
      score += 1;
    }

    //  Preference match
    if (r.type && r.type.toLowerCase() === preference.toLowerCase()) {
      score += 2;
    }

    if (score > 0) {
      result.push({ ...r, score });
    }
  });

  // Sort best → worst
  result.sort((a, b) => b.score - a.score);

  return result;
}

module.exports = { getRecommendations };