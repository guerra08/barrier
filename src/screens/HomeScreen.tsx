import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';

export default function HomeScreen() {

    const theme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <List.Section>
                <List.Item
                    title="Microsoft Account" 
                    description="Item description"
                    left={(props) => <List.Icon {...props} icon="microsoft" />} />
                <List.Item
                    title="Google Account"
                    description="Item description"
                    left={(props) => <List.Icon {...props} icon="google" />}
                />
            </List.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});