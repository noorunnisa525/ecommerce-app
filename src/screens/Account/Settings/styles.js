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
  });
  return styles;
};
export default createStyles;
