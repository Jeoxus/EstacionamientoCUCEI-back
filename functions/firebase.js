const functions = require('firebase-functions');
const admin = require('firebase-admin');

const firestoreSettings = {
    timestampsInSnapshots: true,
};

admin.initializeApp();
admin.firestore().settings(firestoreSettings);

exports.functions = functions;
exports.admin = admin;
