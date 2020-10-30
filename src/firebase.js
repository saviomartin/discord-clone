import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyChIDxpv_UChgDP4o70nBoV0VaVB8engYE",
    authDomain: "discord-bysavio.firebaseapp.com",
    databaseURL: "https://discord-bysavio.firebaseio.com",
    projectId: "discord-bysavio",
    storageBucket: "discord-bysavio.appspot.com",
    messagingSenderId: "90352009699",
    appId: "1:90352009699:web:9a205b12a0f9687efb60d6",
    measurementId: "G-MC0MK73PHZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db