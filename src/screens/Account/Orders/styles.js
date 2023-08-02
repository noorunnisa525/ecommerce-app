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
    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
    },
    topBar: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: wp(90),
      marginVertical: hp(2),
      paddingHorizontal: wp(3),
      paddingVertical: hp(1),
      backgroundColor: theme.color.backgroundColor,
      borderWidth: 1,
      borderColor: theme.color.dividerColor,
      borderRadius: theme.borders.radius2,
      elevation: 3,
      shadowColor: theme.color.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 1,
      shadowRadius: 1,
    },
    processText: {
      color: theme.color.textBlue,
    },
    completeText: {
      color: theme.color.textGreen,
    },
    cancelText: {
      color: theme.color.textRed,
    },
    processUnderline: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
      textDecorationColor: theme.color.textBlue,
    },
    completeUnderline: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
      textDecorationColor: theme.color.textGreen,
    },
    cancelUnderline: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
      textDecorationColor: theme.color.textRed,
    },
    processView: {
      flex: 1,
      backgroundColor: theme.color.textBlue,
    },
    completeView: {
      flex: 1,
      backgroundColor: theme.color.textGreen,
    },
    cancelView: {
      flex: 1,
      backgroundColor: theme.color.textRed,
    },
  });
  return styles;
};
export default createStyles;
