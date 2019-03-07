import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDnA5ePXQw_neJJ7fDgwao_JOhzvSZ5e1c",
    authDomain: "beezer-fd640.firebaseapp.com",
    databaseURL: "https://beezer-fd640.firebaseio.com",
    projectId: "beezer-fd640",
    storageBucket: "beezer-fd640.appspot.com",
    messagingSenderId: "1064330525630"
};
var fire = firebase.initializeApp(config);
export default fire;