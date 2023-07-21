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
  resetPassHeadingView: {
    marginBottom: '10%',
  },
  resetPassHeading: {
    fontSize: responsiveFontSize(4.5),
    fontFamily: 'Poppins-Bold',
    color: colors.defaultBlack,
    marginTop: '25%',
  },
  resetPassSubHeading: {
    fontSize: responsiveFontSize(1.75),
    fontFamily: 'Poppins-Medium',
    marginTop: '2.5%',
    color: colors.defaultPlaceholderGray,
  },
  resetPassInputView: {
    marginBottom: '20%',
  },
});
