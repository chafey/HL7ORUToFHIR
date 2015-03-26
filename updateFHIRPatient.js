
var parseToPatient = require('./parseToPatient.js');
var searchForPatient = require('./searchForPatient.js');
var createPatient = require('./createPatient.js');

function updateFHIRPatient(parsedMessage, callback) {

    // create the patient resource from this message
    var patient = parseToPatient(parsedMessage);

    // search for existing patient
    var patients = searchForPatient(patient, function(response) {
        // if existing patient
        if(response.totalResults > 0) {
            // TODO: update the patient resource?
            // TODO: Do something smart if there is more than one matching patient - for now just use the first one
            var resourceId = response.entry[0].id;
            console.log('using patient with resource id ' + resourceId);
        } else {
            // Create the patient resource
            console.log("creating patient resource");
            createPatient(patient, function(headers) {
                var location = headers.location;
                //console.log(headers);
                console.log('new patient resource id = ' + location);
                // strip off the history part since we want the root resource id
                var historyIndex = location.indexOf('/_history');
                if (historyIndex !== -1) {
                    location = location.substr(0, historyIndex);
                    console.log("fixed location:" + location);
                }
            });
        }
    });
};

module.exports =updateFHIRPatient;