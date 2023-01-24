// Favicons
$(document).ready(function () {
  if (!window.matchMedia) return;

  var current = $('head > link[rel="icon"][media]');
  $.each(current, function (i, icon) {
    var match = window.matchMedia(icon.media);
    function swap() {
      if (match.matches) {
        current.remove();
        current = $(icon).appendTo("head");
      }
    }
    match.addListener(swap);
    swap();
  });
});

// Spinning logo
$(window).scroll(function () {
  var spinningLogo = (($(window).scrollTop() / 500) % Math.PI) * 2;
  $("#logo").css({
    transform: "rotate(" + spinningLogo + "rad)",
  });
});
