"use strict";
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
document.querySelector(
  ".modified"
).textContent = `Last Updated: ${last} | Path ${window.location.href}`;

// Submitted part
function submit() {
  const email = document.querySelector(".email").value;
  const name = document.querySelector(".name").value;
  const subject = document.querySelector(".subject").value;
  const phone = document.querySelector(".phone").value;
  const message = document.querySelector(".message").value;

  if (
    (email !== "") &
    (name !== "") &
    (subject !== "") &
    (phone !== "") &
    (message !== "")
  ) {
    document.querySelector(".fill").style.display = "none";
    document.querySelector(".sub-blur").style.visibility = "visible";
    document.querySelector(".submitted").style.visibility = "visible";
  } else {
    document.querySelector(".fill").style.display = "block";
  }
}

function closeBtn() {
  document.querySelector(".sub-blur").style.visibility = "hidden";
  document.querySelector(".submitted").style.visibility = "hidden";
}
