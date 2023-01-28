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

// Image store
let imgStore = document.querySelector(".image-upload");
imgStore.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(imgStore.files[0]);
  reader.addEventListener("load", () => {
    document.querySelector(".default").src = `${reader.result}`;
  });
});

// Page current location
let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");
locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    //For old browser i.e IE
    locationDiv.innerText = "The browser does not support geolocation";
  }
});
//Error Checks
const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "Please allow access to location";
      break;
    case error.POSITION_UNAVAILABLE:
      //usually fired for firefox
      locationDiv.innerText = "Location Information unavailable";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "The request to get user location timed out";
  }
};
const showLocation = async (position) => {
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );
  //store response object
  let data = await response.json();
  locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
};

// Last modified
const alert = document.lastModified;
document.querySelector(
  ".last-modified"
).textContent = `Page Last modified: ${alert}`;
console.log(alert);
