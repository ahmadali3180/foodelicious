import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Verification Code</Text>
        <Text style={styles.subHeadingText}>
          Please type the verification code sent to prelookstudio@gmail.com
        </Text>
      </View>
      <View style={styles.OTPInputParent}>
        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />
      </View>
      <Text style={styles.resendTextSecondary}>
        I don’t recevie a code!{' '}
        <Text style={styles.resendTextPrimary}>Please resend</Text>
      </Text>
    </View>
  );
};

const CustomInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const [text, setText] = useState('');

  const handleTextChange = newText => {
    setText(newText);
  };
  return (
    <View style={styles.OTPInputContainer}>
      <TextInput
        style={[styles.OTPInputField, isFocused && styles.OTPInputFieldFocused]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={text}
        onChangeText={handleTextChange}
        maxLength={1}
      />
    </View>
  );
};

export default OTPScreen;
