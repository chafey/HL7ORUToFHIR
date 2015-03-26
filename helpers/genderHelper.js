var v2Master = require('../lookupTables/v2/master.js');
var v3Master = require('../lookupTables/v3/master.js');

module.exports = function (value) {
    var code = v2Master.administrativeSexLookup(value);
    if(code === '') {
        return undefined;
    }

    var gender = {
        "coding" : [{
            "system" : "v3/AdministrativeGender",
            "code" : code,
            display: v3Master.administrativeGenderLookup(code)
        }]
    };
    //console.log(gender);
    return gender;
}
