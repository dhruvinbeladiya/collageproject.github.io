const open_icon = document.querySelector(".mobile_icon");
const close_icon = document.querySelector(".close_icon");
const mobile_nav = document.querySelector(".mobile_nav");

const addActive = () => {
    open_icon.classList.add("mobile_bars");
    mobile_nav.classList.add("active");
}

const removeActive = () => {
    mobile_nav.classList.remove("active");
    open_icon.classList.remove("mobile_bars");
}

open_icon.addEventListener("click",addActive);
close_icon.addEventListener("click", removeActive);

// Countdown Timer

let dayItem = document.getElementById('days');
let hrsItem = document.getElementById('hrs');
let minsItem = document.getElementById('mins');
let secsItem = document.getElementById('secs');

const CountDown = () => {
    let CurrentDate = new Date();
    let FutureDate = new Date("30 March 2024");
    let myDate = FutureDate - CurrentDate;
    
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hrs = Math.floor(myDate / 1000 / 60 / 60) %24;
    let mins = Math.floor(myDate / 1000 / 60 ) % 60;
    let secs = Math.floor(myDate / 1000 ) % 60;

    dayItem.innerHTML = days;
    hrsItem.innerHTML = hrs;
    minsItem.innerHTML = mins;
    secsItem.innerHTML = secs;
}

CountDown()

setInterval(CountDown,1000)