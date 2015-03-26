var lookup = require('../lookup.js');

module.exports = function(code) {
    var lookupTable = {
        A : '',           // separated
        B : '',           // unmarried
        C : '',           // common law
        D : 'D',           // divorced
        E : 'L',           // legally separated
        G : '',           // living together
        I : 'I',           // interlocutory
        M : 'M',           // married
        N : 'A',           // anulled
        O : '',           // other
        P : 'T',           // domestic partner
        R : 'T',           // registered domestic partner
        S : 'S',           // single
        T : '',           // unreported
        U : '',           // unknown
        W : 'W',           // widowed
    };

    return lookup(lookupTable, code);
}