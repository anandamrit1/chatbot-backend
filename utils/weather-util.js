function findClosestForecastForCurrentTime(data) {
    const currentTime = Math.floor(Date.now() / 1000); // Get current time in Unix format
    let closestForecast = null;
    let timeDifference = Infinity;

    // Loop through the response data to find the closest forecast for the current time
    data.list.forEach((entry) => {
        const entryTimeDifference = Math.abs(entry.dt - currentTime);
        if (entryTimeDifference < timeDifference) {
            closestForecast = entry;
            timeDifference = entryTimeDifference;
        }
    });

    return closestForecast;
}

function findTomorrowForecastForSameTime(data, closestForecast) {
    const tomorrowTime = closestForecast.dt + 24 * 60 * 60; // Add 24 hours to the closest forecast time
    let tomorrowForecast = null;

    // Loop through the response data to find tomorrow's forecast for the same time
    data.list.forEach((entry) => {
        if (entry.dt === tomorrowTime) {
            tomorrowForecast = entry;
        }
    });

    return tomorrowForecast;
}

function parseWeatherResponse(response) {
    const weatherData = response;

    const weatherDescription = weatherData.weather[0].description;
    const temperature = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;

    const payload = {
        weatherDescription: weatherDescription,
        temperature: temperature,
        feelsLike: feelsLike,
        humidity: humidity,
        windSpeed: windSpeed,
    };

    return payload;
}

function createWeatherTextMessage(weatherData, isToday) {
    const { weatherDescription, temperature, feelsLike, humidity, windSpeed } =
        weatherData;

    const message = `${
        isToday ? "Today's" : "Tomorrow's"
    } weather is ${weatherDescription} with a temperature of ${temperature} Kelvin. It feels like ${feelsLike} Kelvin. The humidity is at ${humidity}% with a wind speed of ${windSpeed} m/s.`;
    return message;
}


module.exports = {
    findClosestForecastForCurrentTime,
    parseWeatherResponse,
    createWeatherTextMessage,
    findTomorrowForecastForSameTime
}