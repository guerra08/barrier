import React, { createContext, useState, useContext } from 'react'
import * as LocalAuthentication from 'expo-local-authentication';

interface AuthContextData {
    hasAuth: boolean;
    authenticate(): void;
    unauthenticate(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [hasAuth, setHasAuth] = useState(false);

    function authenticate(){
        LocalAuthentication.authenticateAsync().then(res => {
            (res.success) ? setHasAuth(true) : {};
        })
    }

    function unauthenticate(){
        setHasAuth(false);
    }

    return (
        <AuthContext.Provider
            value={{ hasAuth, authenticate, unauthenticate }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider.');
    }
  
    return context;
}

export {AuthProvider, useAuth};