import React from 'react';
import { useAppContext } from '../stores/AppContext';

export default function AuthScreen() {
    const { hasAuth, authenticate } = useAppContext();

    if(!hasAuth)
        authenticate();

    return(
        <></>
    )
}