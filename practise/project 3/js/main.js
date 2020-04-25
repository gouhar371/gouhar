$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 900) $(".navbar").addClass("navbar-fixed-top");
  });
});
