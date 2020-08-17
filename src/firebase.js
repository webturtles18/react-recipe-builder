import firebase, { auth } from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZBrF23ra3Q6f6_0vYfHVID4COS8_fGNM",
    authDomain: "recipe-manager-fa643.firebaseapp.com",
    databaseURL: "https://recipe-manager-fa643.firebaseio.com",
    projectId: "recipe-manager-fa643",
    storageBucket: "recipe-manager-fa643.appspot.com",
    messagingSenderId: "751089832205",
    appId: "1:751089832205:web:187d5202657f7b04226044"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;

