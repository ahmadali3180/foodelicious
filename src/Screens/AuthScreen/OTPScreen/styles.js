import {StyleSheet} from 'react-native';
import {Constants} from '../../../Assets/Constants';
const colors = Constants.colors;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '7.5%',
    backgroundColor: colors.defaultWhite,
  },
  headingContainer: {
    marginTop: '35%',
  },
  headingText: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: colors.defaultBlack,
  },
  subHeadingText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: '2.5%',
    color: colors.defaultPlaceholderGray,
  },
  OTPInputParent: {
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  OTPInputContainer: {
    width: '20%',
  },
  OTPInputField: {
    borderRadius: 14,
    padding: '25%',
    borderColor: colors.defaultPlaceholderGray,
    borderWidth: 1,
    fontSize: 21,
    fontFamily: 'Poppins-Bold',
    color: colors.defaultOrange,
    textAlign: 'center',
  },
  OTPInputFieldFocused: {
    borderColor: colors.defaultOrange,
  },
  resendTextSecondary: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: '10%',
    textAlign: 'center',
    color: colors.defaultBlack,
  },
  resendTextPrimary: {
    color: colors.defaultOrange,
  },
});
