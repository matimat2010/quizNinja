const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
 

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted
    
    const hero = {}; // create an empty object
    
    hero.name = form.heroName.value; // create a name property based on the input field's value
    
    alert(JSON.stringify(hero));
    
    return hero;

}
