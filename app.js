// import functions and grab DOM elements
import { dogs } from './dogs-data.js';
import { renderDog } from './render-dog.js';

const dogList = document.getElementById('dog-list');

function displayDogs() {
    dogList.innerHTML = '';

    for (let dog of dogs) {
        const dogEl = renderDog(dog);
        dogList.append(dogEl);
    }
}

displayDogs();

// initialize global state '

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
