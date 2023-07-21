import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';
import CustomInput from '../../../Components/CustomInput';

const SignupScreen = () => {
  const navigation = useNavigation();
  const handleTapOutside = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleTapOutside}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Sign Up</Text>
        <KeyboardAvoidingView
          style={styles.inputFormParent}
          enabled={true}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <CustomInput
            keyboardType="default"
            placeholder="Full Name"
            placeholderText="Your Full Name"
            secureTextEntry={false}
          />
          <CustomInput
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderText="Your E-mail"
            secureTextEntry={false}
            autoCapitalize={'none'}
          />
          <CustomInput
            keyboardType="default"
            placeholder="Password"
            placeholderText="Password"
            secureTextEntry={true}
            autoCapitalize={'none'}
          />
        </KeyboardAvoidingView>
        <ButtonWithLoader title={'SIGN UP'} />
        <Text style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <Text
            style={styles.signupButtonText}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignupScreen;
