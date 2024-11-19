import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [ user, setUser] = useState(null);
    const [ loading, setLoading ] = useState(true);
    

    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (UpdatedData) =>{
        return updateProfile(auth.currentUser, UpdatedData);
    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        LogOut,
        userLogin,
        loading,
        updateUserProfile
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    }, []);

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;