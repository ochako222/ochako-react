import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useCallback, useEffect, useState } from 'react';
import { auth } from '../firebase-config';

export const useAuth = () => {
    const [userEmail, setUserEmail] = useState('');

    // const login = useCallback((email: string) => {
    //     setUserEmail(email);
    // }, []);

    async function login() {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result.user.email);
        setUserEmail(result.user.email);
    }

    const logout = async () => {
        setUserEmail('');
    };

    //     useEffect(() => {
    //         // const unsubscribe = auth.onAuthStateChanged((user: any) => {
    //         //     setUserEmail(user.email);
    //         // });

    //         // unsubscribe();

    // //         const foo = async () => {
    // //             const provider = new GoogleAuthProvider();
    // //             const result = await signInWithPopup(auth, provider);

    // //             if (result) {
    // //                 login(result.user.email);
    // //             }
    // //         };
    // // s
    // //         foo();
    //     }, []);

    return {
        userEmail,
        login,
        logout
    };
};
