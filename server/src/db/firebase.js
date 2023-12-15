const firebase = require("firebase/app");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyB5I3xEGrnD_MJ_YjaYnz8u16anBsMwGaI",
  authDomain: "hossam-8bf1a.firebaseapp.com",
  projectId: "hossam-8bf1a",
  storageBucket: "hossam-8bf1a.appspot.com",
  messagingSenderId: "971961193714",
  appId: "1:971961193714:web:881ca1dab5044b765dac6b"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = {
  firebase,
  db: database,
};
