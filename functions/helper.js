const helpers = {};

const request = require('request');

const host = 'corona.lmao.ninja/';
const path = 'v2/all'

helpers.getDailyData = function dailyData() {
    return new Promise((resolve, reject) => {
        var url = 'https://' + host + path;
        request({
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            uri : url,
            method : 'GET'
        }, function (err, res, body) {
            if(err){
                console.log(err);
                return;
            }
            console.log("Response : ", res.statusCode);
            resolve(res);
        });
    });
}

module.exports = helpers