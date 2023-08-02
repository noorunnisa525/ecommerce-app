import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flexGrow: 1,
      backgroundColor: theme.color.backgroundColor,
    },
    topContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: hp(1),
    },
    customerText: {
      color: theme.color.textGray,
      fontSize: theme.size.small,
      fontFamily: theme.family.medium,
    },
    allText: {
      color: theme.color.textRed,
      fontFamily: theme.family.medium,
    },
  });
  return styles;
};
export default createStyles;
