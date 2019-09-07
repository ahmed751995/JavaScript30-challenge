const video = document.querySelector('video'); //.player
const canvas = document.querySelector('canvas'); //.photo
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
let effect = 'normal-effect';

function playVideo() {
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then( stream => {
        video.srcObject = stream;
        video.play();
    });
}

function drawToCanvas() {
    let height = video.videoHeight;
    let width = video.videoWidth;
    canvas.height = height;
    canvas.width = width;

    return setInterval(() => {
        ctx.drawImage(video, 0,0,width, height);
        if(effect == 'normal-effect') {
            
        }
        else{
            let pixels = ctx.getImageData(0,0, width, height);
        
            if(effect == 'alpha-effect') {
                pixels = alphaEffect(pixels);
            }
         else if(effect == 'red-effect') {
                pixels = redEffect(pixels);
            }
            ctx.putImageData(pixels, 0,0);
        }
    },16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();
    let link = canvas.toDataURL('image/jpeg');
    let a = document.createElement('a');
    a.setAttribute("href", link);
    a.innerHTML = `<img src=${link} placeholder="handsome man">`;
    strip.insertBefore(a, strip.firstChild);
}

playVideo();

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i+= 4) {
        pixels.data[i] = pixels.data[i] + 100;
    }
    return pixels;
}

function alphaEffect(pixels) {
    let inputs = {};
    document.querySelectorAll('.rgb input').forEach(input => {
       inputs[input.name] = input.value;
    });
    let red, green, blue;

    for(let i = 0; i < pixels.data.length; i+=4) {
        red = pixels.data[i];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];

        if (red >= inputs.rmin
            && green >= inputs.gmin
            && blue >= inputs.bmin
            && red <= inputs.rmax
            && green <= inputs.gmax
            && blue <= inputs.bmax) {
                pixels.data[i + 3] = 0;
            }
    }
    return pixels;
}

alphaEffect({data:[1,2,3,4]});

video.addEventListener('canplay', drawToCanvas);

document.querySelectorAll('input[type="radio"]')
.forEach(radio => {
    radio.addEventListener('change', () => effect = radio.value);
});
