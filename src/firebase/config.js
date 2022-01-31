import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADGZ-HRG90HodEV_N56toQ6KmRu-kQQwY",
  authDomain: "diecolgar-finance-tracker.firebaseapp.com",
  projectId: "diecolgar-finance-tracker",
  storageBucket: "diecolgar-finance-tracker.appspot.com",
  messagingSenderId: "546681417490",
  appId: "1:546681417490:web:24a327e11e912a255bcdcb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }