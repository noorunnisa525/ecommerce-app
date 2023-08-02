import {StyleSheet} from 'react-native';
import {hp, wp} from '../../util/index';

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
      marginTop: hp(1.5),
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',

    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    menuIcon: {
      height: wp(8),
      width: wp(8),
      marginTop:hp(2.5)
    },
    favDeleteImg: {
      height: wp(20),
      width: wp(20),
      marginRight: -wp(4),
      // marginTop: -hp(2.5),
      marginBottom:-hp(2.5)
    },
    rightComponentStyle: {flexDirection: 'row', alignItems: 'flex-start',},
    itemStyle: {
      marginRight: wp(4),
      marginBottom: hp(2),
    },
    barText: {
      color: theme.color.textGray,
      backgroundColor: theme.color.backgroundColor,
      paddingHorizontal: wp(2.5),
      paddingVertical: hp(0.75),
      borderRadius: theme.borders.radius3,
      marginRight: wp(1),
    },
    topBar: {
      marginVertical: hp(0.5),
    },
    selectedBarText: {
      color: theme.color.primaryButton,
      backgroundColor: theme.color.textWhite,
      fontFamily: theme.family.semiBold,
    },
    subHeading: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
      color: theme.color.primaryButton,
    },
    lengthText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.bold,
    },
  });
  return styles;
};
export default createStyles;
