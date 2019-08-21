let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    let now = new Date();
    let second = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();
    let secondToDeg = ((360/60)*second) + 90; 
    let minToDeg = ((360/60)*min) + 90;
    let hourToDeg = ((360/12)*hour) + 90;

    secondHand.style.transform = `rotate(${secondToDeg}deg)`;
    minHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

setInterval(setDate, 1000);