module.exports = function(lookupTable, code) {
    var value = lookupTable[code];
    if(value === undefined || value === '') {
        var value = lookupTable[null];
        if(value === undefined) {
            return '';
        }
        return value;
    }
    return value;
}