import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AuthProvider } from './src/stores/AuthContext';
import { useColorScheme } from 'react-native';

import Router from './src/Router';

export default function App() {

  const colorScheme = useColorScheme();
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}