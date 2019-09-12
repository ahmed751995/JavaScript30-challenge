const background = document.querySelector('.dropdownBackground');
const items = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top');

function itemEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') &&
        this.classList.add('trigger-enter-active'), 150);

    let dropdown = this.querySelector('.dropdown');
    // console.log(this.getBoundingClientRect());
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = nav.getBoundingClientRect();

    let coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        left: dropdownCoords.left - navCoords.left,
        top: dropdownCoords.top - navCoords.top
    }
    background.classList.add('open');
    background.style.height = `${coords.height}px`;
    background.style.width = `${coords.width}px`;
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

function itemOut() {
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
    background.classList.remove('open')
}

items.forEach(item => item.addEventListener('mouseenter', itemEnter));
items.forEach(item => item.addEventListener('mouseleave', itemOut));