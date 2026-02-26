const { getRecommendations } = require("./backend/utils/recommendationEngine");

// Try multiple tests
console.log("TEST 1:");
console.log(getRecommendations("Mathematics", "Algebra", "weak", "video"));

console.log("\nTEST 2:");
console.log(getRecommendations("mathematics", "algebra", "weak", "video"));

console.log("\nTEST 3:");
console.log(getRecommendations("Mathematics", "Geometry", "weak", "video"));
