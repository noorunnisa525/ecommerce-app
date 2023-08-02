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
      marginTop: hp(4),
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
    editStyle: {
      height: wp(5),
      width: wp(5),
    },
    editBtn: {
      width: wp(13),
      backgroundColor: 'transparent',
      height: hp(2.5),
    },
    editText: {
      color: theme.color.textGray,
      marginLeft: wp(1),
    },
    avatarContainer: {
      alignSelf: 'center',
      marginTop: hp(4),
    },
    avatarSize: wp(30),
  });
  return styles;
};
export default createStyles;
