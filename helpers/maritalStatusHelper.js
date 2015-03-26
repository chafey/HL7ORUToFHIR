var v2Master = require('../lookupTables/v2/master.js');
var v3Master = require('../lookupTables/v3/master.js');

module.exports = function (value) {
    var code = v2Master.maritalStatusLookup(value);
    if(code === '') {
        return undefined;
    }
    var maritalStatus = {
        "coding" : [{
            "system" : "v3/MaritalStatus",
            "code" : code,
            "display" : v3Master.maritalStatusLookup(code)
        }]
    };
    //console.log(maritalStatus);
    return maritalStatus;
}
