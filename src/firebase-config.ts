import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBNghR9OimZqPRsTCBuBwZaJCSOOKtjAR4',
    authDomain: 'alex-pomidoro.firebaseapp.com',
    databaseURL: 'https://alex-pomidoro-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'alex-pomidoro',
    storageBucket: 'alex-pomidoro.appspot.com',
    messagingSenderId: '752885762949',
    appId: '1:752885762949:web:0d3c31a1301995112352ec'
};

let app = null;

if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
}

export const auth = app ? getAuth(app) : null;
export const db = app ? getDatabase(app) : null;
