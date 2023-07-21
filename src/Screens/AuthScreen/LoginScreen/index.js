import {
  View,
  Text,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';
import CustomInput from '../../../Components/CustomInput';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleTapOutside = () => {
    Keyboard.dismiss();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={handleTapOutside}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Login</Text>
        <KeyboardAvoidingView
          style={styles.inputFormParent}
          enabled={true}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <CustomInput
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderText="Your E-mail"
            secureTextEntry={false}
            autoCapitalize={'none'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <CustomInput
            keyboardType="default"
            placeholder="Password"
            placeholderText="Password"
            secureTextEntry={true}
            autoCapitalize={'none'}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </KeyboardAvoidingView>
        <Text
          style={styles.forgotPasswordText}
          onPress={() => navigation.navigate('OTP')}>
          Forgot Password?
        </Text>
        <ButtonWithLoader title={'LOGIN'} />
        <Text style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Text
            style={styles.signupButtonText}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
