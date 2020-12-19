import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, useTheme, Text } from 'react-native-paper';
import { useAppContext } from '../stores/AppContext';

export default function HomeScreen() {

    const theme = useTheme();
    const { countdown } = useAppContext();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <List.Section>
                <List.Item
                    title="Microsoft Account" 
                    description="Item description"
                    left={(props) => <List.Icon {...props} icon="microsoft" />} 
                    right={() => <Text>{countdown}</Text>} />
                <List.Item
                    title="Google Account"
                    description="Item description"
                    left={(props) => <List.Icon {...props} icon="google" />}
                    right={() => <Text>{countdown}</Text>}
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