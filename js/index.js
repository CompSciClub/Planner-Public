$(document).ready(function(){
  centerContainer();

  $(window).resize(centerContainer);

  $("#learnmore").click(function(){
    $("html,body").animate({
      scrollTop: ($(window).height() - 41) // scroll to the container. Make sure to subtract height of header
    }, 600);
  });
});

function centerContainer(){
  var height = $(window).height(); //finds the height of the window
  console.log("height ", height);
  $(".container.content").css("margin-top", ((height / 2) - 200) + "px"); //centers the container verticaly
  $(".page-two").css("top", ((height))+"px");
}
