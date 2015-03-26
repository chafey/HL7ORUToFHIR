var handlers = [];

function init(messageHandlers) {
    messageHandlers.forEach(function(messageHandlers) {
        var handler = require(messageHandlers);
        registerMessageHandler(handler);
    });
}

function registerMessageHandler(handler) {
    console.log("Registering Message Handler " + handler.name);
    handlers.push(handler);
};

function handleMessage(parsedMessage, rawMessage) {
    handlers.forEach(function(handler) {
        handler(parsedMessage, rawMessage);
    });
}

module.exports = {
    init: init,
    registerMessageHandler: registerMessageHandler,
    handleMessage: handleMessage
};