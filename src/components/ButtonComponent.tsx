import React from 'react';
import { Button } from 'react-native';

interface IButtonProps{
    action(): void;
    title: string;
    isActive: boolean;
}

export default function ButtonComponent(props: IButtonProps){

    return(
        <>
            <Button onPress={props.action} title={props.title}/>
        </>
    )

}