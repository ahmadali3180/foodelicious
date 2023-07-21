import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNaviagtor from './src/Navigators';
import {StatusBar} from 'react-native';
import {Constants} from './src/Assets/Constants';
const colors = Constants.colors;

const MainApp = () => {
  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor={colors.defaultBlack} />
      <RootNaviagtor />
    </NavigationContainer>
  );
};

export default MainApp;
