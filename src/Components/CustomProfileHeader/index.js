import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomProfileHeader = ({name}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <AntDesign name="setting" style={styles.settingsIcon} />
    </View>
  );
};

export default CustomProfileHeader;
