import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../../App';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
  );
};

export default AppStack;
