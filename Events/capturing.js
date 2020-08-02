ulElement = document.getElementById('lists');
liElement = document.querySelector('#lists li');

ulElement.addEventListener('click', (event) => {
    console.log('You clicked on <ul> element')
},true);

liElement.addEventListener('click', (event) => {
    console.log('You clicked on <li> element')
}, true);