$(document).ready(function () {
  $(".load").hide();
  $("pic").hover(function () {
      $(this).find(".load").toggle(600);
  });

});