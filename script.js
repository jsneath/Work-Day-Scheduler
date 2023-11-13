
dayjs.extend(dayjs_plugin_advancedFormat);

// Format today's date
var todaysDate = dayjs().format("dddd, MMMM Do");


$("#currentDay").text(todaysDate);


// work out current time

var now = dayjs()
var currentHour = now.hour()


function loadSavedData() {
    document.querySelectorAll('.row.time-block').forEach(function(timeBlock) {
        var id = timeBlock.id; 
        var savedData = localStorage.getItem(id);
        if (savedData !== null) {
            var textarea = timeBlock.querySelector('.description');
            textarea.value = savedData;
        }
    });
}

// Call the function to load saved data
loadSavedData();

// if time on schedule is > current time, make green

// if time on schedule is < current time, malre grey
// if time on shedule is = current time, make red
document.querySelectorAll('.row.time-block').forEach(function(timeBlock) {
    
    var timeString = timeBlock.querySelector('.hour').textContent;
    console.log("this is timestring" + timeString)
    var blockHour = parseInt(timeString.split(':')[0], 10);
    console.log("this is blockHour" + blockHour)

 
    if (blockHour < currentHour) {
        timeBlock.classList.add('past');
    } else if (blockHour === currentHour) {
        timeBlock.classList.add('present');
    } else {
        timeBlock.classList.add('future');
    }

 
});


document.querySelectorAll('.saveBtn').forEach(function(saveButton) {
    saveButton.addEventListener('click', function() {
        
        var timeBlock = saveButton.parentElement;
        var id = timeBlock.id; 

        var textarea = timeBlock.querySelector('.description');

        localStorage.setItem(id, textarea.value);
        // show saved somewhere
    });
});