import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flex: 1,
    },
    container: {
      marginTop: hp(1),
      // flexGrow: 1,
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
    addressView: {
      marginBottom: hp(1),
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    activityView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    starStyle: {
      height: wp(5),
      width: wp(5),
      marginLeft: wp(2),
    },
    primaryTitle: {
      flexShrink: 1,
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    primaryAddress: {
      flexShrink: 1,
      fontSize: theme.size.small,
      fontFamily: theme.family.medium,
    },
    secondaryText: {
      flexShrink: 1,
      color: theme.color.textGray,
    },
    map: {
      height: hp(30),
      marginHorizontal: wp(4),
      marginBottom: hp(1),
    },
    mapView: {
      zIndex: 100,
      position: 'absolute',
      height: hp(30),
      alignSelf: 'center',
      justifyContent: 'center',
    },
    markerStyle: {
      height: wp(5.5),
      width: wp(5.5),
    },
    inputContainer: {
      paddingHorizontal: wp(5),
    },
    addressButton: {
      marginBottom: hp(2),
    },
  });
  return styles;
};
export default createStyles;
