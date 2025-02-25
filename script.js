async function getWeather() {
    const apiKey = "cf8b56bcf8ecb228cc4abae0346663be";
    const city = "La Garde";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données météo:", error);
    }
}

function displayWeather(data) {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = "";
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = `Ville: ${data.name} - Température: ${data.main.temp}°C - Humidité: ${data.main.humidity}% - Conditions: ${data.weather[0].description}`;
    
    messagesDiv.appendChild(messageElement);
}