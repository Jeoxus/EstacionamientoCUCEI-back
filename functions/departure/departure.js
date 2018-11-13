const firebase = require('../firebase');
const firestore = require('../utils/firestore');

const collections = require('../utils/collections').collections;

const departuresRef = firebase.admin.firestore().collection(collections.departures);

const newDeparture = (departure) => {
    const newDeparture = departure;

    newDeparture.date = new Date();

    return firestore.addToCollection(departuresRef, newDeparture);
};

const getRecentDepartures = () => {
    // FOR TODAY
    //let today = new Date();
    //today.setHours(0);
    //today.setMinutes(0);
    //today.setMilliseconds(0);
    const anHourFromNow = new Date();
    anHourFromNow.setHours(anHourFromNow.getHours() - 1);
    return departuresRef.where(collections.Departures.date, '>=', anHourFromNow).get()
        .then((departuresSnapshot) => {
            let departures = departuresSnapshot.docs;
            departures = departures.map(departureDoc => departureDoc.data());
            departures = departures.sort((a, b) => a.date < b.date);
            //departures = departures.slice(0, 100);
            departures = departures.map(departure => departure.date.toMillis());
            return departures;
        })
        .catch((error) => {
            throw errorMannager.getHttpError(400, 'couldn\'t park', error);
        });
};

exports.newDeparture = newDeparture;
exports.getRecentDepartures = getRecentDepartures;
