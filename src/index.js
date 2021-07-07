import "./style.css";
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("searchBtn");
const searchBarBtn = document.getElementById("search-bar-button");
const searchBar = document.getElementById("place");
const searchError = document.querySelector(`#search-box span.error`);
const loader = document.querySelector("#loading");

getWeather(`Tel Aviv`);
searchBtn.addEventListener(`click`, () => {
  searchBox.classList.toggle(`is-active`);
});
searchBar.addEventListener(`keypress`, (e) => {
  if (e.key === "Enter") {
    getWeather(searchBar.value);
    searchBar.value = ``;
  }
});
searchBarBtn.addEventListener(`click`, (e) => {
  getWeather(searchBar.value);
  searchBar.value = ``;
});

async function getWeather(city) {
  try {
    displayLoading();
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3950530457354e88f3f37b02d71f4a4f`,
      { mode: "cors" }
    );

    const weatherData = await response.json();
    searchError.innerText = ``;
    hideLoading();
    update(weatherData);
  } catch (error) {
    console.log(error);
    searchError.innerText = `No matching location found, please try again`;
  }
}

function displayLoading() {
  loader.classList.add("display");
}

// hiding loading
function hideLoading() {
  loader.classList.remove("display");
}

function setValues(data) {
  const name = data.name;
  const temp = (data.main.temp / 10).toFixed(1);
  const feelTemp = (data.main.feels_like / 10).toFixed(1);
  const wind = (data.wind.speed / 1.852).toFixed(1);
  const humidity = data.main.humidity;
  const values = [name, temp, feelTemp, wind, humidity];
  return values;
}

function update(data) {
  const values = setValues(data);
  const elements = setElements();

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = values[i];
  }
}
function setElements() {
  const nameElement = document.getElementById("name");
  const windElement = document.getElementById("wind");
  const tempElement = document.getElementById("temp");
  const feelTempElement = document.getElementById("feel-temp");
  const humidityElement = document.getElementById("humidity");
  const elements = [
    nameElement,
    tempElement,
    feelTempElement,
    windElement,
    humidityElement,
  ];
  return elements;
}

// &appid=fac5a8292c914f0d8563a269f4d416d6
