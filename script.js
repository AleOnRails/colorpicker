/* Exercise 2: Color picker */
var colors = [ "22ac5e", "d68236", "99ca2d"];

function setPreviewColor(color) {
  $(".preview").css("background-color", color);
  $(".color-code").text($(".preview").css("background-color"));
}

function addBox(color) {
    $("#colors").prepend("<div class='item' style='background-color: " + color +";'></div>");
}

$(document).ready(function() {
  setPreviewColor("red");
  $.each(colors, function(index, element) {
    addBox(element);
  });
  $(document).on("keydown keyup keypress", "#color", function() {
    setPreviewColor($(this).val());
  });

  $(document).on("click", "#add-to-favorite", function() {
    addBox($("#color").val());
  });
});

