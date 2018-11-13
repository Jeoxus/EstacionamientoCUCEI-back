const firebase = require('../firebase');
const markerMannager = require('../marker/marker');

const newParkingMarker = firebase.functions.https.onRequest((req, res) => {
    const data = {
        nip: req.body.nip,
        lat: req.body.lat,
        lng: req.body.lng,
    };
    const marker = {};

    marker.position = {
        lat: data.lat,
        lng: data.lng,
    };

    return markerMannager.newParkingMarker(data.nip, marker)
        .then(response => res.send(response))
        .catch(error => {
            console.log(error);
            return res.status(error.httpStatus).send(error);
        });
});

const newObstacleMarker = firebase.functions.https.onRequest((req, res) => {
    const data = {
        nip: req.body.nip,
        lat: req.body.lat,
        lng: req.body.lng,
    };
    const marker = {};
    
    marker.position = {
        lat: data.lat,
        lng: data.lng,
    };

    return markerMannager.newObstacleMarker(data.nip, marker)
        .then(response => res.send(response))
        .catch(error => {
            console.log(error);
            return res.status(error.httpStatus).send(error);
        });
});

const reportMarker = firebase.functions.https.onRequest((req, res) => {
    const data = {
        nip: req.body.nip,
        lat: req.body.lat,
        lng: req.body.lng,
        type: req.body.type,
    };
    const marker = {};
    
    marker.position = {
        lat: data.lat,
        lng: data.lng,
    };

    return markerMannager.reportMarker(data.nip, marker, data.type)
        .then(response => res.send(response))
        .catch(error => {
            console.log(error);
            return res.status(error.httpStatus).send(error);
        });
});

const unpark = firebase.functions.https.onRequest((req, res) => {
    const data = {
        nip: req.body.nip,
        lat: req.body.lat,
        lng: req.body.lng,
    };
    const marker = {};
    
    marker.position = {
        lat: data.lat,
        lng: data.lng,
    };

    return markerMannager.unpark(data.nip, marker)
        .then(response => res.send(response))
        .catch(error => {
            console.log(error);
            return res.status(error.httpStatus).send(error);
        });
});

const getMarkers = firebase.functions.https.onRequest((req, res) => markerMannager.getMarkers()
    .then(markers => res.send(markers))
    .catch(error => {
        console.log(error);
        return res.status(error.httpStatus).send(error);
    })
);


exports.newParkingMarker = newParkingMarker;
exports.newObstacleMarker = newObstacleMarker;
exports.reportMarker = reportMarker;
exports.unpark = unpark;
exports.getMarkers = getMarkers;
