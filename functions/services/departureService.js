const firebase = require('../firebase');
const departureManager = require('../departure/departure');

const getRecentDepartures = firebase.functions.https.onRequest((req, res) =>
    departureManager.getRecentDepartures()
    .then(departures => res.send(departures))
    .catch(error => {
        console.log(error);
        return res.status(error.httpStatus).send(error);
    })
);

exports.getRecentDepartures = getRecentDepartures;
