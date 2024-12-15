const apiKey = '878454cd496e4e19a0f173056241312'; 
const cityInput = document.getElementById('cityInput');
const findButton = document.getElementById('findWeather');
const weatherCards = document.getElementById('weatherCards');
const title = document.getElementById('title');

window.onload = () => {
    getWeather('Cairo'); 
};

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) getWeather(city);
    }
});

findButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`);
        const data = await response.json();
        displayWeather(city, data.forecast.forecastday);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayWeather(city, forecast) {
    weatherCards.innerHTML = '';
    title.innerHTML = `<h2 class="text-center mb-4 text-black">${city}</h2>`;
    console.log('city', city);
    
    forecast.forEach((day, index) => {
        const date = new Date(day.date);
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <h4>${index === 0 ? 'Today' : date.toDateString()}</h4>
                    <h2>${day.day.avgtemp_c}°C</h2>
                    <img src="https:${day.day.condition.icon}" alt="Weather Icon">
                    <p>${day.day.condition.text}</p>
                    <p>Humidity: ${day.day.avghumidity}%</p>
                    <p>Wind: ${day.day.maxwind_kph} km/h</p>
                </div>
            </div>
        `;
        weatherCards.innerHTML += card;
    });
}
