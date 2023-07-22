import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';
import CustomInput from '../../../Components/CustomInput';
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleTapOutside = () => {
    Keyboard.dismiss();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  const onTapSignup = async () => {
    if (email && password.length >= 6 && fullname) {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => Alert.alert('Error Occured: ', error));
    }
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
            value={fullname}
            onChangeText={text => setFullname(text)}
          />
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
        <ButtonWithLoader title={'SIGN UP'} onPress={onTapSignup} />
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
