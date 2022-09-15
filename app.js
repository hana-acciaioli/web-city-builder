/* Imports */

/* Get DOM Elements */
// const displayArticle = document.getElementById('display-article');
const cityName = document.getElementById('city-name');
// const climateSelect = document.getElementById('climate-select');
// const colorSelect = document.getElementById('color-select');
// const architectureSelect = document.getElementById('architecture-select');
const nameDisplay = document.getElementById('name-display');
// const climateDisplay = document.getElementById('climate-display');
// const architectureDisplay = document.getElementById('architecture-display');
// const attractionsDisplay = document.getElementById('attractions-display');
// addAttractionButton = document.getElementById('add-attraction-button');

/* State */
let city = {
    name: '',
    //     climate: '',
    //     color: '',
    //     architecture: '',
    //     attractions: [],
};

/* Events */
cityName.addEventListener('input', () => {
    city.name = cityName.value;
    // redisplay
    displayCity();
});

/* Display Functions */
function displayCity() {
    nameDisplay.textContent = city.name;
}

// (don't forget to call any display functions you want to run on page load!)
