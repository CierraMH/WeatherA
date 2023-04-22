let url = "https://api.openweathermap.org/data/"
// "https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=3472a7aa4b1b7e90b9f2b43f8858996f&units=imperial"
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getZipCodeCity(zipcode){
    fetch(`${url}2.5/weather?zip=${zipcode}&appid=3472a7aa4b1b7e90b9f2b43f8858996f&units=imperial`)
    .then((response) => response.json())
    .then((json) => {
        const timeAndDate = new Date();
        showResults("getZipCodeCity", json.name);
        showResults("currentDate", `${days[timeAndDate.getDay()]} ${(timeAndDate.getMonth() +1)} / ${timeAndDate.getDate()} / ${timeAndDate.getFullYear()}`)
showResults("tempInFerinheight",json.main.temp);
// current Conditions
showResults("descriptionWeather",json.weather[0].description);
showResults("feelsLikeWeather",json.main.feels_like);
showResults("humidityWeather",json.main.humidity);
// high and low
showResults("highTemp",json.main.temp_max);
showResults("lowTemp",json.main.temp_min);
    });
};

const submitButton = document.getElementById("formToSearch");
submitButton.addEventListener("submit", function(event){
    event.preventDefault();
    const data = new FormData(event.target);
    getZipCodeCity(data.get("zipSearch"))
})
// getZipCodeCity();
//Date and time

function showResults(submitButton, result){
    const resultElement = document.getElementById(submitButton);
    resultElement.innerHTML = result;
    resultElement.style.display = "block";
}