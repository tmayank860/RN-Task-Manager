/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box, Text, Image} from '@gluestack-ui/themed';
import AppNavigator from './modules/navigation/appNavigation';
import { config } from './modules/appTheme/appThemePhone';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };

  return (
      <GluestackUIProvider config={config}>
         <AppNavigator/>
      </GluestackUIProvider>
  );
}

export default App;
