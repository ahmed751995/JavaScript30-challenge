window.addEventListener('keydown', playSoundKey);

function playSoundKey(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    if (window.innerWidth > 800) {
        key.classList.add("play");
    }
}


//buttons

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener("click", playSoundButton));

function playSoundButton(e) {
    e.preventDefault();
    let button = e.target;

    let audio = document.querySelector(`audio[data-key="${button.getAttribute('data-key')}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

let keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('play');
}
