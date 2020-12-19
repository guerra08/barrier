import React from 'react';
import { Button } from 'react-native-paper';
import ButtonProps from '../interfaces/ButtonProps';

export default function ButtonComponent(props: ButtonProps){

    return(
        <>
            <Button 
                icon={props.icon} 
                mode={props.mode} 
                onPress={props.action} 
                disabled={!props.isActive}>
                    {props.title}
            </Button>
        </>
    )

}