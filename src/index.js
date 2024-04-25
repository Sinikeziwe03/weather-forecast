function refreshWeather(response){
let temperatureElement= document.querySelector("#temperature");
let temperature= response.data.temperature.current;
let cityElement = document.querySelector("#city")

cityElement.innerHTML= response.data.city;
temperatureElement.innerHTML=Math.round(temperature);
}

function searchCity(city){
let apiKey = "088632943ce19bteoaf4f1d31dbc1e0a";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&unit=metric`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");

  searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg")