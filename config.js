module.exports = {
    // What port to listen on
    port: 2100,
    // what ip to listen on
    ip : "127.0.0.1",
    // Where to save the messages
    baseFolder: './messages/',
    // the hostname of the FHIR server
    fhirHost: 'spark.furore.com',
    // the root URL of the FHIR server
    fhirPath: '/fhir',
    // The message handlers we want to invoke for each received HL7 message
    //messageHandlers: ['./writeMessageToFile.js', './updateFHIRPatient.js']
    messageHandlers: ['./updateFHIRPatient.js']
};