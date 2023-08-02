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
      backgroundColor: theme.color.backgroundColor,
      paddingHorizontal: wp(5),
      marginTop: hp(2),
    },
    innerContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    imageContainerStyle: {
      height: hp(28),
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
    },
    avatarContainer: {
      alignSelf: 'center',
      marginTop: hp(4),
    },
    avatarSize: wp(30),
    avatarText: {
      marginTop: hp(2),
      marginBottom: hp(1),
      textAlign: 'center',
    },
    cameraStyle: {
      height: wp(4.5),
      width: wp(4.5),
    },
    cameraView: {
      height: wp(7.5),
      width: wp(7.5),
      bottom: hp(2.5),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.avatarColor,
      borderWidth: 1,
      borderColor: theme.color.inputBorder,
      borderRadius: theme.borders.radius1,
    },
    subHeading: {
      color: theme.color.textLightGray,
    },
    errorStyle: {
      marginBottom: hp(4),
    },
    passwordView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: theme.borders.radius2,
      backgroundColor: theme.color.inputBorder,
      paddingLeft: wp(4),
    },
    passwordText: {
      color: theme.color.textGray,
      fontFamily: theme.family.semiBold,
      fontSize: theme.size.small,
    },
    changeBtn: {
      backgroundColor: 'transparent',
      width: wp(35),
    },
    changeText: {
      width: wp(25),
      color: theme.color.textGray,
    },
    arrowStyle: {
      height: wp(3),
      width: wp(3),
    },
    saveBtn: {
      width: wp(85),
      marginTop: hp(10),
      marginBottom: hp(3),
    },
  });
  return styles;
};
export default createStyles;
