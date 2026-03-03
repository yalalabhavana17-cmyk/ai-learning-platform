function getRecommendations({
  resources = [],
  subject = "",
  weakTopics = [],
  level = "",
  preference = "",
}) {
  let result = [];

  const normalizedTopics = weakTopics.map((t) =>
    t ? t.toLowerCase() : ""
  );

  resources.forEach((r) => {
    // 1. Subject must match
    if (!r.subject || r.subject.toLowerCase() !== subject.toLowerCase()) {
      return;
    }

    // 2. STRICT FILTER: Topic must match weakTopics
    if (
      normalizedTopics.length > 0 &&
      (!r.topic || !normalizedTopics.includes(r.topic.toLowerCase()))
    ) {
      return; // ❌ reject immediately
    }

    let score = 0;

    // scoring (optional now)
    if (r.level && level && r.level.toLowerCase() === level.toLowerCase()) {
      score += 1;
    }

    if (
      preference &&
      r.type &&
      r.type.toLowerCase() === preference.toLowerCase()
    ) {
      score += 1;
    }

    result.push({ ...r, score });
  });

  // fallback (if nothing matches weak topics)
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