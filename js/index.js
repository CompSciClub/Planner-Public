$(document).ready(function(){
  var height = $(window).height(); //finds the height of the window
  $(".container.content").css("margin-top", ((height / 2) - 200) + "px"); //centers the container verticaly
  $(".page-two").css("top", ((height/2)+350)+"px");
  $("#learnmore").click(function() {
    window.scroll(0,-height);
    window.scroll(0,height);
  });
  $(window).resize(function(){
    var height = $(window).height(); //finds the height of the window
    $(".container.content").css("margin-top", ((height / 2) - 200) + "px"); //centers the container verticaly
    $(".page-two").css("top", ((height/2)+350)+"px");
    $("#learnmore").click(function() {
      window.scroll(0,-height);
      window.scroll(0,height);
    });
  });
});
