# HL7ORUToFHIR
Prototype application that receives HL7 ORU Messages and updates a HL7 FHIR Repository.  Currently just updates
the Patient resource if one doesn't already exist with the Patient ID.  Check out my blog series on radiology and
FHIR starting with [this blog post](http://chafey.blogspot.com/2015/03/hl7-fhir-and-radiology.html)

Sample ORU Message
------------------

```
MSH|^~\&||ABC|||201503231355||ORM^O01|1000|D|2.4|||AL|NE
PID|1|2000^^^^MR|||DUCK^DONALD||19340609|M|||1113 QUACK STREET^^DUCKBURG^CALISOTA^^^^^|||||||
PV1|1|I||EL||||||SURG||||PHY||||IN|||||||||||||||||||||ABC||ADM|||201503231330||||||||
OBR|1||3000|RAD^CARM^RAD C-ARM|||201503233154||||||||||||||||||F|||||||||
OBX|1|TX|L.RADREA2^Reason for Exam:||Report text
```

How to Use
----------

Install [Node.js](https://nodejs.org/)

Pull the source tree

> git clone https://github.com/chafey/HL7ORUToFHIR.git

Install dependencies

> npm install

Configure the HL7 FHIR server in config.js

Run Node
> node main.js

Push ORU messages to it (e.g. using [HL7 Inspector](http://sourceforge.net/projects/hl7inspector/))

Copyright
============
Copyright 2015 Chris Hafey [chafey@gmail.com](mailto:chafey@gmail.com)