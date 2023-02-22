import React, { useState, useCallback, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext({
    isLoggedIn: false,
    login: (email: string) => {},
    logout: () => {}
});

const storageName = 'userData';

export const useAuth = () => {
    const [userToken, setUserToken] = useState<string | null>(null);
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
