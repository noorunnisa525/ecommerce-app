import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flex: 1,
      paddingBottom: hp(2),
    },
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    container: {
      marginTop: hp(0.1),
      paddingBottom: hp(2),
      backgroundColor: theme.color.textWhite,
      justifyContent: 'space-between',
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
    listTitleText: {
      fontSize: theme.size.small,
      paddingHorizontal: wp(6),
      marginVertical: hp(1),
      fontFamily: theme.family.medium,
    },
    ButtonAddress: {
      height: hp(7),
      backgroundColor: theme.color.dividerColor,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    selectedText: {
      fontSize: theme.size.xSmall,
      paddingHorizontal: wp(6),
      color: theme.color.textBlack,
      fontFamily: theme.family.medium,
    },
    cardText:{
      fontSize: theme.size.xSmall,
      paddingHorizontal: wp(6),
      color: theme.color.textLightGray,
      marginVertical: hp(1),
      fontFamily: theme.family.medium,
    },

    backgroundImage: {
      height: wp(50),
      width: wp(85),
      marginLeft:wp(5),
      alignSelf:'center'
      // alignSelf: 'center',
      // justifyContent: 'center',
      // alignItems: 'center',
      // marginRight: wp(3),
      // // borderColor: theme.color.dividerColor,
      // borderRadius: theme.borders.radius2,
    },
    renderImages: {
      marginBottom: hp(2),
      height: wp(14),
      borderWidth: wp(0.3),
      width: wp(20),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(3),
      borderColor: theme.color.dividerColor,
      borderRadius: theme.borders.radius2,
    },
    renderSelectedImages: {
      marginBottom: hp(2),

      height: wp(14),
      borderWidth: wp(0.3),
      width: wp(20),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(3),
      borderColor: theme.color.textBlack,
      borderRadius: theme.borders.radius2,
    },
    image:{
      height: wp(7),
      width: wp(10),
    },
    tickImage:{
      height: wp(3.5),
      width: wp(3.5),
   
    },
    tickImageContainer:{
      height: wp(3.5),
      width: wp(3.5),
      position:'absolute',
      // zIndex:10,
      right:-wp(2.5),
      top:-hp(1.5)
    },
    item: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.semiBold,
    },
   
    imageListStyle: {
      flexGrow: 1,
      alignItems:'flex-start',
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
    promoCode:{
      height:hp(7),
      backgroundColor:theme.color.backgroundColor,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderColor:"#EDF1F4",
      borderWidth:wp(0.5),
      paddingHorizontal:wp(3),
      marginVertical:hp(3)
    },
    applyButton:{
      width:wp(20),
      height:hp(5),
      alignSelf:'flex-end',
      backgroundColor:theme.color.textLightGray
    },
    codeText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.regular,
      color: theme.color.shadowColor,
      textAlign: 'left',
      width:wp(65)
    },
  });
  return styles;
};
export default createStyles;
