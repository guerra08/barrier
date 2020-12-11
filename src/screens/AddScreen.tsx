import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarCodeScanner, BarCodeEvent } from 'expo-barcode-scanner';
import ButtonComponent from '../components/ButtonComponent';
import { useTheme } from 'react-native-paper';

export default function AddScreen() {

    const [hasPermission, setHasPermission] = useState(false);
    const [toScan, setToScan] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = (args: BarCodeEvent) => {
        setToScan(false);
    };

    const handleQRButtonPress = () => {
        setToScan(!toScan);
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            {toScan && <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />}
            {!toScan && <ButtonComponent 
                title="SCAN QR" 
                action={handleQRButtonPress} 
                isActive={true} 
                mode="contained"
                icon="plus-circle" />}
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