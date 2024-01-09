// Initialize links and messages
var fbMobileLink = "https://m.facebook.com/northeastdental2020/services";

var promptMessage1 =
  "Online Booking System not yet avaiable. Appointments can be booked on our Facebook Page.\nProceed?";

var fbServiceLink = "https://www.facebook.com/northeastdental2020/services";
var message2 = "Proceed?";

var mailtoLink = "mailto:northeastdental2020@gmail.com";
var mailtoMessage = "Send us an email?";

var phoneLink1 = "tel:+639616349939";
var phoneLink2 = "tel:+6325057628";
var phoneMessage1 = "Make a phone call?";

function confirmNewTab(link, message) {
  var confirmed = window.confirm(message);

  if (confirmed) {
    afterNavClick();
    window.open(link, "_blank");
  } else {
    // clicked "Cancel" or closed the dialog
  }
}
