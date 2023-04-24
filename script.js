// function toggleDarkMode() {
//     var body = document.body;
//     var sliderContainer = document.getElementById("sliderContainer");
//     var sliderButton = document.getElementById("sliderButton");
//     var formContainer = document.getElementById("formContainer");
//     var headning = document.getElementById("heading");
//     var footing = document.getElementById("footer");
//     var image = document.getElementById("imgClickAndChange");
//     var canvas = document.getElementById("offcanvasNavbar");
//     var list = document.getElementById("lista");
//     var list2 = document.getElementById("lista2");
//     var list3 = document.getElementById("lista3");
//     var list4 = document.getElementById("lista4");
//     var list5 = document.getElementById("lista5");
//     var list6 = document.getElementById("lista6");
//     var logo = document.getElementById("logo");
//     var navbut = document.getElementById("navbutton");
//     var modalhead = document.getElementById("modalHeader");
//     var modalbody = document.getElementById("modalBody");
//     var modalFooter = document.getElementById("modalFooter");
    
//     body.classList.toggle("dark-mode");
//     sliderContainer.classList.toggle("dark-mode");
//     sliderButton.classList.toggle("dark-mode");
//     formContainer.classList.toggle("dark-mode");
//     headning.classList.toggle("dark-mode");
//     footing.classList.toggle("dark-mode");
//     canvas.classList.toggle("text-bg-dark")
//     list.classList.toggle("text-white")
//     list2.classList.toggle("text-white")
//     list3.classList.toggle("text-white")
//     list4.classList.toggle("text-white")
//     list5.classList.toggle("text-white")
//     list6.classList.toggle("text-white")
//     logo.classList.toggle("text-white")
//     navbut.classList.toggle("bg-white")
//     modalhead.classList.toggle("modalHeader")
//     modalbody.classList.toggle("modalBody")
//     modalFooter.classList.toggle("modalFooter")
    
//     if (body.classList.contains("dark-mode")) {
//       image.src = "képek\\white.png";
//       image.alt = "Dark mode image";
//       localStorage.setItem("darkModeEnabled", "true");
//     } else {
//       image.src = "képek\\black.png";
//       image.alt = "Light mode image";
//       localStorage.removeItem("darkModeEnabled");
//     }
// }
// document.addEventListener("DOMContentLoaded", function() {
// var darkModeToggle = document.getElementById("darkModeToggle");
// darkModeToggle.addEventListener("click", toggleDarkMode);
// })
// function checkDarkModeEnabled() {
//     var darkModeEnabled = localStorage.getItem("darkModeEnabled");
//     if (darkModeEnabled === "true") {
//         toggleDarkMode();
//     }
// }
// function oldalTeteje(){
//   let gombom = document.getElementById("gomb")


//   function oldalTeteje() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// }
// checkDarkModeEnabled()
function toggleDarkMode() {
  var body = document.body;
  var sliderContainers = document.querySelectorAll(".slider-container");
  var sliderButtons = document.querySelectorAll(".slider-button");
  var formContainers = document.querySelectorAll(".form-container");
  var headings = document.querySelectorAll(".heading");
  var footings = document.querySelectorAll(".footing");
  var images = document.querySelectorAll(".imgClickAndChange");
  var canvases = document.querySelectorAll(".offcanvas");
  var lists = document.querySelectorAll(".nav-link");
  var logos = document.querySelectorAll(".navbar-brand");
  var navButtons = document.querySelectorAll(".navbutton");
  var modalHeaders = document.querySelectorAll(".modal-header");
  var modalBodies = document.querySelectorAll(".modal-body");
  var modalFooters = document.querySelectorAll(".modal-footer");
  var NAVBUT = document.querySelectorAll(".navbar-toggler");

  body.classList.toggle("dark-mode");

  sliderContainers.forEach(function(container) {
    container.classList.toggle("dark-mode");
  });

  NAVBUT.forEach(function(container) {
    container.classList.toggle("dark-mode");
  });

  sliderButtons.forEach(function(button) {
    button.classList.toggle("dark-mode");
  });

  formContainers.forEach(function(container) {
    container.classList.toggle("dark-mode");
  });

  headings.forEach(function(heading) {
    heading.classList.toggle("dark-mode");
  });

  footings.forEach(function(footing) {
    footing.classList.toggle("dark-mode");
  });

  images.forEach(function(image) {
    image.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      image.src = "képek\\white.png";
      image.alt = "Dark mode image";
      localStorage.setItem("darkModeEnabled", "true");
    } else {
      image.src = "képek\\black.png";
      image.alt = "Light mode image";
      localStorage.removeItem("darkModeEnabled");
    }
  });

  canvases.forEach(function(canvas) {
    canvas.classList.toggle("text-bg-dark");
  });

  lists.forEach(function(list) {
    list.classList.toggle("text-white");
  });

  logos.forEach(function(logo) {
    logo.classList.toggle("text-white");
  });

  navButtons.forEach(function(button) {
    button.classList.toggle("bg-white");
  });

  modalHeaders.forEach(function(header) {
    header.classList.toggle("modalHeader");
  });

  modalBodies.forEach(function(body) {
    body.classList.toggle("modalBody");
  });

  modalFooters.forEach(function(footer) {
    footer.classList.toggle("modalFooter");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", toggleDarkMode);
});

function checkDarkModeEnabled() {
  var darkModeEnabled = localStorage.getItem("darkModeEnabled");
  if (darkModeEnabled === "true") {
    toggleDarkMode();
  }
}

function oldalTeteje() {
  let gombom = document.getElementById("gomb");

  function oldalTeteje() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

checkDarkModeEnabled();