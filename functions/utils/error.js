const firebase = require('../firebase');

const httpErrors = {
    "400": 'invalid-argument',
    "401": 'unauthenticated',
    "403": 'permission-denied',
    "404": 'not-found',
    "409": 'already-exists',
    "429": 'resource-exhausted',
    "499": 'cancelled',
    "500": 'unknown',
    "501": 'unimplemented',
    "503": 'unavailable',
    "504": 'deadline-exceeded',
};

const getHttpError = (status, message, error) =>{
    console.log(error);
    const httpError = new firebase.functions.https.HttpsError(httpErrors[status], message, error.message);
    httpError.httpStatus = parseInt(status);

    return httpError;
};

exports.httpErrors = httpErrors;
exports.getHttpError = getHttpError;
