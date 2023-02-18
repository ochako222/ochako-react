import { Box, Button, Container, Heading } from '@chakra-ui/react';
import React from 'react';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

export const Articles: React.FC = () => {
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
    const db = getDatabase(app);

    const getUsers = async () => {
        const userRef = ref(db, `users/alex`);
        const snapshot = await get(userRef);

        console.log(snapshot.val());
    };

    return (
        <Container py={5}>
            <Box>
                <Heading as="h3" fontSize={20} mb={4}>
                    Articles
                </Heading>
            </Box>

            <Button onClick={getUsers}>Get users</Button>
        </Container>
    );
};

export default Articles;
