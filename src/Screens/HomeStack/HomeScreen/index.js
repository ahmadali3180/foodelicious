import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CustomScreenHeader from '../../../Components/CustomScreenHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomScreenHeader />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
