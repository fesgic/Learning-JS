const btn = document.getElementById('rainbow')
const rainbow = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'cyan',
    'black'
];

function change() {
    document.body.style.background = rainbow[Math.floor(9*Math.random())];
}
btn.addEventListener('click', change);