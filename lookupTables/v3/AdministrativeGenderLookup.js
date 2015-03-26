var lookup = require('../lookup.js');

module.exports = function(code) {
    var lookupTable = {
        M : 'Male',
        F : 'Female',
        UN : 'Undifferentiated'
    };

    return lookup(lookupTable, code);
}