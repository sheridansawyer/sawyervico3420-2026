// ===============================
// 1) Function with NO parameters
// ===============================
function showWelcome() {
  const welcomeEl = document.getElementById("welcomeText");
  const dateEl = document.getElementById("dateResult");

  const now = new Date();
  welcomeEl.innerHTML = "Welcome! This page demonstrates custom JavaScript functions.";
  dateEl.innerHTML = "Today is: " + now.toDateString();
}

// Call it at least once (AUTORUN)
showWelcome();


// ==================================
// 2) Function with ONE parameter
// ==================================
function showMoodMessage(mood) {
  const moodEl = document.getElementById("moodResult");

  // simple custom logic using the parameter
  if (mood === "confident") {
    moodEl.innerHTML = "Mood set to confident ✅ You’ve got this.";
  } else if (mood === "stressed") {
    moodEl.innerHTML = "Mood set to stressed 😵‍💫 Take a breath — one step at a time.";
  } else {
    moodEl.innerHTML = "Mood set to: " + mood;
  }
}


// ===================================================
// 3) Function with TWO+ parameters + RETURN statement
// ===================================================
function calculateOutfitScore(comfort, style) {
  // Return a value (rubric requirement)
  // Weighted: comfort 60%, style 40%
  const score = (comfort * 0.6) + (style * 0.4);
  return score;
}

function runOutfitScore() {
  const scoreEl = document.getElementById("scoreResult");

  let comfortInput = prompt("Rate COMFORT from 1 to 10:");
  let styleInput = prompt("Rate STYLE from 1 to 10:");

  // Convert strings to numbers
  const comfort = Number(comfortInput);
  const style = Number(styleInput);

  // Basic validation
  if (Number.isNaN(comfort) || Number.isNaN(style)) {
    scoreEl.innerHTML = "Please enter numbers only (example: 8).";
    return;
  }

  const finalScore = calculateOutfitScore(comfort, style);

  scoreEl.innerHTML =
    "Comfort: " + comfort +
    " | Style: " + style +
    " → Final Outfit Score: " + finalScore.toFixed(1);
}


// ==================================
// Bonus: Function called by CLICK event
// ==================================
function toggleHighlight() {
  const box = document.getElementById("clickBox");
  const toggleEl = document.getElementById("toggleResult");

  box.classList.toggle("highlight");

  if (box.classList.contains("highlight")) {
    toggleEl.innerHTML = "Highlight ON ✨ (click again to turn off)";
  } else {
    toggleEl.innerHTML = "Highlight OFF (click to turn on)";
  }
}