$(document).ready(function () {
  $("#click-block").click(function () {
    $(this).toggleClass("green-block");
  });

  $("#dblclick-block").dblclick(function () {
    $(this).toggleClass("green-block");
  });

  $("#mouseenter-block").mouseenter(function () {
    $(this).toggleClass("green-block");
  });

  $("#mouseleave-block").mouseleave(function () {
    $(this).toggleClass("green-block");
  });

  $("#mousedown-block").mousedown(function () {
    $(this).toggleClass("green-block");
  });

  $("#mouseup-block").mouseup(function () {
    $(this).toggleClass("green-block");
  });

  $("#hover-block").hover(function () {
    $(this).toggleClass("green-block");
  });

  $("#focus-text").focus(function () {
    $("#focus-block").toggleClass("green-block");
  });

  $("#blur-text").blur(function () {
    $("#blur-block").toggleClass("green-block");
  });

  $("#on-text").on({
    focus: function () {
      $("#on-block").toggleClass("green-block");
    },
    blur: function () {
      $("#on-block").toggleClass("green-block");
    },
  });
});
