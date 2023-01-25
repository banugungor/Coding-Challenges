const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getData(cityInput.value);
});
// * ----- API ----- *//
function getData(name) {
  const API = "ce2ff6ee7940c4c0c5f81dfedbe414b5";
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric`;

  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like, humidity },
        weather: [{ description, icon }],
      } = data;
      const city = document.querySelector("#city");
      const temperature = document.querySelector("#temperature");
      const weatherDesc = document.querySelector("#weather-condition");
      const realFeel = document.querySelector("#real-feel");
      const humidityF = document.querySelector("#humidity-real");
      city.textContent = `${name}, ${country}`;
      weatherDesc.textContent = `${description}`;
      temperature.textContent = `${temp}`;
      realFeel.textContent = ` ${feels_like} °C`;
      humidityF.textContent = ` ${humidity}%`;
    });
  console.log(baseURL);
}
