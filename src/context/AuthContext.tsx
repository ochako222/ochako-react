import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase-config';

const AuthContext = React.createContext({
    currentUser: '',
    login: () => {}
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState();

    async function login() {
        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider);

        setCurrentUser(result.user.email);
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user: any) => {
    //         setCurrentUser(user);
    //     });

    //     unsubscribe();
    // }, []);

    const value = {
        currentUser,
        login
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
