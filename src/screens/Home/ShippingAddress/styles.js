import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flex: 1,
      paddingBottom: hp(2),
    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    container: {
      marginTop: hp(0.1),
      paddingBottom: hp(2),
      backgroundColor: theme.color.textWhite,
      justifyContent: 'space-between',
    },
    backIcon: {
      height: wp(7),
      width: wp(7),
    },
    checkoutText: {
      textAlign: 'center',
    },
    itemText: {
      fontSize: theme.size.small,
      alignSelf: 'center',
      marginVertical: hp(1),
    },
    listTitleText: {
      fontSize: theme.size.small,
      paddingHorizontal: wp(6),
      marginVertical: hp(1),
      fontFamily: theme.family.bold,
    },
    ButtonAddress: {
      height: hp(6),
      backgroundColor: theme.color.dividerColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectText: {
      fontSize: theme.size.xSmall,
      paddingHorizontal: wp(6),
      color: theme.color.textBlue,
      marginVertical: hp(1),
      fontFamily: theme.family.medium,
      textDecorationLine: 'underline',
    },
    renderImages: {
      marginBottom: hp(5),
      height: wp(14),
      borderWidth: wp(0.3),
      width: wp(20),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(3),
      borderColor: theme.color.dividerColor,
      borderRadius: theme.borders.radius2,
    },
    renderSelectedImages: {
      marginBottom: hp(5),

      height: wp(14),
      borderWidth: wp(0.3),
      width: wp(20),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(3),
      borderColor: theme.color.textBlack,
      borderRadius: theme.borders.radius2,
    },
    item: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
    flatlistStyle: {
      flexGrow: 1,
      paddingVertical: hp(1),
      paddingHorizontal: wp(5),
      
    },
    imageListStyle: {
      flexGrow: 1,
      paddingVertical: hp(1),
      paddingHorizontal: wp(5),
      marginBottom:hp(5),

    },
    emptyView: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
    addressText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.regular,
      color: theme.color.shadowColor,
      textAlign: 'left',
      // paddingHorizontal:wp(2)
    },
    iconStyle:{      paddingHorizontal:wp(3)
    }
  });
  return styles;
};
export default createStyles;
