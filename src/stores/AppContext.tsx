import React, { createContext, useState, useContext, useEffect } from 'react'
import * as LocalAuthentication from 'expo-local-authentication';
import { GetSeconds } from '../utils/TimeUtils';

interface AppContextData {
    hasAuth: boolean;
    authenticate(): void;
    unauthenticate(): void;
    countdown: number;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
    const [hasAuth, setHasAuth] = useState(false);
    const [countdown, setCountdown] = useState(GetSeconds());

    useEffect(() => {
        const interval = setInterval(() => {
            const seconds = GetSeconds();
            if(seconds === 1){
                // UPDATE ALL ENTRIES
            }
            setCountdown(seconds);
        }, 500);
        return () => clearInterval(interval);
    });

    function authenticate(){
        LocalAuthentication.authenticateAsync().then(res => {
            (res.success) ? setHasAuth(true) : {};
        })
    }

    function unauthenticate(){
        setHasAuth(false);
    }

    return (
        <AppContext.Provider
            value={{ hasAuth, authenticate, unauthenticate, countdown}}>
            {children}
        </AppContext.Provider>
    );
}

function useAppContext() {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AppProvider.');
    }
  
    return context;
}

export {AppProvider, useAppContext};