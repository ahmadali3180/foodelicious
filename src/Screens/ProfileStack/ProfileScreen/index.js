import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import CustomProfileHeader from '../../../Components/CustomProfileHeader';

const ProfileScreen = () => {
  const onLogoutPressed = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const user = useSelector(state => state.user.user);
  return (
    <View style={styles.container}>
      <CustomProfileHeader name={user.displayName} />
      <ButtonWithLoader title={'LOGOUT'} onPress={onLogoutPressed} />
    </View>
  );
};

export default ProfileScreen;
