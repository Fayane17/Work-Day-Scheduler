var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});

function scheduleTime() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var content = localStorage.getItem(currentHour);
        
        if(content !== null) {
            $(this).siblings(".plan").val(content);
        }
    });
}

scheduleTime();