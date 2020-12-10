import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name="md-home-outline" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <Ionicons name="md-checkmark-circle" size={size} color={color} />;
          }
        }
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}