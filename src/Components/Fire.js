import firebase from 'firebase';

var firebaseConfig = {

    apiKey: "AIzaSyCdwkk7zob7yNDq3fe75ot_9vy3h5OjlB4",

    authDomain: "login-91659.firebaseapp.com",

    projectId: "login-91659",

    storageBucket: "login-91659.appspot.com",

    messagingSenderId: "543370460456",

    appId: "1:543370460456:web:e7020ee7181e4fcbcbe41d"

  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;