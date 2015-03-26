var http = require('http');
var config = require('./config.js');

module.exports = function(patient, cb) {

    var patientString = JSON.stringify(patient);

    //console.log(patientString);

    var headers = {
        'Content-Type': 'application/json'
    };

    var path = config.fhirPath + '/Patient?_format=application%2fjson%2bfhir';

    //console.log(path);

    var options = {
        host: config.fhirHost,
        path : path,
        port: 80,
        method: 'POST',
        headers: headers,
    };

    var req = http.request(options, function(res) {
        //res.setEncoding('utf-8');

        //console.log('response');

        var responseString = '';

        var headers = JSON.stringify(res.headers);
        //console.log('resp headers = ' + headers);

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            //console.log(responseString);
            //var resultObject = JSON.parse(responseString);
            cb(JSON.parse(headers));
        });
    });

    req.on('error', function(e) {
        // TODO: handle error.
        console.log('error');
        console.log(e);
    });

    req.write(patientString);
    //req.data = patientString;
    req.end();

};