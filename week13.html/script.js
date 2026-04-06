document.getElementById("animateBtn").addEventListener("click", function(event) {
  event.preventDefault();

  let box = document.getElementById("clickBox");
  box.classList.toggle("animate");
});