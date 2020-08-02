ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => {
    console.log('clicked on <ul> element');
});

liElement.addEventListener('click', (event) => {
    console.log('Clicked on <li> element');
});