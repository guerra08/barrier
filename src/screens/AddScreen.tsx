import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarCodeScanner, BarCodeEvent } from 'expo-barcode-scanner';
import ButtonComponent from '../components/ButtonComponent';
import { useTheme, TextInput, Text } from 'react-native-paper';
const totp = require('totp-generator');

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
            const token = totp(text);
            console.log(token);
        }
    }

    if (toScan) {
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ButtonComponent
                title="SCAN QR"
                action={handleQRButtonPress}
                isActive={true}
                mode="contained"
                icon="camera" />
            <Text style={[styles.text, { color: theme.colors.primary }]}>OR</Text>
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
    text: {
        alignSelf: 'center',
        marginTop: 16,
        fontSize: 24
    },
    textField: {
        marginBottom: 16
    }
});