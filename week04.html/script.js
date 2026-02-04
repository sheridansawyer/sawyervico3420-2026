// 1) Create + initialize at least three variables
let firstName = "Sheridan";
let hometown = "Chagrin Falls";
let birthYear = 2005;

// Extra variables for birthday details
let birthMonth = "August";
let birthDay = 9;

// 2) Display original variables
document.getElementById("nameText").textContent =
  "First Name: " + firstName;

document.getElementById("cityText").textContent =
  "Hometown: " + hometown;

document.getElementById("ageText").textContent =
  "Birth Year: " + birthYear;

// 3) Update at least three variables
firstName = firstName + " Sawyer";
hometown = hometown + ", Ohio";
birthYear = birthYear + 1; // example update to show change

// Display updated variables
document.getElementById("updatedNameText").textContent =
  "Updated Name: " + firstName;

document.getElementById("updatedCityText").textContent =
  "Updated Hometown: " + hometown;

document.getElementById("updatedAgeText").textContent =
  "Updated Birth Year: " + birthYear;

// 4) Concatenate variables and display result
let fullInfo =
  firstName + " was born on " + birthMonth + " " + birthDay +
  " and grew up in " + hometown + ".";

document.getElementById("comboText").textContent = fullInfo;

// 5) Perform math with variables
let currentYear = 2026;
let age = currentYear - 2005;
let ageI