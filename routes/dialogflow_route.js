const express = require('express');
const router = express.Router();
const CONTROLLER = require('../controllers/export_controller');

// Sample hardcoded calendar data
const events = [
    { id: 1, title: 'Meeting with client', date: '2024-05-10', time: '10:00 AM' },
    { id: 2, title: 'Team brainstorming session', date: '2024-05-12', time: '2:00 PM' },
    { id: 3, title: 'Project deadline', date: '2024-05-15', time: '5:00 PM' }
];

// Define a GET endpoint to fetch events
router.get('/api/fetchEvents', (req, res) => {
    // Send the events data as JSON response
    let tag = req.body.fulfillmentInfo.tag;

    console.log('A new request came...');
    console.log(tag);

    if (tag === 'events') {
        // const msg = await getWeatherMsg()
        let responseData = CONTROLLER.sampleResponse.handleTodaysWeatherResponse(msg); 
        res.send(responseData);
    } else {
        res.send(
            CONTROLLER.util.formatResponseForDialogflow(
                [
                    'This is from the events webhook.',
                    'There is no tag set for this request.'
                ]
            )
        );
    }
    res.json(events);
});

router.post('/api/weatherInfo', async (req, res) => {

    let tag = req.body.fulfillmentInfo.tag;

    console.log('A new request came...');
    console.log(tag);

    if (tag === 'WeatherInfo') {
        const msg = await getWeatherMsg()
        let responseData = CONTROLLER.sampleResponse.handleTodaysWeatherResponse(msg); 
        res.send(responseData);
    } else {
        res.send(
            CONTROLLER.util.formatResponseForDialogflow(
                [
                    'This is from the webhook.',
                    'There is no tag set for this request.'
                ]
            )
        );
    }
});

module.exports = {
    router
};

const city = "patna"
const appKey = "153a81b2cf6c4ad1dbd22ec00014ab0c"

async function getWeatherMsg() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        const parsedData = parseWeatherResponse(responseData);
        const msg = createWeatherTextMessage(parsedData)
        return msg
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
    }
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
        windSpeed: windSpeed
    };

    return payload;
}

function createWeatherTextMessage(weatherData) {
    const {
        weatherDescription,
        temperature,
        feelsLike,
        humidity,
        windSpeed
    } = weatherData;

    const message = `Today's weather is ${weatherDescription} with a temperature of ${temperature} Kelvin. It feels like ${feelsLike} Kelvin. The humidity is at ${humidity}% with a wind speed of ${windSpeed} m/s.`;
    return message;
}