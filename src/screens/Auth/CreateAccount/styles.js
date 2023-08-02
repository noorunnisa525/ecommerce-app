import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.backgroundColor,
      paddingHorizontal: wp(5),
    },
    headerStyle: {
      marginTop: hp(4),
    },
    container: {
      flexGrow: 1,
      backgroundColor: theme.color.backgroundColor,
    },
    headerText: {
      fontSize: theme.size.large,
      fontFamily: theme.family.bold,
      marginTop: hp(2),
    },
    headerSubText: {
      color: theme.color.textGray,
      marginTop: hp(0.5),
    },
    inputContainer: {
      marginTop: hp(5),
    },
    errorText: {
      color: theme.color.textRed,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(2),
      marginBottom: hp(3),
    },
    termsAndConditionText: {
      color: theme.color.textGray,
    },
    privacyText: {
      fontFamily: theme.family.semiBold,
    },
    registerText: {
      width: wp(75),
      textAlign: 'center',
    },
    termsButton: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: theme.color.textWhite,
    },
    signUpButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    continueText: {
      textAlign: 'center',
      color: theme.color.textGray,
      marginVertical: hp(6),
    },
    noAccountText: {
      marginTop: hp(10.5),
      marginBottom: hp(0.5),
      color: theme.color.textGray,
      fontFamily: theme.family.medium,
    },
    signUpText: {
      fontFamily: theme.family.medium,
      textDecorationLine: 'underline',
    },
    iconStyle: {
      height: wp(4.5),
      width: wp(4.5),
    },
    checkboxColor: theme.color.checkColor,
  });
  return styles;
};
export default createStyles;
