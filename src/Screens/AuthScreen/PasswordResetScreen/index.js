import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';
import CustomInput from '../../../Components/CustomInput';

const PasswordResetScreen = () => {
  const handleTapOutside = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleTapOutside}>
      <View style={styles.container}>
        <View style={styles.resetPassHeadingView}>
          <Text style={styles.resetPassHeading}>Reset Password</Text>
          <Text style={styles.resetPassSubHeading}>
            Please enter your email address to request a password reset
          </Text>
        </View>
        <View style={styles.resetPassInputView}>
          <CustomInput
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderText="Your E-mail"
            secureTextEntry={false}
            autoCapitalize={'none'}
          />
        </View>
        <ButtonWithLoader title={'REQUEST PASSWORD CHANGE'} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PasswordResetScreen;
