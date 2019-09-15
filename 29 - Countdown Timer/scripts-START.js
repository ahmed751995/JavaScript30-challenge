let countInterval;
let display = document.querySelector('.display__time-left');
let buttons = document.querySelectorAll('.timer__button');
let EndTime = document.querySelector('.display__end-time');

function timer(seconds) {
    let now = Date.now();
    let then = now + seconds * 1000;

    clearInterval(countInterval);
    displayEndTime(then);
    displayTime(seconds);
    countInterval = setInterval(() => {
        let countdown = Math.round((then - Date.now()) / 1000);
        if (countdown < 0) {
            clearInterval(countInterval);
            return;
        }
        displayTime(countdown);
    }, 1000);
}

function displayTime(time) {
    let min = Math.floor(time / 60);
    let secs = time % 60;
    let date = `${min}:${secs < 10? '0': ''}${secs}`;
    display.textContent = date;
    document.title = date;
}

function startTimer() {
    let time = parseInt(this.dataset.time)
    timer(time);
}

function displayEndTime(timeStamp) {
    let time = new Date(timeStamp);
    let hours = time.getHours();
    let mins = time.getMinutes();
    let display = `Time ends at ${hours > 12? hours-12 : ''}:${mins}`;
    EndTime.textContent = display;
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let mins = parseInt(this.minutes.value);
    timer(mins * 60);
    this.reset();
})