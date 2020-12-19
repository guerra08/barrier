import React, { createContext, useState, useContext, useEffect } from 'react'
import * as LocalAuthentication from 'expo-local-authentication';
import { GetCurrentSeconds } from '../utils/TimeUtils';

interface AppContextData {
    hasAuth: boolean;
    authenticate(): void;
    unauthenticate(): void;
    countdown: number;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
    const [hasAuth, setHasAuth] = useState(false);
    const [countdown, setCountdown] = useState(30)

    useEffect(() => {
        const interval = setInterval(() => {
            const updated = countdown - 1;
            if(updated === 0){
                // UPDATE ALL ENTRIES
                console.log('update entries');
                setCountdown(30);
            }
            else
                setCountdown(updated);
        }, 1000);
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