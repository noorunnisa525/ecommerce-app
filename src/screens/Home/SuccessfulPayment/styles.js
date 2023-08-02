import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.backgroundColor,
      flexGrow: 1,
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
      flexGrow: 1,
      paddingBottom: hp(2),
      justifyContent:'center',
      alignItems:'center',
    },
    backIcon: {
      height: wp(7),
      width: wp(7),
    },
   
    successText: {
      fontSize: theme.size.large,
textAlign:'center',
      marginVertical: hp(1),
      fontFamily: theme.family.semiBold,
      color:theme.color.textBlue
    },
    successSubText: {
      fontSize: theme.size.small,
textAlign:'center',
      fontFamily: theme.family.medium,
      width:wp(80),
      color:'#5D5D5D'
    },
    ButtonAddress: {
      height: hp(6),
      backgroundColor: theme.color.dividerColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    iconStyle:{      paddingHorizontal:wp(3)
    },
    paymentImg:{
      width:wp(50),
      height:wp(50)
    },
    continueButton:{
      marginTop:hp(2),
      width:wp(50)
    }
  });
  return styles;
};
export default createStyles;
