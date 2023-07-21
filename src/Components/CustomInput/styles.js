import {StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Constants} from '../../Assets/Constants';

const colors = Constants.colors;

export default StyleSheet.create({
  inputContainerView: {
    marginBottom: '5%',
    marginTop: '2.5%',
    backgroundColor: 'white',
  },
  placeholderText: {
    fontSize: responsiveFontSize(2),
    color: colors.defaultPlaceholderGray,
  },
  textInputContainer: {
    width: '100%',
    padding: '5.5%',
    borderRadius: responsiveFontSize(1.75),
    borderWidth: responsiveFontSize(0.125),
    borderColor: colors.defaultPlaceholderGray,
    color: colors.defaultBlack,
    fontFamily: 'Poppins-Medium',
    fontSize: responsiveFontSize(2),
  },
  textInputContainerFocused: {
    borderColor: colors.defaultOrange,
  },
  inputGroupParent: {
    marginBottom: '3%',
  },
});
