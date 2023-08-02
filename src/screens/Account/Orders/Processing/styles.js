import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flexGrow: 1,
      backgroundColor: theme.color.backgroundColor,
      paddingHorizontal: wp(5),
    },
    emptyView: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyText: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
  });
  return styles;
};
export default createStyles;
