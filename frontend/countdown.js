const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("April 9 2025 16:00:00").getTime();

function timer () {
    const currentTime = new Date().getTime();
    const distance = targetDate - currentTime;
    
    const days = Math.floor(distance / 1000 / 60 / 60 /24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance/ 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;



}

timer();
setInterval(timer, 1000);