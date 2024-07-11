import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvCUxqAkiWoxthCnenzhApex8cyGft8Fo",
    authDomain: "cursoreact-697d9.firebaseapp.com",
    projectId: "cursoreact-697d9",
    storageBucket: "cursoreact-697d9.appspot.com",
    messagingSenderId: "665012343493",
    appId: "1:665012343493:web:e67ad02006f20d4670d6ac",
    measurementId: "G-WWXNR9CHMV"
  };

  const firebaseApp = initializeApp (firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};