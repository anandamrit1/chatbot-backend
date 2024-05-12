const {
    findClosestForecastForCurrentTime,
    parseWeatherResponse,
    createWeatherTextMessage,
    findTomorrowForecastForSameTime
} = require("../utils/weather-util");
 
const city = "patna";
const appKey = "153a81b2cf6c4ad1dbd22ec00014ab0c";

async function getWeatherMsg() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appKey}`
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        const todayWeather = findClosestForecastForCurrentTime(responseData);
        const tomorrowWeather = findTomorrowForecastForSameTime(
            responseData,
            todayWeather
        );

        const todayParsedData = parseWeatherResponse(todayWeather);
        const tomorrowParsedData = parseWeatherResponse(tomorrowWeather);

        const todayWeatherMsg = createWeatherTextMessage(todayParsedData, true);
        const tomorrowWeatherMsg = createWeatherTextMessage(tomorrowParsedData);

        return {
            today: todayWeatherMsg,
            tomorrow: tomorrowWeatherMsg,
        };
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
    }
}

module.exports = {
    getWeatherMsg
}