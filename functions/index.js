const functions = require('firebase-functions');
const helper = require('./helper');

let admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//exports.fetchData = functions.pubsub.schedule('every 5 minutes').timeZone('utc').run((context) => {
exports.fetchData = functions.https.onRequest((request, response) => {
    helper.getDailyData().then((respData) => {
        return respData;
    }).then((resp) => {
        let jsonData = JSON.parse(resp.body);
        console.log(jsonData);
        console.log(jsonData.active);
        var message = "Total Cases : " + jsonData.cases + " Recovered : " + jsonData.recovered + " Active Cases : " + jsonData.active + " Deaths : " + jsonData.deaths;
        // The topic name can be optionally prefixed with "/topics/".
        var topic = "dailyUpdates";

        var payload = {
            notification: {
                title: 'Stay Home, Stay Safe',
                body: message
            },
            topic: topic
        };
        // Send a message to devices subscribed to the provided topic.
        return admin.messaging().send(payload)
            .then((resp) => {
                // Response is a message ID string.
                console.log('Successfully sent message:', resp);
                return response.json(JSON.stringify(jsonData, null, 4));
            })
            .catch((error) => {
                console.log('Error sending message:', error);
                return response.json(err);
            });
        //return response.json(JSON.stringify(jsonData, null, 4));
    }).catch((err) => {
        return response.json(err);
    })
});