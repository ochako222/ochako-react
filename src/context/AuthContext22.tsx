import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase-config';

export const AuthContext = React.createContext({
    currentUser: '',
    login: () => {},
    logout: () => {}
});

export default AuthContext;
