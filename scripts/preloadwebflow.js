document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    // Remove the preloader after all resources have finished loading
    const preloader = document.getElementById("preloading");

    //Always Starts at the top kunohay
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(() => {
      preloader.style.animation = "fade-out 0.5s ease-in-out";

      // Enable scrolling after preloader is hidden
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); // Adjusted timeout to ensure it runs after the fade-out animation
    }, 1500);
  });

  $(window).on("scroll", function () {
    if (checkVisible($("#about"))) {
      console.log("About Section Visible");
      // $(window).off("scroll");
    } else {
      // do nothing
    }
  });
});

// setInterval(() => {}, 1000);
