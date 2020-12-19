import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-paper';
import CountdownComponentProps from '../interfaces/CountdownComponentProps';

import { useAppContext } from '../stores/AppContext';

export default function CountdownComponent(props: CountdownComponentProps) {
    
    const { countdown } = useAppContext(); 

    useEffect(() => {
        if(countdown === 1){
            props.action();
        }
    }, [countdown])

    return (
        <>
            <Text>{countdown}</Text>
        </>
    )

}