const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const submitBtn = document.querySelector('#submit-btn');

function capitalize(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let city = cityInput.value.trim().toLowerCase();
  if (city === '') {
    alert('Please enter a city name');
    return;
  }
  city = capitalize(city);
  
  fetch('/data/data.json')
    .then(response => response.json())
    .then(json => {
      if (json.hasOwnProperty(city)) {
        alert(`${city} is ${json[city]}`);
      } else {
        alert(`${city} is not in our database`);
      }
    })
    .catch(error => {
      console.error(error);
      alert('Failed to load safety scores');
    });
});
