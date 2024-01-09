//Get the button
let mybutton = document.getElementById("button-to-top");
let toTopImage = document.getElementById("to-top-image");
let bodyHeight = document.body.offsetHeight;
let showButtontoTop = bodyHeight / 2;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > showButtontoTop ||
    document.documentElement.scrollTop > showButtontoTop
  ) {
    let currentAnimation = window
      .getComputedStyle(toTopImage)
      .getPropertyValue("animation");
    if (currentAnimation === "luhag 6s infinite ease-in-out") {
      // Do nothing or break the code
      return;
    } else {
      setTimeout(function () {
        toTopImage.style.animation = "luhag 6s infinite ease-in-out";
      }, 100);
      mybutton.style.transform = "translateX(0px)";
    }
  } else {
    toTopImage.style.animation = "";
    mybutton.style.transform = "translateX(100px)";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  afterNavClick();
}

//Disables Image Interactions
document.addEventListener("contextmenu", function (event) {
  var targetElement = event.target;

  // Check if the right-click occurred on an image
  if (targetElement.tagName === "IMG") {
    event.preventDefault();
  }
});

function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible")
    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
  if (eval == "above") return y < viewportHeight + scrolltop;
}
