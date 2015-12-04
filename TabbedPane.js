$(document).ready(function() {
  var button = $(".btn").click(function() {
    $(".btn").css({"background-color": "#ecf0f1",
                   "border-bottom": "1px solid transparent",
                   "border-color": "#bdc3c7",
                   "color": "#000"}),
        $(this).css({"background-color": "white", "border-bottom": "2px solid blue","color": "blue"});
    });
});
$(document).ready(function(){
  $("#icon").click(function(){
     $(".navigation").toggle("slide");
  });
});
