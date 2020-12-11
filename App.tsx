import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme, DefaultTheme } from 'react-native-paper';

import { AuthProvider } from './src/stores/AuthContext';
import Router from './src/Router';
import { useColorScheme } from 'react-native';

export default function App() {

  const systemTheme = useColorScheme();
  const theme = (systemTheme === 'dark') ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}