const clickMe = document.querySelector('#click');
clickMe.addEventListener('click', () => {
    console.log('I have been clicked');
});
clickMe.addEventListener('mousedown', () => {
    console.log('Mouse down');
});
clickMe.addEventListener('mouseup', () => {
    console.log('Mouse up');
});

const dbClickParagraph = document.querySelector('#dbclick');
dbClickParagraph.addEventListener('dblClick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouses');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => {
    console.log('You have moved');
});

/* addEventListener('keydown', () => {
    console.log('I have been pressed');
});

addEventListener('keyup', () => {
    console.log(`My key was released at ${new Date}`);
});

addEventListener('keypress', (event) => {
    console.log(`They key pressed was ${event.key} character`);
});

addEventListener('keydown', (event) => {
    console.log(`The modifier character pressed was ${event.key}`);
});//checks for modifier keys pressing and other keys pressing */

addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey){
        console.log('Action Cancelled');
    }
});

addEventListener('click', (event) => {
    if (event.ctrlKey){
        console.log('A shifty click!!');
    }
});

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event){
    console.log('Enjoy while it lasts');
    onceParagraph.style.backgroundColor = 'red';
    removeEventListener('click', remove);
}

const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click', broken);
function broken(event){
    event.preventDefault();
    console.log('Broken Link');
}



