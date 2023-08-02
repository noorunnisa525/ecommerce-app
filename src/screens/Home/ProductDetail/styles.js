import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flex: 1,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: wp(5),
      justifyContent: 'space-between',
    },
    backIcon: {
      height: wp(7),
      width: wp(7),
    },
    cartIcon: {
      height: wp(6),
      width: wp(6),
    },
    carouselHeight: wp(60),
    carouselWidth: wp(90),
    carouselContainer: {
      backgroundColor: theme.color.avatarColor,
      borderRadius: theme.borders.radius2,
    },
    carouselImage: {
      height: wp(60),
      width: wp(85),
    },
    productName: {
      fontSize: theme.size.small,
      fontFamily: theme.family.medium,
    },
    starSize: wp(5.5),
    reviewContainer: {
      marginVertical: hp(0.5),
      flexDirection: 'row',
      alignItems: 'center',
    },
    reviewText: {
      color: theme.color.textGray,
      fontFamily: theme.family.medium,
      marginLeft: wp(2),
    },
    priceView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    priceText: {
      fontSize: theme.size.large,
      fontFamily: theme.family.semiBold,
    },
    availabilityText: {
      color: theme.color.textGreen,
      fontFamily: theme.family.medium,
    },
    descriptionText: {
      color: theme.color.textGray,
    },
    selectionView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: hp(2),
    },
    subcategory: {
      fontSize: theme.size.medium,
      color: theme.color.textGray,
      fontFamily: theme.family.medium,
      marginRight: wp(3),
      width: wp(15),
    },
    sizeText: {
      fontSize: theme.size.small,
      backgroundColor: theme.color.avatarColor,
      height: wp(10),
      width: wp(10),
      textAlign: 'center',
      textAlignVertical: 'center',
      marginHorizontal: wp(2),
      borderRadius: theme.borders.radius4,
    },
    selectedSize: {
      color: theme.color.textWhite,
      backgroundColor: theme.color.primaryButton,
    },
    footer: {
      width: wp(18),
    },
    colorView: {
      height: wp(10),
      width: wp(10),
      borderRadius: theme.borders.radius4,
    },
    colorBorder: {
      height: wp(12.5),
      width: wp(12.5),
      alignItems: 'center',
      borderWidth: 2,
      padding: wp(0.75),
      marginHorizontal: wp(1),
      borderRadius: theme.borders.radius4,
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: wp(80),
      marginVertical: hp(2),
    },
    topBarText: {
      fontFamily: theme.family.medium,
      textDecorationLine: 'underline',
      color: theme.color.textBlack,
    },
    buttonContainer: {
      paddingHorizontal: wp(5),
      marginVertical: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bagBtn: {
      width: wp(65),
    },
    cartBtnStyle: {
      height: wp(6),
      width: wp(6),
    },
    bagText: {
      marginLeft: wp(3),
    },
    heartBtn: {
      width: wp(15),
      backgroundColor: theme.color.inputBorder,
    },
    heartBtnStyle: {
      height: wp(8),
      width: wp(8),
    },
  });
  return styles;
};
export default createStyles;
