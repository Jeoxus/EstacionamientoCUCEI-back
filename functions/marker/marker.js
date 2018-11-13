const firebase = require('../firebase');

const collections = require('../utils/collections').collections;
const departureManager = require('../departure/departure');
const errorMannager = require('../utils/error');
const markerConstants = require('./constants');
const firestore = require('../utils/firestore');

const parkingsRef = firebase.admin.firestore().collection(collections.parkings);
const obstaclesRef = firebase.admin.firestore().collection(collections.obstacles);

const addToCollection = firestore.addToCollection;
const updateDocument = firestore.updateDocument;


// TODO add proper identification method
const newParkingMarker = (nip, marker) => {
    const newMarker = marker;
    newMarker.nip = nip;
    newMarker.active = true;
    newMarker.type = markerConstants.markerTypes.user;
    newMarker.start = new Date();
    newMarker.reports = 0;

    const id = `${marker.position.lat},${marker.position.lng}`;

    return addToCollection(parkingsRef, newMarker, id)
        .then(() => ({ message: 'ok' }))
        .catch((error) => {
            throw errorMannager.getHttpError(400, 'couldn\'t park', error);
        });
};

// TODO add proper identification method
const newObstacleMarker = (nip, marker) => {
    const newMarker = marker;
    newMarker.nip = nip;
    newMarker.active = true;
    newMarker.type = markerConstants.markerTypes.obstacle;
    newMarker.reports = 0;

    const id = `${marker.position.lat},${marker.position.lng}`;

    return addToCollection(obstaclesRef, newMarker, id)
        .then(() => ({ message: 'ok' }))
        .catch((error) => {
            throw errorMannager.getHttpError(400, 'couldn\'t park', error);
        });
};

const reportMarker = (nip, marker, type) => {
    let markersRef;

    switch (type) {
        case markerConstants.markerTypes.user:
            markersRef = parkingsRef;
            break;
        case markerConstants.markerTypes.obstacle:
            markersRef = obstaclesRef;
            break;
        default:
            throw errorMannager.getHttpError(400, 'couldn\'t park', new Error('invalid type'));
    }

    const id = `${marker.position.lat},${marker.position.lng}`;
    const reportsRef = markersRef.doc(id).collection(collections.Marker.reports);
    const newReport = {
        issuer: nip,
        date: new Date(),
    };
    let shouldRemove = false;

    return addToCollection(reportsRef, newReport)
        .then(() => markersRef.doc(id).get())
        .then((markerSnapshot) => {
            const newMarker = markerSnapshot.data();
            newMarker.reports = newMarker.reports + 1;
            if (newMarker.reports >= markerConstants.reportLimit) {
                newMarker.active = false;
                shouldRemove = true;
            }
            return updateDocument(markersRef, newMarker, id, { merge: true });
        })
        .then(() => {
            if (type === markerConstants.markerTypes.user && shouldRemove) {
                const departure = { nip };
                return departureManager.newDeparture(departure);
            } else {
                return false;
            }
        })
        .then(() => ({ message: 'ok' }))
        .catch((error) => {
            throw errorMannager.getHttpError(400, 'couldn\'t park', error);
        });
};

const unpark = (nip, marker) => {
    const markerId = `${marker.position.lat},${marker.position.lng}`;

    return parkingsRef.doc(markerId).get()
        .then((parkingSnapshot) => {
            const parkingMarker = parkingSnapshot.data();
            if (!parkingMarker.active) {
                throw Error('marker already removed');
            }
            return removeMarker(parkingMarker, markerConstants.markerTypes.user);
        })
        .then(() => {
            const departure = { nip };
            return departureManager.newDeparture(departure);
        })
        .then(() => ({ message: 'ok' }))
        .catch((error) => {
            throw errorMannager.getHttpError(400, 'couldn\'t unpark', error);
        });
};

const removeMarker = (marker, type) => {
    const markerId = `${marker.position.lat},${marker.position.lng}`;
    let markersRef;

    switch (type) {
        case markerConstants.markerTypes.user:
            markersRef = parkingsRef;
            break;
        case markerConstants.markerTypes.obstacle:
            markersRef = obstaclesRef;
            break;
        default:
            throw new Error('invalid type');
    }

    return markersRef.doc(markerId).get()
        .then((markerSnapshot) => {
            const marker = markerSnapshot.data();
            marker.active = false;
            return updateDocument(markersRef, marker, markerId, { merge: true });
        })
};

const getMarkers = () => {
    let markers = [];

    return parkingsRef.where(collections.Marker.active, '==', true).get()
        .then((parkingsSnapshot) => {
            markers = markers.concat(parkingsSnapshot.docs.map(marker => {
                const m = marker.data();
                m.start = m.start.toMillis();
                return m;
            }));
            return obstaclesRef.where(collections.Marker.active, '==', true).get();
        })
        .then((obstaclesRef) => {
            markers = markers.concat(obstaclesRef.docs.map(marker => marker.data()));
            return markers.map((marker) => {
                const m = marker;

                m.lat = m.position.lat;
                m.lng = m.position.lng;
                delete m.position;

                return m;
            });
        })
        .catch((error) => {
            throw errorMannager.getHttpError(400, 'couldn\'t park', error);
        });
};

exports.newParkingMarker = newParkingMarker;
exports.newObstacleMarker = newObstacleMarker;
exports.reportMarker = reportMarker;
exports.unpark = unpark;
exports.getMarkers = getMarkers;
