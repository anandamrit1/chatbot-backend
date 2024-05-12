const express = require("express");
const router = express.Router();
const CONTROLLER = require("../controllers/export_controller");
const { getTodayEvents, getTomorrowEvents } = require("../constants/events");
const { getWeatherMsg } = require("../api/weather-api");

router.post("/api/fetchEvents", (req, res) => {
    let tag = req.body.fulfillmentInfo.tag;
    if (tag === "TodayEvents") {
        const events = getTodayEvents();
        let responseData = CONTROLLER.sampleResponse.handleEventResponse(events);
        return res.send(responseData);
    }
    if (tag === "TomorrowEvents") {
        const events = getTomorrowEvents();
        let responseData = CONTROLLER.sampleResponse.handleEventResponse(events);
        return res.send(responseData);
    }
    return res.send(CONTROLLER.sampleResponse.handleErrorResponse());
});

router.post("/api/weatherInfo", async (req, res) => {
    let tag = req.body.fulfillmentInfo.tag;
    const { today, tomorrow } = await getWeatherMsg();
    if (tag === "TodayWeatherInfo") {
        let data = CONTROLLER.sampleResponse.handleWeatherResponse(today);
        return res.send(data);
    }
    if (tag === "TomorrowWeatherInfo") {
        let data = CONTROLLER.sampleResponse.handleWeatherResponse(tomorrow);
        return res.send(data);
    }
    res.send(CONTROLLER.sampleResponse.handleErrorResponse());
});

module.exports = {
    router,
    getWeatherMsg,
};
