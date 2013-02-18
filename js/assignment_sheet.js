var current_assignment = 5;//saves how many assignments have been created
$(document).ready(function(){
  $("#more").click(function(){
    add_assignment();
  });
});

function add_assignment(){
  $("#more").before('<div><div class="date span3" id="day'+String(current_assignment)+'"></div><input type="text" class="assignment span9"/></div>');
//for readability:
//  <div>
//    <div class="date span3" id="day[current_assignment]"></div>
//    <input type="text" class="assignment span9"/>
//  <div>
  current_assignment++;
}
