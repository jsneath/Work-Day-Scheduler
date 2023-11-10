
dayjs.extend(dayjs_plugin_advancedFormat);

// Format today's date
var todaysDate = dayjs().format("dddd, MMMM Do");


$("#currentDay").text(todaysDate);