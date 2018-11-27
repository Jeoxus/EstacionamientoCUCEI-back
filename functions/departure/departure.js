const firebase = require('../firebase');
const firestore = require('../utils/firestore');
const errorManager = require('../utils/error');
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
            throw errorManager.getHttpError(400, 'couldn\'t get departures', error);
        });
};

const getAdvancedDepartures = () => {
    const minDate = new Date();
    minDate.setHours(minDate.getHours() - 1);
    minDate.setFullYear(2000);
    const maxDate = new Date();
    maxDate.setFullYear(2000);

    return departuresRef.get()
        .then((departuresSnapshot) => {
            const departureStructure = [];
            let departures = departuresSnapshot.docs;
            departures = departures.map(departureDoc => departureDoc.data());
            departures = departures.sort((a, b) => a.date < b.date);

            for (let i = 1, j = departures.length; i < j; i++) {
                const date = departures[i].date.toDate();
                const prevDate = departures[i-1].date.toDate();
                date.setFullYear(2000);
                prevDate.setFullYear(2000);
                if (date >= minDate && date <= maxDate) {
                    const waitInterval = date.toMillis() - prevDate.toMillis();
                    if (waitInterval < 1000 * 60 * 60 * 12) {
                        departureStructure.push(date.toMillis());
                        departureStructure.push(waitInterval);
                    }
                }
            }

            return departureStructure;
        })
        .catch((error) => {
            throw errorManager.getHttpError(400, 'couldn\'t get departures', error);
        });
};

exports.newDeparture = newDeparture;
exports.getRecentDepartures = getRecentDepartures;
exports.getAdvancedDepartures = getAdvancedDepartures;
