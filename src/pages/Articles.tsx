import { Box, Button, Container, Heading, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';

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

    const [user, setUser] = useState({ name: '', lastName: '' });

    useEffect(() => {
        const getUsers = async () => {
            const userRef = ref(db, `users/alex`);
            const snapshot = await get(userRef);
            setUser(snapshot.val());
        };

        getUsers();
    }, []);

    const postChanges = () => {
        set(ref(db, `users/alex`), {
            name: user.name,
            lastName: user.lastName
        });
    };

    const handleInputChange1 = (event: { target: any }) => {
        const { target } = event;
        const { value } = target;

        setUser({
            name: value,
            lastName: user.lastName
        });
    };

    const handleInputChange2 = (event: { target: any }) => {
        const { target } = event;
        const { value } = target;

        setUser({
            name: user.name,
            lastName: value
        });
    };

    return (
        <Container py={5}>
            <Box>
                <Heading as="h3" fontSize={20} mb={4}>
                    Articles
                </Heading>
                <p>{user.name}</p>
                <p>{user.lastName}</p>
            </Box>

            <Button onClick={postChanges}>Post changes to BE</Button>

            <Input onChange={handleInputChange1} />
            <Input onChange={handleInputChange2} />
        </Container>
    );
};

export default Articles;
