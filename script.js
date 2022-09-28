const weatherFor = document.getElementById("weather-for");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");
const weather = document.getElementById("weather");

const input = document.querySelector("input");
const submitBtn = document.querySelector("button");

const convertKelvin = function (k) {
  let f = 1.8 * (k - 273) + 32;
  return parseInt(f);
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=65e0b1757365e915d9efa3198177233f`
  )
    .then((res) => res.json())
    .then((data) => {
      weatherFor.textContent = data.name;
      temp.innerHTML = `${convertKelvin(data.main.temp)}&deg;F`;
      feelsLike.innerHTML = `${convertKelvin(data.main.feels_like)}&deg;F`;
      weather.textContent = data.weather[0].main;
      console.log(data);
    })
    .catch((err) => console.log(err));
});
