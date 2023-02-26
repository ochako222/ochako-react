/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useCallback, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext({
    isLoggedIn: false,
    login: (token: string) => {},
    logout: () => {}
});

const storageName = 'userData';

export const useAuth = () => {
    const [userId, setUserId] = useState('');

    const login = useCallback((token: string) => {
        const userInfoFromToken = jwt_decode(token) as { user_id: string };

        setUserId(userInfoFromToken.user_id);

        localStorage.setItem(
            storageName,
            JSON.stringify({
                token
            })
        );
    }, []);

    const logout = useCallback(() => {
        setUserId('');

        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        console.log('Auth');

        const storage = localStorage.getItem(storageName);

        if (storage) {
            const data = JSON.parse(storage);

            if (data.token) {
                login(data.token);
            }
        }
    }, [login]);

    return {
        login,
        logout,
        userId
    };
};
