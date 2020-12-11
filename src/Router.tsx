import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from './stores/AuthContext';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import AuthScreen from './screens/AuthScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Router() {

  const { hasAuth } = useAuth();

  return (
    <>
      {hasAuth ?
        (<Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Ionicons name="md-home-outline" size={size} color={color} />;
            } else if (route.name === 'Add') {
              return <Ionicons name="md-add-outline" size={size} color={color} />;
            }
          }
        })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
        </Tab.Navigator>)
        :
        (<Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>)
      }
    </>
  )
}