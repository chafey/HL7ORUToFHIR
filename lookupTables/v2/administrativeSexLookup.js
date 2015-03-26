var lookup = require('../lookup.js');

module.exports = function(code) {
    var lookupTable = {
        A : 'UN',           // ambiguous
        M : 'M',            // male
        F : 'F',            // female
        N : undefined,      // not applicable
        O : 'UN',           // other
        U : undefined       // unknown
    };

    return lookup(lookupTable, code);
}