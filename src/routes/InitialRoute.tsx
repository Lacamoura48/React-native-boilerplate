import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Welcome from '../screens/initialScreens/Welcome';

const Stack = createNativeStackNavigator();
const InitialRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default InitialRoute;

const styles = StyleSheet.create({});
