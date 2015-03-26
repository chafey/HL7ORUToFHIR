
var genderHelper = require('./helpers/genderHelper.js');
var maritalStatusHelper = require('./helpers/maritalStatusHelper.js');
var nameHelper = require('./helpers/nameHelper.js');
var patientIdHelper = require('./helpers/patientIdHelper.js');
var dateTimeHelper = require('./helpers/dateTimeHelper.js');

function createPatient(hl7Message) {

    var patient = {
        "resourceType" : "Patient",
        "text" : {
            "status" : "generated",
            "div" : ""
        },
        "identifier": patientIdHelper(hl7Message, 'PID|2'),
        "name" : nameHelper(hl7Message, 'PID|5'),
        "gender": genderHelper(hl7Message.query('PID|8')),
        "maritalStatus" : maritalStatusHelper(hl7Message.query('PID|16')),
        "birthDate": dateTimeHelper(hl7Message, 'PID|7'),
        "active": "true"
    };

    //console.log(patient);

    return patient;

};

module.exports =createPatient;