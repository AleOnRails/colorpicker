/* Exercise 2: Color picker */

function setPreviewColor(color) {
  $(".preview").css("background-color", color);
}

$("document").ready(function() {
  setPreviewColor("red");
});
