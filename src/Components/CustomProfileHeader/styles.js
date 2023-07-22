import {StyleSheet, Platform} from 'react-native';
import {Constants} from '../../Assets/Constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const colors = Constants.colors;

export default StyleSheet.create({
  headerContainer: {
    height: Platform.OS === 'ios' ? responsiveHeight(12) : responsiveHeight(10),
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.defaultOrange,
    alignItems: 'flex-end',
    borderBottomRightRadius: responsiveFontSize(1.5),
    borderBottomLeftRadius: responsiveFontSize(1.5),
  },
  nameText: {
    fontSize: responsiveFontSize(2.75),
    fontFamily: 'Poppins-SemiBold',
    color: colors.defaultBlack,
  },
  settingsIcon: {
    fontSize: responsiveFontSize(4),
    padding: responsiveWidth(2.25),
    color: colors.defaultWhite,
  },
});
