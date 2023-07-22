import {StyleSheet, Platform, StatusBar} from 'react-native';
import {Constants} from '../../../Assets/Constants';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
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
    paddingHorizontal: responsiveWidth(5),
    marginTop: responsiveWidth(20),
  },
  welcomeTextSecondary: {
    fontSize: responsiveFontSize(3.25),
    fontFamily: 'Poppins-Bold',
    color: colors.defaultBlack,
  },
  welcomeTextPrimary: {
    fontSize: responsiveFontSize(3.9),
    fontFamily: 'Poppins-Bold',
    color: colors.defaultOrange,
  },
  welcomeTextSubtitle: {
    fontSize: responsiveFontSize(2),
    color: colors.defaultBlueGray,
  },
  // Login Options View

  loginView: {
    flex: 1,
  },
  loginWithText: {
    fontSize: responsiveFontSize(2.25),
    color: colors.defaultBlack,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  loginOptionContainer: {
    alignItems: 'center',
    marginTop: responsiveWidth(10),
  },
  socialLoginContainer: {
    width: '100%',
    padding: responsiveWidth(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLoginButton: {
    padding: responsiveWidth(3),
    backgroundColor: colors.defaultPlaceholderGray,
    borderRadius: responsiveFontSize(5),
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLoginButtonText: {
    fontSize: responsiveFontSize(2.125),
    fontFamily: 'Poppins-Medium',
    color: colors.defaultBlack,
  },
  emailLoginButton: {
    borderRadius: responsiveFontSize(5),
    backgroundColor: colors.defaultOrange,
    padding: responsiveFontSize(2),
    width: '70%',
    marginTop: '8%',
  },
});
