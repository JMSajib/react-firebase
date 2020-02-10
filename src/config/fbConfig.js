import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCN--QP5pHDOzBiABLbDcmt_LfT8CpGQtg",
    authDomain: "net-ninja-dbc61.firebaseapp.com",
    databaseURL: "https://net-ninja-dbc61.firebaseio.com",
    projectId: "net-ninja-dbc61",
    storageBucket: "net-ninja-dbc61.appspot.com",
    messagingSenderId: "269395233686",
    appId: "1:269395233686:web:c422cc3bce7542cfb26bb7",
    measurementId: "G-QMPY9TZ9XM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;