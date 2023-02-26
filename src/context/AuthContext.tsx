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
    const [, setUserToken] = useState<string | null>(null);
    const [userId, setUserId] = useState(null);

    const login = useCallback((token: string) => {
        setUserToken(token);
        setUserId(jwt_decode(token).user_id);

        localStorage.setItem(
            storageName,
            JSON.stringify({
                token
            })
        );
    }, []);

    const logout = useCallback(() => {
        setUserToken(null);
        setUserId(null);

        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        console.log('Auth');
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.token);
        }
    }, [login]);

    return {
        login,
        logout,
        userId
    };
};
