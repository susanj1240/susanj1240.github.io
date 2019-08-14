var about = document.getElementById("about");
var project = document.getElementById("project");
var contact = document.getElementById("contact");


$(document).ready(function () {
  $(about).click(function () {
    $('html, body').animate({
      scrollTop: $(document.getElementById('p2')).offset().top
    }, 1000)
  })
});

$(document).ready(function () {
  $(project).click(function () {
    $('html, body').animate({
      scrollTop: $(document.getElementById('p3')).offset().top
    }, 1000)
  })
});

$(document).ready(function () {
  $('.parallax').parallax();
});

function redirect() {
  var url = "https://uva-ksea.org/";
  window.location(url);
}
