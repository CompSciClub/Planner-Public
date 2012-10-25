var centerContainer;
$(document).ready(function(){
  centerContainer();

  $(window).resize(centerContainer);

  $("#learnmore").click(function(){
    $("html,body").animate({
      scrollTop: ($(window).height() - 41) // scroll to the container. Make sure to subtract height of header
    }, 600);
  });
});

centerContainer = function(){
  var height = $(window).height(); //finds the height of the window
  var containerHeight = $("#firstContent").height();
  console.log("height ", height);
  $(".container.content").css("margin-top", ((height / 2) - containerHeight / 2) + "px"); //centers the container verticaly
  $(".page-two").css("top", ((height))+"px");

  var pHeight = $(".white").height();
  $(".white").css("margin-top", (containerHeight / 2) - pHeight / 2 + "px");
}
