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
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: theme.size.xLarge,
      fontFamily: theme.family.semiBold,
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
      marginRight: wp(3),

    },
    centerHeaderText:{
      fontSize: theme.size.medium,
      fontFamily:theme.family.semiBold

    },
    searchIcon: {
      height: wp(8),
      width: wp(8),
      marginRight:wp(2)
    },
    carouselHeight: wp(40),
    carouselWidth: wp(90),
    imageView: {
      alignSelf: 'center',
    },
    carouselImage: {
      height: wp(40),
      width: wp(85),
    },
    topBar: {
      marginVertical: hp(2),
    },
    barText: {
      color: theme.color.textGray,
      backgroundColor: theme.color.inputBorder,
      paddingHorizontal: wp(2.5),
      paddingVertical: hp(0.75),
      borderRadius: theme.borders.radius3,
      marginRight: wp(1),
    },
    selectedBarText: {
      color: theme.color.textWhite,
      backgroundColor: theme.color.primaryButton,
    },
    horizontalItem: {
      marginRight: wp(2),
      marginBottom: hp(1),
    },
    horizontalImage: {
      height: wp(25),
      width: wp(40),
    },
    horizontalText: {
      width: wp(40),
    },
    itemStyle: {
      marginRight: wp(4),
      marginBottom: hp(2),
      marginTop:hp(1)
    },
    subHeading: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
    seeText: {
      color: theme.color.textGray,
    },
    leftImg:{
      width:wp(40),
      height:hp(7),
    },
    rightComponent:{
      flexDirection:'row'
    }
  });
  return styles;
};
export default createStyles;
