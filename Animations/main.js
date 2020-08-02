'use strict';
const squareElement = document.getElementById('square');
let angle = 0;
/*setInterval( () => {
    angle = (angle +2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`;
}, 1000/60);*/
const start = document.getElementById('start');
start.addEventListener('click', rotate, false);
function rotate(){
    angle = (angle+2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`;
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);

const stop = document.getElementById('stop');
stop.addEventListener('click', halt, false);
function halt(){
    window.cancelAnimationframe(id);
}