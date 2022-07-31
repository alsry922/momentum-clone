import { WEATHER_API } from "./api.js";

const $infoWeather = document.querySelector(".info__weather");
const $infoCity = document.querySelector(".info__city");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $infoWeather.innerText = data.weather[0].main;
      $infoCity.innerText = data.name;
    });
}

function onGeoError(position) {
  return new Error(`Can't get your location`);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
