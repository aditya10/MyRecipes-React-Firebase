import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCFxIZs0EdWf-SxW_z5-mowNTYPq4DzWZQ",
  authDomain: "myrecipes-e3d37.firebaseapp.com",
  databaseURL: "https://myrecipes-e3d37.firebaseio.com",
  projectId: "myrecipes-e3d37",
  storageBucket: "myrecipes-e3d37.appspot.com",
  messagingSenderId: "834766130820"
};
firebase.initializeApp(config);
export default firebase;
