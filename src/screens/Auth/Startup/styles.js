import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.textWhite,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: wp(5),
      backgroundColor: theme.color.backgroundColor,
      justifyContent: 'space-between',
    },
    headerImage: {
      marginVertical: hp(2),
      height: wp(100),
      alignSelf: 'center',
    },
    headerText: {
      width: wp(60),
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: theme.size.large,
      fontFamily: theme.family.semiBold,
    },
    subheaderText: {
      width: wp(80),
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: theme.size.small,
      fontFamily: theme.family.medium,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    signupBtn: {
      backgroundColor: 'transparent',
      width: wp(42),
      borderWidth: 1,
      borderColor: theme.color.inputBorder,
    },
    signupText: {
      color: theme.color.textGray,
    },
    signinBtn: {
      width: wp(42),
    },
    continueText: {
      alignSelf: 'center',
      color: theme.color.textGray,
      marginVertical: hp(2),
    },
    guestText: {
      color: theme.color.textBlue,
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
      textDecorationLine: 'underline',
    },
  });
  return styles;
};
export default createStyles;
