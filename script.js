//function for save button to save, set, and get
$(function () {
    // listener for click events on the save button.
    var savebtn = $(".time-block");

    savebtn.on("click", "button", function() {
        console.log("clicked!")
            var value = $(this).siblings(".description").val();//DOM traversal
            var time = $(this).parent().attr("id");//DOM traversal
            
            console.log(value);
            console.log(time);
            
            // save in localStorage
            localStorage.setItem(time, value);
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function updateTime() {
      //current hour
      var currentHour = dayjs().hour();

      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
      })
    }
    updateTime();


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  


    //code to display the current date in the header of the page.
    var currentDate = dayjs();
      $("#currentDay").text(currentDate.format("MMM D, YYYY"));

  });

  //getItem for every hour, to render todo to page
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));