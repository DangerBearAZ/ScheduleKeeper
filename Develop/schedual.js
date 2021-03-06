//things that are going to get update 
//document read W3 schools this - make sure dom is ready? 


$( document ).ready(function() {

var currentDay = document.getElementById("#currentDay")

function updateTime() {
    var today = moment();
    var humanReadable = today.format('MMMM Do YYYY, h:mm:ss a');
    currentDay.textContent = humanReadable;
    $var(currentDay).append(humanReadable);
};
setInterval(updateTime, 1000);

updateTime();

//$var("#currentDay").append(currentDate);



});