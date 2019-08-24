let panel = document.querySelectorAll('.panel');

function toggleImg() {
    this.classList.toggle('click');
}

function toggleWord(e) {
    // console.log(e.propertyName);
    if(e.propertyName.includes("flex")){
    this.classList.toggle('word');
    }
}

panel.forEach( pic => pic.addEventListener('click', toggleImg));

panel.forEach( pic => pic.addEventListener('transitionend', toggleWord));

