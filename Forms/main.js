const form = document.forms['search'];
const input = form['searchInput']; 
const button = form['submit'];//const [input,button] = form.elements;
//form.action='index.php';
input.value= 'Search Here';
/*input.addEventListener('focus', () => {
    alert('focused'),false;
});*/
input.addEventListener('focus', function (){
    if (input.value==="Search Here"){
        input.value = " ";
    };
},false);

input.addEventListener('blur', function(){
    if (input.value===" "){
        input.value = "Search Here";
    }
},false);
input.addEventListener('change', () => {
    alert('changed'),false;
});
//event listeners here above
form.addEventListener('submit',search,false);
function search(event){
    alert(`You searched ${input.value}`);
    event.preventDefault();
};



