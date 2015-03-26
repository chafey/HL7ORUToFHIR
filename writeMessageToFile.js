var config = require('./config.js');
var fs = require('fs');

function writeMessageToFile(parsedMessage, rawMessage){
    var ticks = new Date().getTime();

    var file = config.baseFolder + ticks;
    while (fs.existsSync(file)) {
        ticks++;
        file = config.baseFolder + ticks;
    }

    var retries = 5;
    var count = 0;

    var saved = false;

    // try to write it to the file 5 times, just to try and keep from losing it
    while (count < retries) {

        fs.writeFileSync(file, rawMessage);
        if (!fs.existsSync(file)) {
            // something happened, try to write again
            count++;
        } else {
            saved = true;
            count = 5;
        }
    }

    if (saved) {
        console.log("Saved message to " + file);
    } else {
        // we ended up not saving the message, so just tell them
        // it was destroyed
        console.log("ERROR - Failed to save message to " + file);
    }

    // we reached here, so it wasn't saved
    return saved;
};

module.exports = writeMessageToFile;