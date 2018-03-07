const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
exports.createProfile = functions.auth.user().onCreate(event => {
    console.log(event.data.email);
    return admin.database().ref(`/user/${event.data.uid}`).set({
        email: event.data.email,
        emailUpdates: true
    });
});
exports.deleteProfile = functions.auth.user().onDelete(event => {
    console.log(event.data.email);
    return admin.database().ref(`/user/${event.data.uid}`).remove();
});
//# sourceMappingURL=index.js.map