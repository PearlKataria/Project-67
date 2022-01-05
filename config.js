import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCq5sEkKakXSTVtEPH6Tle0ng9b3BeKoYw",
    authDomain: "votingapp-87de4.firebaseapp.com",
    projectId: "votingapp-87de4",
    storageBucket: "votingapp-87de4.appspot.com",
    messagingSenderId: "530361653166",
    appId: "1:530361653166:web:7769309b5bd4757a99da3f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();