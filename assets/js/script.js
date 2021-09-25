//Display today's day and date
$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

//save button click listener
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        
        //data stored in local storage
        localStorage.setItem(time, text);
    });

    

    function hourTracker() {
        let currentHour = moment().hour();

    $(".time-block").each(function () {
        let blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentHour) {

            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
//load saved local storage data
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

hourTracker();

})




