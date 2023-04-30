const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city.trim() === '') {
    alert('Please enter a city name');
    return;
  }
  
  fetch('/data/data.json')
    .then(response => response.json())
    .then(json => {
      if (json[city]) {
        alert(`${city} is ${json[city]}`);
      } else {
        alert(`${city} is not in our database`);
      }
    })
    .catch(error => {
      console.error(error);
      alert('Failed to load safety scores');
    });

  fetch('/yelp_scraper?arg1=Riverside&arg2=CA&arg3=1510&arg4=University%20Ave', {
    mode: 'no-cors'
  })
  .then(function (response) {
      console.log(response);
      return response.json();
  }).then(function (text) {
      alert("here");
      console.log('GET response:');
      console.log(text.result); 
  });

});

function getData() {
    fetch("/data/data.json")
    .then((response) => response.json())
    .then((json) => console.log(json))
}