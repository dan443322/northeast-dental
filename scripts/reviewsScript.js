document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide("#splide", {
    type: "loop",
    autoplay: true,
  });
  splide.mount();

  var rellax = new Rellax(".rellax", {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });
});
