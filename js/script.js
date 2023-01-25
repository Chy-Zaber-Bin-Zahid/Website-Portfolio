// Smooth scrolling animation
// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     if (link.classList.contains("main-nav-link")) {
//       headerEl.classList.toggle("nav-open");
//     }
//   });
// });

// Update Year
const date = new Date();
const year = date.getFullYear();

document.querySelector(".year").textContent = year;
