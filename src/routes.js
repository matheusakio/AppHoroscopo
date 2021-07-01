import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home'
import SignosScreen from './pages/Signos'
import SplashScreen from './pages/Splash'



const Routes = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signos" component={SignosScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )

}
export default Routes;