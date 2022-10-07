const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

let newYearDate = new Date("January 1, 2023 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    let currentTime = new Date().getTime();
    let gap = newYearDate - currentTime;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap/day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    dayEl.textContent = d;
    hourEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;
    setTimeout(updateCountdown, 1000);
}