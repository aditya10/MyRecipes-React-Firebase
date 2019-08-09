import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyCFxIZs0EdWf-SxW_z5-mowNTYPq4DzWZQ",
    authDomain: "myrecipes-e3d37.firebaseapp.com",
    databaseURL: "https://myrecipes-e3d37.firebaseio.com",
    projectId: "myrecipes-e3d37",
    storageBucket: "myrecipes-e3d37.appspot.com",
    messagingSenderId: "834766130820",
    appId: "1:834766130820:web:02fad40f1c40b98a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
