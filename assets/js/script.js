//Display today's day and date
var todayDate = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    $("saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    function hourTracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        if (blockHour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}

$("hour-9 .description").val(localStorage.getItem("hour-9"));
$("hour-10 .description").val(localStorage.getItem("hour-9"));
$("hour-11 .description").val(localStorage.getItem("hour-9"));
$("hour-12 .description").val(localStorage.getItem("hour-9"));
$("hour-13 .description").val(localStorage.getItem("hour-9"));
$("hour-14 .description").val(localStorage.getItem("hour-9"));
$("hour-15 .description").val(localStorage.getItem("hour-9"));
$("hour-16 .description").val(localStorage.getItem("hour-9"));
$("hour-17 .description").val(localStorage.getItem("hour-9"));

hourTracker();

})




