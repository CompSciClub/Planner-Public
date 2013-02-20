var current_assignment = 5;//saves how many assignments have been created

var lastDate;
$(document).ready(function(){
  writeDates();
  $("#more").click(function(){
    add_assignment();
  });
  $("#Block").change(writeDates);
});
function update_dates(){
  console.log("2+2 is 342342342342.");
  }


function add_assignment(){
  // get the date for this assignment
  lastDate = findNextDate($("#Block").val());
  var dateString = (lastDate.getMonth() + 1) + "/" + (lastDate.getDate()) + "/" + String(lastDate.getFullYear()).slice(-2);
  $("#more").before('<div><div class="date span3" id="day'+String(current_assignment)+'">' + dateString + '</div><input type="text" class="assignment span9"/></div>');
//for readability:
//  <div>
//    <div class="date span3" id="day[current_assignment]"></div>
//    <input type="text" class="assignment span9"/>
//  <div>
  current_assignment++;
}

// writes the dates for the existing date block
function writeDates(){
  lastDate = new Date(new Date() - 86400000); // reset lastDate to yesterday (so we can start with today) 

  var dates = $(".date");
  for (var i = 0; i < dates.length; i++){
    lastDate = findNextDate($("#Block").val());
    var dateString = (lastDate.getMonth() + 1) + "/" + (lastDate.getDate()) + "/" + String(lastDate.getFullYear()).slice(-2);
    $(dates[i]).text(dateString);
  }
}

// returns the next date that the given block has a class
function findNextDate(block){
  checkDate = new Date(lastDate.getTime() + 86400000);
  while (!scheduleUtils.checkThisDate(block, checkDate)){
    checkDate = new Date(checkDate.getTime() + 86400000) // check one day in the future
  }

  return checkDate;
}
