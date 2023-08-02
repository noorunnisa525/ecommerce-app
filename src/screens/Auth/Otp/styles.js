import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.backgroundColor,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: wp(5),
      backgroundColor: theme.color.backgroundColor,
    },
    headerImage: {
      height: wp(40),
      alignSelf: 'center',
    },
    headerText: {
      fontSize: theme.size.large,
      fontFamily: theme.family.bold,
      marginVertical: hp(2),
    },
    headerSubText: {
      textAlign: 'center',
    },
    keyText: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
    optContainer: {
      flexGrow: 1,
      alignItems: 'center',
      marginTop: hp(5),
    },
    errorText: {
      marginBottom: hp(2),
      color: theme.color.textRed,
    },
    resendButton: {
      height: hp(4),
      backgroundColor: 'transparent',
      marginTop: hp(2),
    },
    noCodeText: {
      color: theme.color.textGray,
      fontFamily: theme.family.medium,
      fontSize: theme.size.xSmall,
    },
    resendText: {
      color: theme.color.textBlack,
      fontFamily: theme.family.medium,
      fontSize: theme.size.xSmall,
      textDecorationLine: 'underline',
    },
    verifyButton: {
      marginVertical: hp(3),
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
    },
    snackbarSuccess: theme.color.snackSuccess,
  });
  return styles;
};
export default createStyles;
