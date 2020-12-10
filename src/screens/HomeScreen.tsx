import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function HomeScreen() {

    const [hasAuth, setHasAuth] = useState(false);

    const doAuth = async () => {
        const auth = await LocalAuthentication.authenticateAsync();
        (auth.success) ? setHasAuth(true) : {};
    }

    if(!hasAuth)
        doAuth();

    return (
        hasAuth ? 
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        :
            <></>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});