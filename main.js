const request = require('request');
const prompt = require('./prompt');;
const INTERVAL = 1000;
const URL = "http://localhost:3001"

function checkForServer() {
    request.get({
        url: `${URL}/healthcheck`,
        json: true
    }, (err, res, data) => {
        if (err) {
            console.log('Error:', err);
        } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            // data is already parsed as JSON:
            console.log(data);
            clearInterval(serverChecker);
            console.log('Server ready.')
            prompt.run();
        }
    });
}


console.log('Initializing server...');
let serverChecker = setInterval(checkForServer, INTERVAL)