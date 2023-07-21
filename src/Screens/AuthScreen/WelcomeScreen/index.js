import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonWithLoader from '../../../Components/ButtonWithLoader';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../Assets/Images/WelcomeBg.jpg')}
        style={styles.imageBackground}>
        <View style={styles.headingView}>
          <Text style={styles.welcomeTextSecondary}>Welcome to</Text>
          <Text style={styles.welcomeTextPrimary}>FOODELICIOUS</Text>
          <Text style={styles.welcomeTextSubtitle}>
            Your favourite food delivered fast at your door
          </Text>
        </View>
        <View style={styles.loginView}>
          <Text style={styles.loginWithText}>Choose an option to Login</Text>
          <View style={styles.loginOptionContainer}>
            <View style={styles.socialLoginContainer}>
              <TouchableOpacity style={styles.socialLoginButton}>
                <Text style={styles.socialLoginButtonText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialLoginButton}>
                <Text style={styles.socialLoginButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>
            <ButtonWithLoader
              title={'CONTINUE WITH EMAIL'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
