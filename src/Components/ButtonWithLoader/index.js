import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const ButtonWithLoader = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;
