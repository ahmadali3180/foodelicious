import {
  View,
  Text,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';
import CustomInput from '../../../Components/CustomInput';

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const handleTapOutside = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleTapOutside}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Create New Password</Text>
        <KeyboardAvoidingView
          style={styles.inputFormParent}
          enabled={true}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <CustomInput
            keyboardType="default"
            placeholder="New Password"
            placeholderText="New Password"
            secureTextEntry={false}
            autoCapitalize={'none'}
          />
          <CustomInput
            keyboardType="default"
            placeholder="Confirm Password"
            placeholderText="Confirm Password"
            secureTextEntry={true}
            autoCapitalize={'none'}
          />
        </KeyboardAvoidingView>
        <ButtonWithLoader title={'RESET PASSWORD'} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewPasswordScreen;
