const form = document.forms['hero'];
form.origin.value= "Born on planet Krypton, Karl - El..."
/*form.addEventListener('submit', validate, false);
function validate(event){
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase = 'X'){
        alert('Names are not allowed to start with X');
    }*/
//Alternatively, yyou can validate using the following code below:


/*///////////////form.addEventListener('keyup', validateInline, false);
const label = form.querySelector('label');
const error = document.createElement('div');
label.classList.add('error');
error.textContent = '!Your name is not supposed to start with an X';
label.append(error);
function validateInline(){
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')){
        error.style.display = 'block';
        }
        else{
            error.style.display = 'none';

        }
    }
*/
form.heroName.addEventListener('keyup', disableSubmit, false);
form.realName.addEventListener('keyup', disableSubmit, false);
form.origin.addEventListener('keyup', disableSubmit, false);
function disableSubmit(event){
    if (event.target.value === ""){
        document.getElementById('submit').disabled = true;
    }
    else{
        document.getElementById('submit').disabled = false;
    }
}

form.addEventListener('submit', makeHero, false);
function makeHero(event){
    event.preventDefault(); //prevent form from being submitted
    const hero = {}; //create an empty object
    hero.name = form.heroName.value; //creates a name property based on input field's value
    hero.realName = form.realName.value; //create a realName property based on input field's value
    /*hero.powers = [];
    for (let i=0; i<form.powers.length; i++){
        if (form.powers[i].checked){
            hero.powers.push(form.powers[i].value);
        }
    }   */
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);//alternative to hero.powers code above
    hero.category = form.category.value; //creates a categorty property based on input field's value
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero)); //convert object to JSON string and display in alert dialog
    return hero;
}
