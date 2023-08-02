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
      height: wp(40),
      alignSelf: 'center',
    },
    headerText: {
      fontSize: theme.size.large,
      fontFamily: theme.family.bold,
      marginVertical: hp(2),
    },
    headerSubText: {
      textAlign: 'center',
    },
    sendBtn: {
      marginVertical: hp(4),
    },
    iconStyle: {
      height: wp(7),
      width: wp(7),
    },
  });
  return styles;
};
export default createStyles;
