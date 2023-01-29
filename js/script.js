// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Update Year
const date = new Date();
const year = date.getFullYear();

document.querySelector(".year").textContent = year;

// // Image store
// let imgStore = document.querySelector(".image-upload");
// imgStore.addEventListener("change", () => {
//   let reader = new FileReader();
//   reader.readAsDataURL(imgStore.files[0]);
//   reader.addEventListener("load", () => {
//     document.querySelector(".default").src = `${reader.result}`;
//   });
// });


// Last modified | path
let last = document.lastModified;
document.querySelector(".modified").textContent = `Last Updated: ${last} | Path ${window.location.href}`