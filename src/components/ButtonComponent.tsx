import React from 'react';
import { Button } from 'react-native-paper';

interface IButtonProps{
    action(): void;
    title: string;
    isActive: boolean;
    mode: "text" | "outlined" | "contained" | undefined;
    icon: string
}

export default function ButtonComponent(props: IButtonProps){

    return(
        <>
            <Button icon={props.icon} mode={props.mode} onPress={props.action} disabled={!props.isActive}>{props.title}</Button>
        </>
    )

}