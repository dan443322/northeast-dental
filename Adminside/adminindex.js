let adminCred = JSON.parse(sessionStorage.getItem("admin"));

var logoutBtn = document.getElementById("logout");

function ifAdminCredential() {
  if (adminCred == null) {
    window.location.href = "./adminsignin.html";
  } else {
    console.log("Admin is logged in");
  }
}

window.addEventListener("load", ifAdminCredential);

logoutBtn.addEventListener("click", () => {
  const preloader = document.getElementById("preloading");
  preloader.style.display = "";
  preloader.style.opacity = 0;
  preloader.style.animation = "fade-in 0.5s ease-in-out forwards";

  setTimeout(() => {
    sessionStorage.removeItem("admin");
    window.location.href = "./adminsignin.html";
  }, 1500);
});

// function GetCompletedDataClick() {
//   let lastChildTable = tableBody.lastElementChild;

//   let scanTable = lastChildTable.querySelectorAll(".client-completed");
//   let scanTableNot = lastChildTable.querySelectorAll(":not(.client-completed)");

//   scanTableNot.forEach((element) => {
//     element.style.display = "none";
//   });
//   scanTable.forEach((element) => {
//     element.style.display = "";
//   });
// }

// function GetAllDataClick() {
//   let scanTableAll = lastChildTable.querySelectorAll(":not(.client-undefined)");

//   scanTableAll.forEach((element) => {
//     element.style.display = "";
//   });
// }

// function GetApprovedDataClick(e) {
//   let lastChildTable = e.target.closest("#tbody1");
//   let scanTable = lastChildTable.querySelectorAll(".client-approved");
//   let scanTableNot = lastChildTable.querySelectorAll(":not(.client-approved)");

//   scanTableNot.forEach((element) => {
//     element.style.display = "none";
//   });
//   scanTable.forEach((element) => {
//     element.style.display = "";
//   });
// }

// function GetPendingDataClick(e) {
//   let lastChildTable = e.target.closest("#tbody1");
//   lastChildTable.addEventListener("click", function (event) {
//     if (lastChildTable.matches(".client-pending")) {
//       // Handle click on .client-pending element
//       lastChildTable.style.display = "";
//     } else if (!lastChildTable.matches(".client-pending")) {
//       // Handle click on element that is not .client-pending
//       lastChildTable.style.display = "none";
//     }
//   });
// }

// function GetDeclinedDataClick() {
//   let scanTable = lastChildTable.querySelectorAll(".client-declined");
//   let scanTableNot = lastChildTable.querySelectorAll(":not(.client-declined)");

//   scanTableNot.forEach((element) => {
//     element.style.display = "none";
//   });
//   scanTable.forEach((element) => {
//     element.style.display = "";
//   });
// }

let dashboardButton = document.getElementById("dashboard-click");
let approvedFilter = document.getElementById("filter-approved");
let pendingFilter = document.getElementById("filter-pending");
let declinedFilter = document.getElementById("filter-declined");
let completedFilter = document.getElementById("filter-completed");
