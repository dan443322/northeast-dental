//         // JS Code
// var box = document.getElementById("box");
// var button = document.getElementById("button");
// var expanded = true;

// var height = box.offsetHeight;
// box.style.height = height + "px";

// button.addEventListener("click", function () {
//   if (expanded) {
//     box.style.height = 0;
//     expanded = false;
//   } else {
//     box.style.height = height + "px";
//     expanded = true;
//   }
// });

// HTML AND CSS
// #box {
//   margin-top: 20px;
//   border: 1px solid black;
//   background-color: #4f88ff;
//   width: 300px;
//   transition: height 0.25s;
//   overflow: hidden;
// }
// <button id="button">
// Click
// </button>

// <div id="box">
// Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
// </div>

// See More See Less Function
var seeMoreLess = document.getElementById("seeMoreLess");
var serviceListDiv = document.querySelector(".home-grid1");
var seemoreDivs = document.querySelectorAll(".see-more");

function seeMoreseeLess() {
  // Loop through the elements and toggle their display property
  for (var i = 0; i < seemoreDivs.length; i++) {
    var computedStyle = window.getComputedStyle(seemoreDivs[i]);

    if (computedStyle.display === "none") {
      seemoreDivs[i].style.display = "block";
      seemoreDivs[i].style.animation = "fade-in-left 1s ease-out";
      toggletoSeeLess();
    } else {
      seemoreDivs[i].style.display = "none";
      toggletoSeeMore();
    }
  }
}

function toggletoSeeLess() {
  if (seeMoreLess) {
    var currentText = seeMoreLess.textContent || seeMoreLess.innerText;

    // Toggle between "See More" and "See Less"
    if (currentText === "See More" || "SEE MORE" || "see more") {
      seeMoreLess.textContent = "See Less";
      seeMoreLess.style.display = "none";
    } else {
    }
  }
}

function toggletoSeeMore() {
  if (seeMoreLess) {
    var currentText = seeMoreLess.textContent || seeMoreLess.innerText;

    // Toggle between "See More" and "See Less"
    if (currentText === "See Less" || "SEE LESS" || "see less") {
      seeMoreLess.textContent = "See More";
    } else {
    }
  }
}
