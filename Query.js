// Query.js

$(document).ready(function () {
  const sound = document.getElementById("slideSound");

  $(".slider-img").click(function () {
    $(".slider-img").removeClass("active");
    $(this).addClass("active");

    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  });
});