import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyBNghR9OimZqPRsTCBuBwZaJCSOOKtjAR4',
    authDomain: 'alex-pomidoro.firebaseapp.com',
    databaseURL: 'https://alex-pomidoro-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'alex-pomidoro',
    storageBucket: 'alex-pomidoro.appspot.com',
    messagingSenderId: '752885762949',
    appId: '1:752885762949:web:0d3c31a1301995112352ec'
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
