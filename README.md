# SymptoChecker App byu SARS App



There is an optional way to use mobile number this enables the user to skip the step of entering age and gender..


The app uses Infermedica API that asks the user to enter his/her symptoms, and then we ask some questions according to the signs that patient reports.


The general questions include patient traits like BMI, behavior, geolocation(to identify location-specific diseases), etc. Then some specific questions are asked, which are based on previous responses


After answering all the answers, a set of possible diseases is displayed with its corresponding probability. A 5 level variable 'triage' is given to the session depending upon the diseases which signify the requirements of treatment for patient (ranging from self-care to emergency-ambulance).

There is also an option to check x ray for Pneumonia positive or negative. The app sends back a request to outr heroku application which store the information of the session which is sent by this application.

The Heroku API that it calls: [Data collection API](https://agile-reaches-72897.herokuapp.com/)

Contributors to this project 
 - [Abhay Shreevastava](https://github.com/abhay007kr)
 - [Ritvij Kumar Sharma](https://github.com/ritvij14)
 - [Saransh Anand](https://github.com/fullatron)
 - [Satej Bidvai](https://github.com/Electron-2002/)
