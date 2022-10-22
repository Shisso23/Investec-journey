import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppStackList} from './types';
import WelcomeScreen from '../../screens/welcome';

const AppStack = createStackNavigator<AppStackList>();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: true}}>
      <AppStack.Screen
        name="home"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
