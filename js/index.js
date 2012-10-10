$(document).ready(function(){
  var height = $(window).height(); //finds the height of the window
  $(".container-fluid").css("margin-top", ((height / 2) - 200) + "px"); //centers the container verticaly
  $(".page-two").css("margin-top", ((height/2)-150)+"px")
});