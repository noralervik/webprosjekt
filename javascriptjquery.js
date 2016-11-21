$(document).ready(function(){
  $(".midtstilt").bind("mouseover", function() {
    $(this).css("opacity", "1");
  });
  $(".midtstilt").bind("mouseout", function() {
    $(".midtstilt").css("opacity", "0.7");
  });
});
