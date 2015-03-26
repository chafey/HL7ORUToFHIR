var moment = require('moment');

module.exports = function(hl7Message, field) {
    // get the date
    var dateTimeAsString  = hl7Message.query(field);

    // parse it
    var dateTime = moment(dateTimeAsString, "YYYYMMDD");

    // format it in HL7 FHIR format
    var dateTimeAsFHIRDateTime = dateTime.format("YYYY-MM-DD");

    return dateTimeAsFHIRDateTime;

}