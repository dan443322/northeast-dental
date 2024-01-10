const firebaseConfig = {
  apiKey: "AIzaSyC9HeF6WjU2DVxhm6CPB8JAZ15u5uyCrv0",
  authDomain: "northeast-dental-185a4.firebaseapp.com",
  databaseURL: "https://northeast-dental-185a4-default-rtdb.firebaseio.com",
  projectId: "northeast-dental-185a4",
  storageBucket: "northeast-dental-185a4.appspot.com",
  messagingSenderId: "520707400768",
  appId: "1:520707400768:web:06fcf13d7487b7f12faba5",
  measurementId: "G-NQCY95NSJY",
};

var appointmentFormDB;

document.addEventListener("DOMContentLoaded", function () {
  firebase.initializeApp(firebaseConfig);

  appointmentFormDB = firebase.database().ref("appointmentForm");

  var form = document.getElementById("appointmentForm");
  if (form) {
    form.addEventListener("submit", submitForm);
  } else {
    console.error("No element with ID 'appointmentForm' found");
  }
});

function clickedBook() {
  if (confirm("Confirm to submit?")) {
    form.submit();
  } else {
    return false;
  }
}

function submitForm(e) {
  e.preventDefault();
  var fname = getElementVal("fname");
  var lname = getElementVal("lname");
  var name = fname + " " + lname;
  var phone = getElementVal("phone");
  var emailid = getElementVal("emailid");
  var date = getElementVal("date");
  var time = document.querySelector('select[name="time"]').value;

  var otherService = getElementVal("otherService");
  var selectedService = document.querySelector('select[name="service"]').value;
  var finalSelectedService = selectedService + otherService;

  saveMessages(name, phone, emailid, finalSelectedService, date, time);

  setTimeout(() => {
    window.alert("Your appointment has been booked successfully!");
  }, 2000);

  setTimeout(() => {
    document.getElementById("appointmentForm").reset();
    window.history.back();
  }, 3000);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

const saveMessages = (
  name,
  phone,
  emailid,
  finalSelectedService,
  date,
  time
) => {
  var newappointmentForm = appointmentFormDB.push();

  newappointmentForm.set({
    name: name,
    phone: phone,
    email: emailid,
    service: finalSelectedService,
    date: date,
    time: time,
    status: "pending",
  });
};
