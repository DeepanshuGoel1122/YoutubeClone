
import firebase from 'firebase/compat/app';

// import 'firebase/auth';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCz027McDDb2LfFL4icBcAoRK3nzUAJ0so",
    authDomain: "clone1-yt.firebaseapp.com",
    projectId: "clone1-yt",
    storageBucket: "clone1-yt.appspot.com",
    messagingSenderId: "23640985264",
    appId: "1:23640985264:web:67a86e5aa26ae043c1f575"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();