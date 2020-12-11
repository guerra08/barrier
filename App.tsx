import React from 'react';
import Router from './src/Router';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/stores/AuthContext';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </NavigationContainer>
  );
}
