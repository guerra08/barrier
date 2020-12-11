import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner, BarCodeEventCallbackArguments } from 'expo-barcode-scanner';
import ButtonComponent from '../components/ButtonComponent';

export default function AddScreen() {

    const [hasPermission, setHasPermission] = useState(false);
    const [toScan, setToScan] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = (args: BarCodeEventCallbackArguments) => {
        setToScan(false);
    };

    const handleQRButtonPress = () => {
        setToScan(!toScan);
    }

    return (
        <View style={styles.container}>
            {toScan && <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />}
            {!toScan && <ButtonComponent title="SCAN QR" action={handleQRButtonPress} isActive={true}></ButtonComponent>}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});