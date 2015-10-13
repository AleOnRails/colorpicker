/* Exercise 2: Color picker */
var colors = [ "22ac5e", "d68236", "99ca2d", "ff6961", "CB99C9"];

function setPreviewColor(color) {
  $(".preview").css("background-color", color);
  $(".color-code").text($(".preview").css("background-color"));
}

function addBox(color) {
    $("#colors").prepend("<div class='item' style='background-color: " + color +";'></div>");
}

$(document).ready(function() {
  random_position = Math.floor( Math.random() * colors.length );
  setPreviewColor(colors[random_position]);

  $.each(colors, function(index, element) {
    addBox(element);
  });

  $(document).on("keydown keyup keypress", "#color", function() {
    setPreviewColor($(this).val());
  });

  $(document).on("click", "#add-to-favorite", function() {
    if ( $("#colors .item").length >=5 )
      $("#colors .item").last().remove();
    addBox($("#color").val());
    $("#color").val("").focus();
  });

  $(document).on('mouseenter', '.item', function() {
    setPreviewColor($(this).css('background-color'));
  });
});

