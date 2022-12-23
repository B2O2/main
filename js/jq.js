//마우스 커서
var pointSize = $(".circle").width() / 2;
$("body").mousemove(function (e) {
  $(".circle").css("top", e.clientY - pointSize);
  $(".circle").css("left", e.clientX - pointSize);
});
