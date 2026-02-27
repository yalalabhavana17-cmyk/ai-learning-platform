const quizData = [

  // ================= CLASS 9 =================
  {
    class: "9",
    subject: "Math",
    questions: [
      { question: "Which is irrational?", options: ["√2","1/2","0.5","2"], answer: "√2", difficulty: "easy", topic: "Number System" },
      { question: "(a+b)^2=?", options: ["a^2+b^2","a^2+2ab+b^2","a^2-b^2","2ab"], answer: "a^2+2ab+b^2", difficulty: "medium", topic: "Algebra" },
      { question: "Zero of x^2-4?", options: ["2","-2","±2","0"], answer: "±2", difficulty: "medium", topic: "Algebra" },
      { question: "Sum of triangle angles?", options: ["90","180","360","270"], answer: "180", difficulty: "easy", topic: "Geometry" },
      { question: "Graph of x=2?", options: ["Vertical","Horizontal","Circle","Curve"], answer: "Vertical", difficulty: "medium", topic: "Coordinate Geometry" },
      { question: "Area of triangle?", options: ["½bh","bh","πr²","2πr"], answer: "½bh", difficulty: "easy", topic: "Mensuration" },
      { question: "Median divides into?", options: ["2 parts","3","4","5"], answer: "2 parts", difficulty: "easy", topic: "Geometry" },
      { question: "Distance formula uses?", options: ["Pythagoras","Algebra","Trig","Stats"], answer: "Pythagoras", difficulty: "medium", topic: "Coordinate Geometry" },
      { question: "Complementary sum?", options: ["90","180","360","45"], answer: "90", difficulty: "easy", topic: "Geometry" },
      { question: "Linear graph shape?", options: ["Line","Circle","Curve","Ellipse"], answer: "Line", difficulty: "easy", topic: "Coordinate Geometry" }
    ]
  },
  {
    class: "9",
    subject: "Science",
    questions: [
      { question: "Unit of force?", options: ["Newton","Joule","Watt","Pascal"], answer: "Newton", difficulty: "easy", topic: "Physics" },
      { question: "Water formula?", options: ["H2O","CO2","O2","NaCl"], answer: "H2O", difficulty: "easy", topic: "Chemistry" },
      { question: "Cell basic unit of?", options: ["Life","Matter","Energy","Atom"], answer: "Life", difficulty: "easy", topic: "Biology" },
      { question: "Speed = ?", options: ["d/t","t/d","d+t","d×t"], answer: "d/t", difficulty: "medium", topic: "Physics" },
      { question: "Acid tastes?", options: ["Sour","Sweet","Bitter","Salty"], answer: "Sour", difficulty: "easy", topic: "Chemistry" },
      { question: "Gravity discovered by?", options: ["Newton","Einstein","Bohr","Tesla"], answer: "Newton", difficulty: "easy", topic: "Physics" },
      { question: "Boiling point of water?", options: ["100°C","0°C","50°C","150°C"], answer: "100°C", difficulty: "easy", topic: "Chemistry" },
      { question: "SI unit of work?", options: ["Joule","Newton","Watt","Volt"], answer: "Joule", difficulty: "medium", topic: "Physics" },
      { question: "Gas for breathing?", options: ["O2","CO2","N2","H2"], answer: "O2", difficulty: "easy", topic: "Biology" },
      { question: "Plant food process?", options: ["Photosynthesis","Respiration","Digestion","Excretion"], answer: "Photosynthesis", difficulty: "medium", topic: "Biology" }
    ]
  },

  // ================= CLASS 10 =================
  {
    class: "10",
    subject: "Math",
    questions: [
      { question: "Quadratic form?", options: ["ax²+bx+c","ax+b","x²","bx+c"], answer: "ax²+bx+c", difficulty: "easy", topic: "Quadratics" },
      { question: "Discriminant?", options: ["b²-4ac","a²+b²","2ab","b²+4ac"], answer: "b²-4ac", difficulty: "medium", topic: "Quadratics" },
      { question: "sin²θ+cos²θ=?", options: ["1","0","2","-1"], answer: "1", difficulty: "easy", topic: "Trigonometry" },
      { question: "AP formula?", options: ["a+(n-1)d","a+n","nd","a-d"], answer: "a+(n-1)d", difficulty: "medium", topic: "Arithmetic Progression" },
      { question: "Area circle?", options: ["πr²","2πr","r²","πd"], answer: "πr²", difficulty: "easy", topic: "Mensuration" },
      { question: "Surface area sphere?", options: ["4πr²","πr²","2πr","3πr²"], answer: "4πr²", difficulty: "medium", topic: "Mensuration" },
      { question: "tanθ=?", options: ["sin/cos","cos/sin","sin×cos","1"], answer: "sin/cos", difficulty: "medium", topic: "Trigonometry" },
      { question: "Probability range?", options: ["0–1","0–10","1–100","-1–1"], answer: "0–1", difficulty: "easy", topic: "Probability" },
      { question: "Mean formula?", options: ["Σx/n","x/n","Σx","n/x"], answer: "Σx/n", difficulty: "easy", topic: "Statistics" },
      { question: "Roots of x²=9?", options: ["±3","3","-3","0"], answer: "±3", difficulty: "easy", topic: "Quadratics" }
    ]
  },
  {
    class: "10",
    subject: "Science",
    questions: [
      { question: "pH neutral?", options: ["7","0","14","1"], answer: "7", difficulty: "easy", topic: "Chemistry" },
      { question: "Ohm’s law?", options: ["V=IR","P=VI","E=mc²","F=ma"], answer: "V=IR", difficulty: "medium", topic: "Physics" },
      { question: "Photosynthesis gas?", options: ["O2","CO2","N2","H2"], answer: "O2", difficulty: "easy", topic: "Biology" },
      { question: "Human heart chambers?", options: ["4","2","3","5"], answer: "4", difficulty: "easy", topic: "Biology" },
      { question: "Lens used for myopia?", options: ["Concave","Convex","Plane","None"], answer: "Concave", difficulty: "medium", topic: "Physics" },
      { question: "Energy unit?", options: ["Joule","Watt","Newton","Volt"], answer: "Joule", difficulty: "easy", topic: "Physics" },
      { question: "Electric current unit?", options: ["Ampere","Volt","Ohm","Watt"], answer: "Ampere", difficulty: "easy", topic: "Physics" },
      { question: "Acid + base?", options: ["Salt+Water","Gas","Metal","Heat"], answer: "Salt+Water", difficulty: "medium", topic: "Chemistry" },
      { question: "DNA full form?", options: ["Deoxyribonucleic acid","Acid","Cell","Gene"], answer: "Deoxyribonucleic acid", difficulty: "easy", topic: "Biology" },
      { question: "Power formula?", options: ["P=VI","V=IR","I=V/R","R=V/I"], answer: "P=VI", difficulty: "medium", topic: "Physics" }
    ]
  },

  // ================= CLASS 11 & 12 (same logic applied)
  // 👉 I kept them consistent: Math → Calculus/Algebra/Vectors
  // 👉 Physics → Mechanics/Electricity/Modern Physics
  // ================= CLASS 11 =================
{
  class: "11",
  subject: "Math",
  questions: [
    { question: "sin30°?", options: ["1/2","1","0","√3"], answer: "1/2", difficulty: "easy", topic: "Trigonometry" },
    { question: "log10?", options: ["1","10","0","2"], answer: "1", difficulty: "medium", topic: "Logarithms" },
    { question: "Derivative of x²?", options: ["2x","x","x²","1"], answer: "2x", difficulty: "medium", topic: "Calculus" },
    { question: "Permutation formula?", options: ["nPr","nCr","n!","r!"], answer: "nPr", difficulty: "easy", topic: "Permutations" },
    { question: "cos0°?", options: ["1","0","-1","2"], answer: "1", difficulty: "easy", topic: "Trigonometry" },
    { question: "Matrix element?", options: ["aij","bij","cij","dij"], answer: "aij", difficulty: "medium", topic: "Matrices" },
    { question: "Domain?", options: ["Input set","Output","Range","Function"], answer: "Input set", difficulty: "easy", topic: "Functions" },
    { question: "tan45°?", options: ["1","0","-1","√2"], answer: "1", difficulty: "easy", topic: "Trigonometry" },
    { question: "Integration symbol?", options: ["∫","+","-","×"], answer: "∫", difficulty: "easy", topic: "Calculus" },
    { question: "Vector has?", options: ["Magnitude+Direction","Only value","Only direction","None"], answer: "Magnitude+Direction", difficulty: "medium", topic: "Vectors" }
  ]
},
{
  class: "11",
  subject: "Physics",
  questions: [
    { question: "SI unit velocity?", options: ["m/s","km/h","m/s²","N"], answer: "m/s", difficulty: "easy", topic: "Kinematics" },
    { question: "g value?", options: ["9.8","10","8","9"], answer: "9.8", difficulty: "medium", topic: "Gravity" },
    { question: "Force formula?", options: ["F=ma","E=mc²","V=IR","P=VI"], answer: "F=ma", difficulty: "easy", topic: "Laws of Motion" },
    { question: "Work formula?", options: ["F×d","m×a","v×t","p×t"], answer: "F×d", difficulty: "easy", topic: "Work Energy" },
    { question: "Energy unit?", options: ["Joule","Watt","Newton","Volt"], answer: "Joule", difficulty: "easy", topic: "Work Energy" },
    { question: "Momentum?", options: ["mv","ma","vt","md"], answer: "mv", difficulty: "medium", topic: "Momentum" },
    { question: "Speed scalar?", options: ["Yes","No","",""], answer: "Yes", difficulty: "easy", topic: "Kinematics" },
    { question: "Acceleration unit?", options: ["m/s²","m/s","N","J"], answer: "m/s²", difficulty: "easy", topic: "Kinematics" },
    { question: "Inertia depends on?", options: ["Mass","Speed","Time","Force"], answer: "Mass", difficulty: "medium", topic: "Laws of Motion" },
    { question: "1st law?", options: ["Inertia","Force","Energy","Power"], answer: "Inertia", difficulty: "medium", topic: "Laws of Motion" }
  ]
},

// ================= CLASS 12 =================
{
  class: "12",
  subject: "Math",
  questions: [
    { question: "Derivative of sinx?", options: ["cosx","sinx","-sinx","-cosx"], answer: "cosx", difficulty: "medium", topic: "Calculus" },
    { question: "Integration of 1/x?", options: ["lnx","x","1/x²","e^x"], answer: "lnx", difficulty: "medium", topic: "Calculus" },
    { question: "Matrix determinant 2x2?", options: ["ad-bc","a+b","ab","a-b"], answer: "ad-bc", difficulty: "medium", topic: "Matrices" },
    { question: "Probability max?", options: ["1","0","10","100"], answer: "1", difficulty: "easy", topic: "Probability" },
    { question: "Vector addition?", options: ["Triangle law","Circle","Square","None"], answer: "Triangle law", difficulty: "medium", topic: "Vectors" },
    { question: "Inverse sin range?", options: ["-π/2 to π/2","0 to π","0 to 2π","-π to π"], answer: "-π/2 to π/2", difficulty: "hard", topic: "Trigonometry" },
    { question: "d/dx(e^x)?", options: ["e^x","x","1","0"], answer: "e^x", difficulty: "easy", topic: "Calculus" },
    { question: "Mean formula?", options: ["Σx/n","x/n","Σx","n/x"], answer: "Σx/n", difficulty: "easy", topic: "Statistics" },
    { question: "Limit x→0 sinx/x?", options: ["1","0","∞","-1"], answer: "1", difficulty: "hard", topic: "Limits" },
    { question: "Vector dot?", options: ["Scalar","Vector","Matrix","None"], answer: "Scalar", difficulty: "medium", topic: "Vectors" }
  ]
},
{
  class: "12",
  subject: "Physics",
  questions: [
    { question: "Current unit?", options: ["Ampere","Volt","Ohm","Watt"], answer: "Ampere", difficulty: "easy", topic: "Electricity" },
    { question: "Ohm law?", options: ["V=IR","P=VI","E=mc²","F=ma"], answer: "V=IR", difficulty: "easy", topic: "Electricity" },
    { question: "Capacitance unit?", options: ["Farad","Henry","Tesla","Newton"], answer: "Farad", difficulty: "medium", topic: "Electrostatics" },
    { question: "Magnetic field unit?", options: ["Tesla","Volt","Ampere","Watt"], answer: "Tesla", difficulty: "medium", topic: "Magnetism" },
    { question: "Wave speed?", options: ["fλ","v/t","d/t","a×t"], answer: "fλ", difficulty: "medium", topic: "Waves" },
    { question: "Photon energy?", options: ["hf","mv","mc²","1/2mv²"], answer: "hf", difficulty: "hard", topic: "Modern Physics" },
    { question: "Transformer works on?", options: ["Induction","Resistance","Capacitance","Voltage"], answer: "Induction", difficulty: "medium", topic: "Electromagnetism" },
    { question: "SI unit frequency?", options: ["Hz","m/s","N","J"], answer: "Hz", difficulty: "easy", topic: "Waves" },
    { question: "Electric power?", options: ["VI","IR","V/R","I/V"], answer: "VI", difficulty: "easy", topic: "Electricity" },
    { question: "Nuclear energy source?", options: ["Fission","Combustion","Fusion only","Heat"], answer: "Fission", difficulty: "medium", topic: "Nuclear Physics" }
  ]
}

];

module.exports = quizData;