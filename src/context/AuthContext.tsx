import React, { useContext, useState, createContext, useCallback, useEffect } from 'react';

export const AuthContext = React.createContext({
    isLoggedIn: false,
    login: (email: string) => {},
    logout: () => {}
});

const storageName = 'userData';

export const useAuth = () => {
    const [userEmail, setUserEmail] = useState(null);

    const login = useCallback((email: string) => {
        setUserEmail(email);

        localStorage.setItem(
            storageName,
            JSON.stringify({
                email
            })
        );
    }, []);

    const logout = useCallback(() => {
        setUserEmail(null);

        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.email) {
            login(data.email);
        }
    }, [login]);

    return {
        login,
        logout,
        userEmail
    };
};
