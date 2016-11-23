//Her lager vi den ekstra effekt på bildene inne på Bestillingsiden. Slik
//at bilde blir klar når vi tar musepekeren over.
$(document).ready(function(){
  $(".midtstilt").bind("mouseover", function() {
    $(this).css("opacity", "1");
  });
  $(".midtstilt").bind("mouseout", function() {
    $(".midtstilt").css("opacity", "0.7");
  });
});
