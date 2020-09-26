// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase/app";
  import 'firebase/firestore';
    import 'firebase/auth';
  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDayH9dkfT9ZzASxdLJ0W8Rg_vXV4nsbgw",
        authDomain: "todo-app-cp-9a3f9.firebaseapp.com",
        databaseURL: "https://todo-app-cp-9a3f9.firebaseio.com",
        projectId: "todo-app-cp-9a3f9",
        storageBucket: "todo-app-cp-9a3f9.appspot.com",
        messagingSenderId: "958964350343",
        appId: "1:958964350343:web:e1e9d04d8552b37efc6722",
        measurementId: "G-7BG79KYBTX"
  });

  const db = firebaseApp.firestore();
  export default db;