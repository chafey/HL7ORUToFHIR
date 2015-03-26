var http = require('http');
var config = require('./config.js');

module.exports = function(patient, cb) {

    var url = 'http://' + config.fhirHost + config.fhirPath + '/Patient?identifier=' + patient.identifier[0].value + '&_format=application%2fjson%2bfhir';

    //console.log(url);

    var options = {
        url: url,
        json: true,
    };

    callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            //console.log(str);
            var result = JSON.parse(str);
            var totalResults = result.totalResults;

            console.log('Search for Patient with identifier ' + patient.identifier[0].value + ' found ' + totalResults + " matching resources");
            cb(result);
        });
    }

    http.get(url, callback).on('error', function() {
        console.log("error");
    });



};