let player = document.querySelector(".player")
let video = player.querySelector('.player .player__video');
let toggle = player.querySelector('.toggle');
let range_button = player.querySelectorAll('.player__slider');
let skip_buttons = player.querySelectorAll('[data-skip]');
let progress_filled = player.querySelector('.progress__filled');
let progress = player.querySelector('.progress');

let duration;
let click;


video.addEventListener('click', play);
toggle.addEventListener('click', play);
video.addEventListener('pause', toggle_click);
video.addEventListener('play', toggle_click);

range_button.forEach(button => button.addEventListener('change', range));
range_button.forEach(button => button.addEventListener('mousemove', range));

skip_buttons.forEach(button => button.addEventListener('click', skip));

video.addEventListener('timeupdate', timpUpdate);
progress.addEventListener('click', step);
progress.addEventListener('mousemove', (e) => click && step(e));

progress.addEventListener('mousedown', () => click = true);
progress.addEventListener('mouseup', () => click = false);




function play() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function toggle_click() {
    if (this.paused) toggle.innerHTML = '►';
    else toggle.textContent = '❚ ❚';
}

function range() {
    video[this.name] = this.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function timpUpdate() {
    duration = (video.currentTime / video.duration) * 100;
    progress_filled.style.flexBasis = `${duration}%`
}

function step(e) {
    let t = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = t;
}