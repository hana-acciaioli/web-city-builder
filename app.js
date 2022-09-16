/* Imports */

/* Get DOM Elements */
const displayArticle = document.getElementById('display-article');
const cityName = document.getElementById('city-name');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const nameDisplay = document.getElementById('name-display');
const climateDisplay = document.getElementById('climate-display');
const architectureDisplay = document.getElementById('architecture-display');
const addAttractionButton = document.getElementById('add-attraction-button');
const attractionInput = document.getElementById('attraction-input');
const attractionList = document.getElementById('attraction-list');

/* State */
let city = {
    name: '...',
    climate: 'desert',
    architecture: 'adobe',
    attractions: [],
};

/* Events */
cityName.addEventListener('input', () => {
    city.name = cityName.value;
    // redisplay
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

addAttractionButton.addEventListener('click', () => {
    const attraction = attractionInput.value;
    city.attractions.push(attraction);
    addAttraction();
    attractionInput.value = '';
});

/* Display Functions */
function displayCity() {
    nameDisplay.textContent = city.name;
    climateDisplay.src = 'images/climate/' + city.climate + '.png';
    displayArticle.classList = city.climate;
    displayArticle.classList.add(city.architecture);
    architectureDisplay.src = 'images/architecture/' + city.architecture + '.png';
}

function addAttraction() {
    attractionList.innerHTML = '';

    for (let attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayCity();
addAttraction();
