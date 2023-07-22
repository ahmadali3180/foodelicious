import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const onLogoutPressed = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: '10%'}}>ProfileScreen</Text>
      <ButtonWithLoader title={'LOGOUT'} onPress={onLogoutPressed} />
    </View>
  );
};

export default ProfileScreen;
