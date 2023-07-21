import {StyleSheet, Platform, StatusBar} from 'react-native';
import {Constants} from '../../../Assets/Constants';
const colors = Constants.colors;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  headingView: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '20%',
  },
  welcomeTextSecondary: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: colors.defaultBlack,
  },
  welcomeTextPrimary: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: colors.defaultOrange,
  },
  welcomeTextSubtitle: {
    fontSize: 17,
    color: colors.defaultBlueGray,
  },
  // Login Options View

  loginView: {
    flex: 1,
  },
  loginWithText: {
    fontSize: 21,
    color: colors.defaultBlack,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  loginOptionContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  socialLoginContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialLoginButton: {
    padding: 16,
    backgroundColor: colors.defaultLightGray,
    borderRadius: 40,
    width: '37.5%',
  },
  socialLoginButtonText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: colors.defaultBlack,
  },
  emailLoginButton: {
    borderRadius: 40,
    backgroundColor: colors.defaultOrange,
    padding: 16,
    width: '70%',
    marginTop: '8%',
  },
  emailLoginButtonText: {
    fontSize: 18,
    color: colors.defaultWhite,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
