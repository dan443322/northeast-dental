var header = document.querySelector("header");
var hehe = 0;
document.addEventListener("DOMContentLoaded", function () {
  ScrollTrigger.create({
    trigger: "#id",
    start: "top top",
    endTrigger: "#otherID",
    end: "bottom 50%+=100px",
    onToggle: (self) => console.log("toggled, isActive:", self.isActive),
    onUpdate: (self) => {
      console.log(
        "progress:",
        self.progress.toFixed(4),
        "direction:",
        self.direction,
        "velocity",
        self.getVelocity().toFixed(4)
      );
    },
  });
});
