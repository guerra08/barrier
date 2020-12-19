import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { useAppContext } from './stores/AppContext';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import AuthScreen from './screens/AuthScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function Router() {

  const { hasAuth } = useAppContext();

  return (
    <>
      {hasAuth ?
        (<Tab.Navigator
          initialRouteName="Home"
          shifting={true}
          sceneAnimationEnabled={false}
          barStyle={{ backgroundColor: '#694fad' }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: 'home-account'
          }} />
          <Tab.Screen name="Add" component={AddScreen} options={{
            tabBarIcon: 'plus-box'
          }} />
        </Tab.Navigator>)
        :
        (<Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthScreen} options={{
            headerShown: false
          }}/>
        </Stack.Navigator>)
      }
    </>
  )
}