import Firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyABrjG9CLPzMdfzl7_0y958sOQzDUAwr6Q",
    authDomain: "workout-challenge-622cd.firebaseapp.com",
    databaseURL: "https://workout-challenge-622cd.firebaseio.com",
    projectId: "workout-challenge-622cd",
    storageBucket: "workout-challenge-622cd.appspot.com",
    messagingSenderId: "10971350530"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()