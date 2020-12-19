import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import CountdownComponent from '../components/CountdownComponent';
import { getAllEntries, purgeEntries } from '../services/EntryService';
import { GenerateTOTP } from '../utils/OTPUtils';

export default function HomeScreen() {

    const theme = useTheme();
    const [data, setData] = useState([]);

    useFocusEffect(
        useCallback(() => {
            getAllEntries().then(data => setData(data));
        }, [])
    );

    const updateOnTime = () => {
        getAllEntries().then(data => setData(data));
    }

    if (!data) {
        return (
            <View style={[styles.emptyContainer, { backgroundColor: theme.colors.background }]}>
                <Text>No entries found 😢</Text>
            </View>
        )
    }
    else {
        return (
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <CountdownComponent action={updateOnTime} />
                <List.Section>
                    {data.map(elem => {
                        const totp = GenerateTOTP(elem);
                        return <List.Item
                            key={totp}
                            title={totp.issuer}
                            description={totp.generate()}
                            left={(props) => <List.Icon {...props} icon='google' />}
                        />
                    })}
                </List.Section>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    emptyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});