import firebase from '@firebase/app';
require('firebase/auth');
const configs = require("./index.json")

const config = {
    apiKey: configs.firebase.apiKey,
    authDomain:configs.firebase.authDomain,
    databaseURL: configs.firebase.databaseURL,
    projectId: configs.firebase.projectId,
    storageBucket: configs.firebase.storageBucket,
    messagingSenderId: configs.firebase.messagingSenderId,
    appId:configs.firebase.appId
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default firebase;

