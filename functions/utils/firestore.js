
const addToCollection = (collectionRef, record, id) => {
    console.log('record', record);

    if (id) {
        return collectionRef.doc(id).set(record);
    } else {
        return collectionRef.add(record);
    }
};

const updateDocument = (collectionRef, record, id, options) => collectionRef.doc(id).update(record, options);

exports.addToCollection = addToCollection;
exports.updateDocument = updateDocument;
