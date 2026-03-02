function getRecommendations({
  resources = [],
  subject = "",
  weakTopics = [],
  level = "",
  preference = "",
}) {
  let result = [];

  resources.forEach((r) => {
    if (!r.subject || r.subject.toLowerCase() !== subject.toLowerCase()) {
      return;
    }

    let score = 0;
    if (r.topic && weakTopics.length > 0) {
      const normalizedTopics = weakTopics.map((t) =>
        t.toLowerCase()
      );

      if (normalizedTopics.includes(r.topic.toLowerCase())) {
        score += 3;
      }
    }
    if (r.level && level && r.level.toLowerCase() === level.toLowerCase()) {
      score += 1;
    }
    if (
      preference &&
      r.type &&
      r.type.toLowerCase() === preference.toLowerCase()
    ) {
      score += 2;
    }
    if (score > 0) {
      result.push({ ...r, score });
    }
  });
  if (result.length === 0) {
    result = resources.filter(
      (r) =>
        r.subject &&
        r.subject.toLowerCase() === subject.toLowerCase()
    );
  }
  result.sort((a, b) => (b.score || 0) - (a.score || 0));

  return result;
}

module.exports = { getRecommendations };