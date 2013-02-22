var current_assignment = 3;//saves how many assignments have been created

var lastDate;
$(document).ready(function(){
  writeDates();
  $(window).scroll(move_options);
  $("#more").click(add_assignment);
  $("#Block").change(writeDates);
  $("#datepicker").datepicker(); 
});

function move_options(){
  var scrollTop = $(window).scrollTop();
  $("#options").css('padding-top',String(scrollTop)+"px");
}

function add_assignment(){
  // get the date for this assignment
  lastDate = findNextDate($("#Block").val());
  var dateString = (lastDate.getMonth() + 1) + "/" + (lastDate.getDate()) + "/" + String(lastDate.getFullYear()).slice(-2);
  $("#more").before('<div class = "accordion-group" id = "accgroup'+String(current_assignment)+'"><div class = "accordion-heading"><a class = "date span3" id = "day0'+String(current_assignment)+'"">'+dateString+'</a><input id = "evname'+String(current_assignment)+'" type = "text" class = "assignment span9" placeholder = "Event Name." class = "accordion-toggle" data-toggle = "collapse" data-parent = "#accordion1" href = "#descrip'+String(current_assignment)+'"></input></div> <div id = "descrip'+String(current_assignment)+'" class = "accordion-body collapse"><div class = "accordion-inner"><textarea placeholder = "Event Description."></textarea></div></div>');


/*for readability:
<div class = "accordion-group" id = "accgroup0">
  <div class = "accordion-heading">
    <a class = "date span3" id = "day0"></a>
    <input id = "evname0" type = "text" class = "assignment span9" placeholder = "Event Name." class = "accordion-toggle" data-toggle = "collapse" data-parent = "#accordion1" href = "#descrip0"></input>
  </div> 
  <div id = "descrip0" class = "accordion-body collapse">
    <div class = "accordion-inner">
      <textarea placeholder = "Event Description."></textarea>
    </div>
  </div>
*/
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
