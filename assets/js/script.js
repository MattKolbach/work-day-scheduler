const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
//let currentDayEl = document.querySelector("#currentDay");
//currentDayEl.textContent = currentDate;
let currentDayEl = $("#currentDay");
currentDayEl.text(currentDate);



function buttonClickHandler() {
  let enteredTask = $(this).parent().siblings(".col-10").val(); //finds our text area and grab the value
  let enteredTaskId = $(this).parent().siblings(".col-10").attr("id"); //finds our text area an grabs the id value
  localStorage.setItem(enteredTaskId, enteredTask); //sets value from previous 2 lines
}

$("button").on("click", buttonClickHandler);

//on page load
$("textarea").each(function() {
    $(this).addClass("past")
})


let hour9 = localStorage.getItem("hour9");
$("#hour9").val(hour9);

let hour10 = localStorage.getItem("hour10");
$("#hour10").val(hour10);

let hour11 = localStorage.getItem("hour11");
$("#hour11").val(hour11);

let hour12 = localStorage.getItem("hour12");
$("#hour12").val(hour12);

let hour13 = localStorage.getItem("hour13");
$("#hour13").val(hour13);

let hour14 = localStorage.getItem("hour14");
$("#hour14").val(hour14);

let hour15 = localStorage.getItem("hour15");
$("#hour15").val(hour15);

let hour16 = localStorage.getItem("hour16");
$("#hour16").val(hour16);

let hour17 = localStorage.getItem("hour17");
$("#hour17").val(hour17);




//on button click, grab textarea info, save to local storage

//on site open, current day is displayed at top of page---DONE
// standard buisness hour time blocks
//time blocks are color coded: past (gray), present (red), future (green)
// time blocks are clickable, FORM
//save button on right side to save changes
//save to local storage
//items persist during page refresh
//do items wipe at start of new day?
