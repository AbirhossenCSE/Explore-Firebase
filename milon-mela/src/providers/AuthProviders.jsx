import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const name = 'Abir';

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    onAuthStateChanged(auth, currentUser =>{
        if (currentUser) {
            console.log('Currently looged in', currentUser)
            setUser(currentUser);
        }
        else{
            console.log('No user Logged in');
            setUser(null);
        }
    })
    
    const authInfo = {
        name,
        user,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

