import {StyleSheet, Platform} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Constants} from '../../Assets/Constants';

const colors = Constants.colors;
export default StyleSheet.create({
  headerConatiner: {
    height: Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(8),
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(4),
  },
  menuButtonContainer: {
    marginRight: 'auto',
    borderRadius: responsiveFontSize(1),
    backgroundColor: colors.defaultWhite,
    padding: responsiveWidth(0.5),
    shadowColor: colors.defaultBlack,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  deliveryAddressContainer: {
    marginRight: 'auto',
  },
  menuButtonStyle: {
    fontSize: 28,
    color: colors.defaultBlack,
  },
  addressText: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-SemiBold',
    color: colors.defaultOrange,
  },
});
