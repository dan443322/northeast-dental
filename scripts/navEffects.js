const burgerBtn = document.querySelector(".nav-burger-menu");

const otherDiv = document.querySelector(".home-mobile-menu");

const elementsToBlur = document.querySelectorAll(
  ".home-container > :not(.home-navbar)"
);

const homeContainer = document.querySelector(".home-container");

var isImage1 = true;

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "auto";
  setInterval(() => {
    if (otherDiv.style.display === "block") {
      document.body.style.overflow = "hidden";
    } else if (otherDiv.style.display === "none") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }
  }, 10);
});

function toggleImageAndDiv() {
  // Toggle the image source
  burgerBtn.querySelector("img").src = isImage1
    ? "resources/Icons/close-bold-svgrepo-com.svg"
    : "resources/Icons/menu-burger-horizontal-svgrepo-com.svg";

  // Toggle the visibility of another div

  // Toggle fade-in and fade-out effect with move from right animation
  if (otherDiv.style.display === "none" || otherDiv.style.display === "") {
    otherDiv.style.display = "block";
    setTimeout(() => {
      otherDiv.classList.remove("fade-out");
      otherDiv.classList.add("fade-in");
    }, 10);
    setTimeout(() => {
      elementsToBlur.forEach((element) => {
        // Add filter blur
        element.style.filter = "blur(5px)";
      });
    }, 500);
  } else {
    otherDiv.classList.remove("fade-in");
    otherDiv.classList.add("fade-out");
    setTimeout(() => {
      elementsToBlur.forEach((element) => {
        // Add filter blur
        element.style.filter = "blur(0px)";
      });
      otherDiv.style.display = "none";
    }, 500);
  }

  // Updates the state of the image
  isImage1 = !isImage1;
}

function afterNavClick() {
  isImage1 = true;
  burgerBtn.querySelector("img").src =
    "resources/Icons/menu-burger-horizontal-svgrepo-com.svg";

  otherDiv.classList.remove("fade-in");
  otherDiv.classList.add("fade-out");

  setTimeout(() => {
    elementsToBlur.forEach((element) => {
      // Add filter blur
      element.style.filter = "blur(0px)";
    });
    otherDiv.style.display = "none";
  }, 500);
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.style.animation = "decrease-bot-padding 300ms ease-out forwards";
    setTimeout(() => {
      header.style.paddingBottom = "var(--dl-space-space-oneunit)";
      header.style.paddingTop = "var(--dl-space-space-oneunit)";
      header.style.backgroundColor = "var(--dl-color-gray-white)";
    }, 300);
  } else {
    header.style.animation = "increase-bot-padding 300ms ease-out forwards";
    setTimeout(() => {
      header.style.paddingBottom = "var(--dl-space-space-oneandhalfunits)";
      header.style.paddingTop = "var(--dl-space-space-oneandhalfunits)";
      header.style.backgroundColor = "transparent";
    }, 300);
  }
});
