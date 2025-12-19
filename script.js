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
const projects = [
  {
    title: "Personal Portfolio",
    description: "The source code for this responsive, dark-mode enabled site.",
    image: "portfolio-dark.jpeg",
    link: "https://github.com/Lexbatol/my-portfolio",
    category: "html",
  },
  {
    title: "CineFile Movie DB",
    description:
      "Real-time search engine with a persistent Watchlist using Local Storage.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    link: "https://cinefile-psi.vercel.app/",
    category: "js",
  },
  {
    title: "Zen Weather App",
    description:
      "A secure, serverless weather dashboad with real-time forecasts.",
    image: "weather.jpeg",
    link: "https://weather-app-ten-mu-32.vercel.app/",
    category: "js",
  },
  {
    title: "The Robot Army",
    description: "This would be another one in the future, I hope...",
    image: "https://robohash.org/3",
    link: "#",
    category: "js",
  },
];
const projectContainer = document.querySelector(".projects-grid");
const filterBtns = document.querySelectorAll(".filter-btn");

function loadProjects(listToRender) {
  projectContainer.innerHTML = "";

  listToRender.forEach((project) => {
    const cardHTML = `
    <div class="project-card">
       <img src="${project.image}" alt="${project.title}">
       <h3>${project.title}</h3>
       <p>${project.description}</p>
       <a href="${project.link}" class="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
    `;
    projectContainer.innerHTML += cardHTML;
  });
}

loadProjects(projects);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    if (filterValue === "all") {
      loadProjects(projects);
    } else {
      const filteredList = projects.filter(
        (project) => project.category === filterValue
      );
      loadProjects(filteredList);
    }
  });
});

const textToType = "Frontend Developer";
const typeWriterElement = document.querySelector(".typewriter");

let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typeWriterElement.textContent += textToType.charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, 100);
  }
}
typeWriter();
