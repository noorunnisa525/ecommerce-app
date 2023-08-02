import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flex: 1,
      paddingBottom:hp(2),
      

    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    backIcon: {
      height: wp(7),
      width: wp(7),
    },
    checkoutText: {
      textAlign: 'center',
    },
    itemText: {
      fontSize: theme.size.small,
      alignSelf: 'center',
      marginVertical: hp(1),
    },
    item: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
    flatlistStyle: {
      flexGrow: 1,
      paddingTop: hp(1),
      paddingHorizontal: wp(5),
    },
    emptyView: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
  });
  return styles;
};
export default createStyles;
