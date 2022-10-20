// hamburger menu

$('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle(500);
    $(this).toggleClass('active');
  });

  // animate on scroll activate 
AOS.init({
    duration: 500
});


// code to show / hide button to top 

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// progress bar
const pageProgressBar = document.querySelector(".progress-bar")
document.addEventListener("scroll", () => {
  const scrolledPercentage =
      (scrollContainer().scrollTop /
        (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
      100;
  
  pageProgressBar.style.width = `${scrolledPercentage}%`
  
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});


//KONTAKT FORM

// Helper function to get form data in the supported format
function getFormDataString(formEl) {
  var formData = new FormData(formEl),
    data = [];

for (var keyValue of formData) {
    data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
}

return data.join("&");
}

// Fetch the form element
var formEl = document.getElementById("contact-form");

// Override the submit event
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

if (grecaptcha) {
    var recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) { // reCAPTCHA not clicked yet
    return false;
  }
}

var request = new XMLHttpRequest();

request.addEventListener("load", function () {
  if (request.status === 302) { // CloudCannon redirects on success
    // It worked
  }
});

request.open(formEl.method, formEl.action);
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
request.send(getFormDataString(formEl));
});

