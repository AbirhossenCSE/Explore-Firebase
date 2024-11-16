import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const authInfo = {
        name: 'Dhaka'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

