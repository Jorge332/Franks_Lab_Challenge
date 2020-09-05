
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const title = document.querySelector('#title');

let numberOfParticles = 300;
let particleArray = [];

function init() {

    let titleData = title.getBoundingClientRect();

    let collider = {
        x : titleData.left,
        y : titleData.top,
        width : titleData.width,
        height : titleData.height,
    }

    for (let i = 0; i < numberOfParticles; i++) {
        particleArray.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, ctx, collider))
    }
}

init();

function animate() {
    fadeOutTrails();
    particleArray.forEach(e => {
        e.update();
        e.draw();
    });
    requestAnimationFrame(animate)
}

function fadeOutTrails(params) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

animate();


