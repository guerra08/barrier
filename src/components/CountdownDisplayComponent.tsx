import React from 'react';
import { Text } from 'react-native-paper';

import { useAppContext } from '../stores/AppContext';

export default function CountdownDisplayComponent() {
    
    const { countdown } = useAppContext(); 

    return (
        <>
            <Text>{countdown}</Text>
        </>
    )

}