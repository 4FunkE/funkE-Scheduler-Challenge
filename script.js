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

    //Add code to apply the past, present, or future
    function updateTime() {
      //current hour
      var currentHour = dayjs().hour();
      console.log(currentHour);
      //collect for each id
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

      //if else moving current time with blocks
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
    }
    //call function
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
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  //test code
  $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  $('#hour-23 .description').val(localStorage.getItem('hour-23'));