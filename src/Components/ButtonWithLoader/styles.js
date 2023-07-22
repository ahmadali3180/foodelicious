import {StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Constants} from '../../Assets/Constants';

const colors = Constants.colors;

export default StyleSheet.create({
  loginButton: {
    marginTop: '7.5%',
    padding: '3%',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: colors.defaultOrange,
    borderRadius: responsiveFontSize(5),
  },
  loginButtonText: {
    textAlign: 'center',
    color: colors.defaultWhite,
    fontSize: responsiveFontSize(2.25),
    fontFamily: 'Poppins-SemiBold',
  },
});
