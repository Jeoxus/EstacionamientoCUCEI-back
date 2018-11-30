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

const randomDepartures = () => {
    const departure = {
        nip: 7327
    };
    const promises = [];
    for (let i = 0; i < 5; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(0);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 5; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(1);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 5; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(2);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 5; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(3);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 5; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(4);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 5; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(5);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 10; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(6);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 10; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(7);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 10; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(8);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 15; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(9);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 15; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(9);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 15; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(10);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 25; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(11);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 15; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(12);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 25; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(13);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 15; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(14);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 30; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(15);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 15; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(16);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 15; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(17);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 10; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(18);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 20; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(19);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 10; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(20);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    for (let i = 0; i < 5; i++) {
        const newDeparture = departure;
        newDeparture.date = new Date(Math.floor((Math.random() * 2147483647 ) + 1));
        newDeparture.date.setHours(21);
        promises.push(firestore.addToCollection(departuresRef, newDeparture));
    }
    return Promise.all(promises);
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

const normalizeDate = (date) => {
    const newDate = date;
    newDate.setDate(1);
    newDate.setMonth(1);
    newDate.setFullYear(2000);
    return newDate;
};

const getAdvancedDepartures = () => {
    const maxDate = normalizeDate(new Date());
    const minDate = normalizeDate(new Date());

    minDate.setHours(minDate.getHours() - 1);

    return departuresRef.get()
        .then((departuresSnapshot) => {
            const departureStructure = [];
            //let departures = departuresSnapshot.docs;
            let departures = [];
            departuresSnapshot.docs.sort((a, b) => a.date < b.date).reduce((prev, dep) => {
                const departure = normalizeDate(dep.data().date.toDate());
                if (departure >= minDate && departure <= maxDate) {
                    prev.push(departure);
                }
                return prev;
            }, departures);
            //departures = departures.map(departureDoc => departureDoc.data());
            //departures = departures.sort((a, b) => a.date < b.date);

            departureStructure.push(maxDate.getTime());

            for (let i = 1, j = departures.length; i < j; i++) {
                let date = departures[i];
                let prevDate = departures[i-1];
                //date = normalizeDate(date);
                //prevDate = normalizeDate(prevDate);

                if (date >= minDate && date <= maxDate) {
                    const waitInterval = date.getTime() - prevDate.getTime();
                    if (waitInterval > 0) {
                        console.log('DATE:', date);
                        console.log('PREVDATE:', prevDate);
                        departureStructure.push(date.getTime());
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
exports.randomDepartures = randomDepartures;
