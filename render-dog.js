export function renderDog(dog) {
    const li = document.createElement('li');
    li.classList.add('dog-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = dog.name;

    const pEl = document.createElement('p');
    pEl.textContent = dog.color + ' ' + dog.breed;

    li.append(headerEl, pEl);

    return li;
}
