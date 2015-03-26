var lookup = require('../lookup.js');

module.exports = function(code) {
    var lookupTable = {
        A : 'Annulled',
        D : 'Divorced',
        I : 'Interlocutory',
        L : 'Legally Separated',
        M : 'Married',
        P : 'Polygamous',
        S : 'Never Married',
        T : 'Domestic Partner',
        W : 'Widowed'
    };

    return lookup(lookupTable, code);
}