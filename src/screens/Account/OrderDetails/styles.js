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
      justifyContent: 'space-evenly',
    },
    bottomContainer: {
      flexGrow: 1,
      backgroundColor: theme.color.backgroundColor,
      paddingHorizontal: wp(5),
      paddingVertical: hp(2),
      borderTopWidth: 2,
      borderTopColor: theme.color.inputBorder,
    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
    },
    deliveryText: {
      color: theme.color.textGray,
      fontFamily: theme.family.semiBold,
    },
    addressView: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.color.inputBorder,
      paddingHorizontal: wp(1),
      paddingVertical: hp(0.5),
      borderRadius: theme.borders.radius2,
    },
    addressText: {
      color: theme.color.textGray,
      fontFamily: theme.family.medium,
      width: wp(80),
    },
    cancelButton: {
      marginTop: hp(2),
      backgroundColor: theme.color.backgroundColor,
      borderWidth: 1,
      borderColor: theme.color.tertiaryButton,
    },
    cancelText: {
      color: theme.color.textRed,
    },
  });
  return styles;
};
export default createStyles;
