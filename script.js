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
    var overlay = document.querySelectorAll(".overlay");
    var cardcontent = document.querySelectorAll(".card-content");
    var paragraph = document.querySelectorAll(".paragraph");
  
    body.classList.toggle("dark-mode");
  
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
        localStorage.setItem("darkModeEnabled", "true"); // save dark mode state to local storage
      } else {
        image.src = "képek\\black.png";
        image.alt = "Light mode image";
        localStorage.removeItem("darkModeEnabled"); // remove dark mode state from local storage
      }
    });
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkModeEnabled", "true"); // save dark mode state to local storage
    } else {
        localStorage.removeItem("darkModeEnabled"); // remove dark mode state from local storage
    }
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
    
    paragraph.forEach(function(container) {
      container.classList.toggle("paragraph-background");
    });
    paragraph.forEach(function(container) {
      container.classList.toggle("paragraph-a");
    });
  
    cardcontent.forEach(function(container) {
      container.classList.toggle("card-content-dark");
    });
  
    overlay.forEach(function(container) {
      container.classList.toggle("overlay-dark");
    });
  
    sliderContainers.forEach(function(container) {
      container.classList.toggle("dark-mode");
    });
  
    NAVBUT.forEach(function(container) {
      container.classList.toggle("dark-mode");
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", toggleDarkMode);
  
    checkDarkModeEnabled(); // call this function to apply the saved dark mode state
  });
  function checkDarkModeEnabled() {
    var darkModeEnabled = localStorage.getItem("darkModeEnabled");
    if (darkModeEnabled == "true") {
      toggleDarkMode();
    } else {
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
      var overlay = document.querySelectorAll(".overlay");
      var cardcontent = document.querySelectorAll(".card-content");
      var paragraph = document.querySelectorAll(".paragraph");
    
      body.classList.remove("dark-mode");
  
      sliderButtons.forEach(function(button) {
        button.classList.remove("dark-mode");
      });
  
      formContainers.forEach(function(container) {
        container.classList.remove("dark-mode");
      });
  
      headings.forEach(function(heading) {
        heading.classList.remove("dark-mode");
      });
  
      footings.forEach(function(footing) {
        footing.classList.remove("dark-mode");
      });
  
      images.forEach(function(image) {
        image.classList.remove("dark-mode");
        image.src = "képek\\black.png";
        image.alt = "Light mode image";
      });
  
      canvases.forEach(function(canvas) {
        canvas.classList.remove("text-bg-dark");
      });
  
      lists.forEach(function(list) {
        list.classList.remove("text-white");
      });
  
      logos.forEach(function(logo) {
        logo.classList.remove("text-white");
      });
  
      navButtons.forEach(function(button) {
        button.classList.remove("bg-white");
      });
  
      modalHeaders.forEach(function(header) {
        header.classList.remove("modalHeader");
      });
  
      modalBodies.forEach(function(body) {
        body.classList.remove("modalBody");
      });
  
      modalFooters.forEach(function(footer) {
        footer.classList.remove("modalFooter");
      });
  
      paragraph.forEach(function(container) {
        container.classList.remove("paragraph-background");
      });
  
      paragraph.forEach(function(container) {
        container.classList.remove("paragraph-a");
      });
  
      cardcontent.forEach(function(container) {
        container.classList.remove("card-content-dark");
      });
  
      overlay.forEach(function(container) {
        container.classList.remove("overlay-dark");
      });
  
      sliderContainers.forEach(function(container) {
        container.classList.remove("dark-mode");
      });
  
      NAVBUT.forEach(function(container) {
        container.classList.remove("dark-mode");
      });
    }
    }
  
checkDarkModeEnabled();
  