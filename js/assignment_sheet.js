var current_assignment = 5;//saves how many assignments have been created
$(document).ready(function(){
  $("#more").click(function(){
    add_assignment();
  });
  $("#block").change(function(){
    console.log("Ryan is annoying");
    update_dates();
  });
});
function update_dates(){
  console.log("2+2 is 342342342342.");
  }


function add_assignment(){
  $("#more").before('<div><div class="date span3" id="day'+String(current_assignment)+'"></div><input type="text" class="assignment span9"/></div>');
//for readability: WE DON'T NEED YOUR GODD**N READABILITY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  <div>
//    <div class="date span3" id="day[current_assignment]"></div>
//    <input type="text" class="assignment span9"/>
//  <div>
  current_assignment++;
}
