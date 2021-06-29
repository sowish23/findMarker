/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { AppRegistry } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import TakePhoto from './src/camera';
import Main from './src/main';

AppRegistry.registerComponent('cameraTest', () => Application);


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createStackNavigator();

  return (
    // <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Camera">
          <Stack.Screen name="TakePhoto" component={TakePhoto} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
