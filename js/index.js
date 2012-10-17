$(document).ready(function(){
  centerContainer();

  $(window).resize(centerContainer);
});

function centerContainer(){
  var height = $(window).height(); //finds the height of the window
  console.log("height ", height);
  $(".container.content").css("margin-top", ((height / 2) - 200) + "px"); //centers the container verticaly
  $(".page-two").css("top", ((height))+"px");
}
