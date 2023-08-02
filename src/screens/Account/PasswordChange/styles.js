import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.textWhite,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: wp(5),
      backgroundColor: theme.color.backgroundColor,
    },
    inputContainer: {
      marginTop: hp(3),
    },
    headerImage: {
      height: hp(20),
      alignSelf: 'center',
    },
    headerText: {
      fontSize: theme.size.large,
      fontFamily: theme.family.bold,
      marginVertical: hp(2),
    },
    doneButton: {
      marginVertical: hp(4),
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
    },
    eyeStyle: {
      height: wp(4.5),
      width: wp(4.5),
    },
    modalView: {
      backgroundColor: theme.color.backgroundColor,
      padding: hp(2),
      borderRadius: theme.borders.radius2,
      alignItems: 'center',
    },
    modalHeader: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.bold,
    },
    modalText: {
      color: theme.color.textGray,
      fontFamily: theme.family.medium,
      width: wp(65),
      textAlign: 'center',
    },
    modalImage: {
      height: wp(45),
      width: wp(45),
    },
    doneBtn: {
      width: wp(50),
      marginTop: hp(4),
    },
  });
  return styles;
};
export default createStyles;
