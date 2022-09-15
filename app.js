/* Imports */

/* Get DOM Elements */
const displayArticle = document.getElementById('display-article');
const cityName = document.getElementById('city-name');
const climateSelect = document.getElementById('climate-select');
const colorSelect = document.getElementById('color-select');
const architectureSelect = document.getElementById('architecture-select');
const nameDisplay = document.getElementById('name-display');
const climateDisplay = document.getElementById('climate-display');
const architectureDisplay = document.getElementById('architecture-display');
// const attractionsDisplay = document.getElementById('attractions-display');
// addAttractionButton = document.getElementById('add-attraction-button');

/* State */
let city = {
    name: '',
    climate: '',
    color: '',
    architecture: '',
    //     attractions: [],
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

colorSelect.addEventListener('change', () => {
    city.color = colorSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

/* Display Functions */
function displayCity() {
    nameDisplay.textContent = city.name;
    climateDisplay.src = 'images/climate/' + city.climate + '.png';
    displayArticle.classList = city.color;
    architectureDisplay.src = 'images/architecture/' + city.architecture + '.png';
}

// (don't forget to call any display functions you want to run on page load!)
