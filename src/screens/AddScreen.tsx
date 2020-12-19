import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarCodeScanner, BarCodeEvent } from 'expo-barcode-scanner';
import { useTheme, TextInput, Divider } from 'react-native-paper';
import * as OTPAuth from 'otpauth';

import ButtonComponent from '../components/ButtonComponent';
import { Generate } from '../utils/OTPUtils';

export default function AddScreen() {

    const [hasPermission, setHasPermission] = useState(false);
    const [toScan, setToScan] = useState(false);
    const [text, setText] = useState('');

    const theme = useTheme();

    const askForPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    }

    const handleBarCodeScanned = (args: BarCodeEvent) => {
        const token = Generate(args.data);
        console.log(token);
        setToScan(false);
    };

    const handleQRButtonPress = () => {
        if (!hasPermission)
            askForPermissions();
        else
            setToScan(!toScan);
    }

    const handleAddButtonPress = () => {
        if(text && text.trim().length > 0){
            console.log('implement');
        }
    }

    const handleCloseButtonPress = () => {
        setToScan(false);
    }

    if (toScan) {
        return(
            <View style={[styles.scannerContainer, { backgroundColor: theme.colors.background }]}>
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                <ButtonComponent
                    title="CLOSE"
                    action={handleCloseButtonPress}
                    isActive={true}
                    mode="contained"
                    icon="close" />
            </View>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ButtonComponent
                title="SCAN QR"
                action={handleQRButtonPress}
                isActive={true}
                mode="contained"
                icon="camera" />
            <Divider theme={theme}/>
            <TextInput
                label='Code'
                value={text}
                mode='outlined'
                theme={theme}
                style={[styles.textField]}
                onChangeText={text => setText(text)} />
            <ButtonComponent
                title="ADD"
                action={handleAddButtonPress}
                isActive={true}
                mode="contained"
                icon="plus-circle" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 16,
        justifyContent: 'center'
    },
    scannerContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        width: '100%',
        height: '100%',
        padding: 16,
    },
    text: {
        alignSelf: 'center',
        marginTop: 16,
        fontSize: 24
    },
    textField: {
        marginBottom: 16
    }
});