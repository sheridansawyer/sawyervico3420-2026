// Button so prompts don't auto-fire the second you open the page
document.getElementById("startBtn").addEventListener("click", runPrompts);

function runPrompts() {
  // 1) Create at least three variables + 2) Ask 3 questions
  let name = prompt("What's your name?");
  let age = prompt("How old are you? (number)");
  let favoritePlatform = prompt("Pick a platform: Instagram, TikTok, or YouTube");

  // 3) Assign answers to variables (done above). Convert age to a number:
  age = Number(age);

  // Grab spots on the page to display results
  const msg1 = document.getElementById("msg1");
  const msg2 = document.getElementById("msg2");
  const msg3 = document.getElementById("msg3");
  const msg4 = document.getElementById("msg4");

  // 4) At least one IF statement (only runs if true)
  if (name && name.trim().length > 0) {
    msg1.textContent = `Hi, ${name}! Thanks for answering the questions.`;
  }

  // 5) At least one IF...ELSE statement
  if (age >= 18) {
    msg2.textContent = "You’re 18 or older — adult mode activated 😎";
  } else {
    msg2.textContent = "You’re under 18 — student mode activated 📚";
  }

  // 6) At least one IF...ELSE IF...ELSE statement
  if (age >= 21) {
    msg3.textContent = "Fun fact: you’re 21+!";
  } else if (age >= 16) {
    msg3.textContent = "You’re in the 16–20 range — busy era for sure.";
  } else if (age > 0) {
    msg3.textContent = "You’re 15 or younger — enjoy it while it lasts!";
  } else {
    msg3.textContent = "That age didn’t look like a real number 😅";
  }

  // BONUS: switch statement with 3 cases + default
  // Normalize input so Instagram / instagram / INSTAGRAM all work
  let platform = (favoritePlatform || "").trim().toLowerCase();

  switch (platform) {
    case "instagram":
      msg4.textContent = "Instagram pick: aesthetics + stories + reels ✅";
      break;
    case "tiktok":
      msg4.textContent = "TikTok pick: trends + scroll addiction ✅";
      break;
    case "youtube":
      msg4.textContent = "YouTube pick: long-form + deep dives ✅";
      break;
    default:
      msg4.textContent = "Bonus switch: You picked something else — still valid!";
      break;
  }

  console.log({ name, age, favoritePlatform });
}