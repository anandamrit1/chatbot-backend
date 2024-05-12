const express = require('express');
const CONTROLLER = require('../routes/dialogflow_route');

const webApp = express();

webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

const PORT = process.env.PORT || 3000;

const homeRoute = require('../routes/home_route');
const dialogflowRoute = require('../routes/dialogflow_route');

webApp.use(homeRoute.router);
webApp.use(dialogflowRoute.router);

webApp.listen(PORT, async () => {
    await CONTROLLER.getWeatherMsg()
    console.log(`Server is up and running at ${PORT}`);
});