module.exports = function(hl7Message, field) {
    var patientLastName  = hl7Message.query(field + '^0');
    var patientFirstName  = hl7Message.query(field + '^1');

    var name = {
        "use" : "official",
        "family" : [patientLastName],
        "given" : [patientFirstName]
    };

    //console.log(name);

    var names = [];
    names.push(name);
    return names;
}