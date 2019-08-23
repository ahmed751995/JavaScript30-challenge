let inputs = document.querySelectorAll('.control input');

inputs.forEach(input => input.addEventListener('change', control));

inputs.forEach(input => input.addEventListener('mousemove', control))

function control() {
   let suffix = this.dataset.sizing || '';

   document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}