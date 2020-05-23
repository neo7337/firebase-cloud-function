const functions = require('firebase-functions');
const helper = require('./helper');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.fetchData = functions.https.onRequest((request, response) => {
    helper.getDailyData().then((response) => {
        return response;
    }).then((resp) => {
        let jsonData = JSON.parse(resp);
        return response.json(JSON.stringify(jsonData, null, 4));
    }).catch((err) => {
        return response.json(err);
    })
});
