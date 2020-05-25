const functions = require('firebase-functions');
const helper = require('./helper');

let admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//exports.fetchData = functions.pubsub.schedule('every 5 minutes').timeZone('utc').onRun((context) => {
exports.dailyData = functions.pubsub.schedule('40 12 * * *').timeZone("Asia/Kolkata").onRun((context) => {
    return helper.getDailyData().then((respData) => {
        return respData;
    }).then((resp) => {
        let jsonData = JSON.parse(resp.body);
        console.log(jsonData);
        //console.log(jsonData.active);
        var message = "Total Cases : " + numberWithCommas(jsonData.cases) + "\nRecovered : " + numberWithCommas(jsonData.recovered) + "\nActive : " + numberWithCommas(jsonData.active) + "\nDeaths : " + numberWithCommas(jsonData.deaths);
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
        return admin.messaging().send(payload);
    }).then((resp) => {
        console.log('Successfully sent message:', resp);
        return JSON.stringify({"message" : "success"});
    }).catch((err) => {
        return JSON.stringify(err);
    })
});

function numberWithCommas(x) {
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}