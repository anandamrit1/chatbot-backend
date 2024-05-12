const util = require('./util');

const handleSampleResponse = (req) => {
    return util.formatResponseForDialogFlow(
        [
            'This is a sample response from webhook.',
            'Another sample response.'
        ],
        '',
        '',
        ''
    );
};

const handleWeatherResponse = (msg) => {
    return util.formatResponseForDialogFlow(
        [msg],
        '',
        '',
        ''
    );
};

const handleEventResponse = (events) => {
    return util.formatResponseForDialogFlow(
        events,
        '',
        '',
        ''
    );
};

const handleErrorResponse = () => {
    return util.formatResponseForDialogFlow(
        ['Something went wrong. Please try again.'],
        '',
        '',
        ''
    );
};

module.exports = {
    handleSampleResponse,
    handleWeatherResponse,
    handleEventResponse,
    handleErrorResponse
};