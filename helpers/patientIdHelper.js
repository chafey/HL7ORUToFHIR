module.exports = function(hl7Message, field) {
    var patientId  = hl7Message.query(field + '^0');

    var patientId = {
        "use" : "usual",
        "label" : "MRN",
        "system" : "urn:oid:0.1.2.3.4.5.6.7",
        "value" : patientId
    };

    //console.log(patientId);

    var patientIds = [];
    patientIds.push(patientId);
    return patientIds;
}