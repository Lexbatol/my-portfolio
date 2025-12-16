// 1. SELECT elements
const themeBtn = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("active-mode");
  themeBtn.textContent = "🌙";
}
// 2. LISTEN for clicks
themeBtn.addEventListener("click", function () {
  // 3. CHANGE the class
  body.classList.toggle("active-mode");

  // 4. CHANGE the icon based on the mode
  if (body.classList.contains("active-mode")) {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
