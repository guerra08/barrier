import React from 'react';
import { useAuth } from '../stores/AuthContext';

export default function AuthScreen() {
    const { hasAuth, authenticate } = useAuth();

    if(!hasAuth)
        authenticate();

    return(
        <></>
    )
}