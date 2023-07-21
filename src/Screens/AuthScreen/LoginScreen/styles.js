import {StyleSheet} from 'react-native';
import {Constants} from '../../../Assets/Constants';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const colors = Constants.colors;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '7.5%',
    backgroundColor: colors.defaultWhite,
  },
  headingText: {
    fontSize: responsiveFontSize(4.5),
    fontFamily: 'Poppins-Bold',
    color: colors.defaultBlack,
    marginTop: '25%',
  },
  inputFormParent: {
    marginTop: '10%',
  },
  forgotPasswordText: {
    fontSize: responsiveFontSize(1.75),
    fontFamily: 'Poppins-Medium',
    color: colors.defaultOrange,
    textAlign: 'center',
    marginTop: '3%',
  },
  signupContainer: {
    fontSize: responsiveFontSize(1.75),
    fontFamily: 'Poppins-Medium',
    marginTop: '12%',
    alignSelf: 'center',
  },
  signupText: {
    color: colors.defaultBlack,
  },
  signupButtonText: {
    color: colors.defaultOrange,
  },
});
