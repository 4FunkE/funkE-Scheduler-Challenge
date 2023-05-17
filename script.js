// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    var savebtn = $(".time-block");
    var todos = [];
    var hour9 = $("#hour-9");
    var hour10 = $("#hour-10");
    
    var allToDos = {
      hour9: hour9.value,
      hour10: hour10.value,
    }

    var currentDate = dayjs();
    $("#currentDay").text(currentDate.format("MMM D, YYYY"));

    savebtn.on("click", "button", function() {
        console.log("clicked!")
            var value = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
            
            console.log(value);
            console.log(time);
            
            // save in localStorage
            localStorage.setItem(time, value);
            renderToDoItem();
    });

    //need to save on reload!!!
    function renderToDoItem() {
        // Get stored todos from localStorage
        var lastUserInput = localStorage.getItem("hour-9");
        console.log(lastUserInput)
      
        // If todos were retrieved from localStorage, update the todos array to it
        if (lastUserInput !== null) {
            todos = lastUserInput;
          }
      };
    



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });