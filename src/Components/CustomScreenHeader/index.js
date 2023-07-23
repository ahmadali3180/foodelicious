import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Menu from 'react-native-vector-icons/MaterialIcons';

const CustomScreenHeader = () => {
  const onPressMenuButton = () => {
    console.log('Menu Button Tapped');
  };
  return (
    <View style={styles.headerConatiner}>
      <View style={styles.menuButtonContainer} onPress={onPressMenuButton}>
        <Menu name="menu" style={styles.menuButtonStyle} />
      </View>
      <View style={styles.deliveryAddressContainer}>
        <Text style={styles.addressText}>40 Grand Mosque Street</Text>
      </View>
    </View>
  );
};

export default CustomScreenHeader;
