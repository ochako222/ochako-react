import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // localStorage.setItem();
//             console.log(result);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

export const db = getDatabase(app);
