import {
  StyleSheet
} from 'react-native';
import {
  hp,
  wp
} from '../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flexGrow: 1,
      paddingBottom: hp(2),
    },
    headerText: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
    notificationDayText: {
      fontSize: theme.size.small,
    },
    container: {
      marginTop: hp(4),
      paddingBottom: hp(2),
      backgroundColor: theme.color.textWhite,
      marginHorizontal:wp(5),
      paddingBottom: hp(2),
    },
    backIcon: {
      height: wp(7),
      width: wp(7),
    },

    emptyCartText: {
      fontSize: theme.size.medium,
      textAlign: 'center',
      marginVertical: hp(1),
      fontFamily: theme.family.semiBold,
      color: theme.color.textBlack
    },
    successSubText: {
      fontSize: theme.size.small,
      textAlign: 'center',
      // fontFamily: theme.family.medium,
      width: wp(80),
      color: '#5D5D5D'
    },
    ButtonAddress: {
      height: hp(6),
      backgroundColor: theme.color.dividerColor,
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconStyle: {
      paddingHorizontal: wp(3)
    },
    cartImg: {
      width: wp(60),
      height: wp(60)
    },
    continueButton: {
      marginTop: hp(2),
      width: wp(50)
    },
    emptyView: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return styles;
};
export default createStyles;