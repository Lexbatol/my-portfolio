const themeBtn = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

themeBtn.addEventListener("click", function () {
  // Toggle the class
  body.classList.toggle("active-mode");

  // Change the icon based on the mode
  if (body.classList.contains("active-mode")) {
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀️";
  }
});
