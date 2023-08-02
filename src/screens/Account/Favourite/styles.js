import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: theme.color.backgroundColor,
      paddingHorizontal: wp(5),
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
      marginRight: wp(3),
    },
    flatlistContainer: {
      flexGrow: 1,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    searchIcon: {
      height: wp(5),
      width: wp(5),
    },
    itemStyle: {
      marginRight: wp(4),
      marginBottom: hp(2),
    },
    subHeading: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
    lengthText: {
      // color: theme.color.textGray,
      fontSize: theme.size.small,
      fontFamily: theme.family.bold,
    },
  });
  return styles;
};
export default createStyles;
