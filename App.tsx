/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import InitialRoute from './src/routes/InitialRoute';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      
      <InitialRoute />
    </NavigationContainer>
  );
}

export default App;
