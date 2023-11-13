
dayjs.extend(dayjs_plugin_advancedFormat);

// Format today's date
var todaysDate = dayjs().format("dddd, MMMM Do");


$("#currentDay").text(todaysDate);


// work out current time

var now = dayjs()
var currentHour = now.hour()

// if time on schedule is > current time, make green

// if time on schedule is < current time, malre grey
// if time on shedule is = current time, make red
document.querySelectorAll('.row.time-block').forEach(function(timeBlock) {
    // Extract the time from the .hour div
    var timeString = timeBlock.querySelector('.hour').textContent;
    console.log("this is timestring" + timeString)
    var blockHour = parseInt(timeString.split(':')[0], 10);
    console.log("this is blockHour" + blockHour)

    // Compare and apply classes
    if (blockHour < currentHour) {
        timeBlock.classList.add('past');
    } else if (blockHour === currentHour) {
        timeBlock.classList.add('present');
    } else {
        timeBlock.classList.add('future');
    }
});

