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
    headerText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    imageContainerStyle: {
      height: hp(28),
      marginBottom: hp(1.5),
    },
    avatarContainer: {
      alignSelf: 'center',
      marginTop: hp(4),
    },
    avatarSize: wp(30),
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: wp(88),
      marginVertical: hp(2),
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
      backgroundColor: theme.color.backgroundColor,
      borderWidth: 1,
      borderColor: theme.color.dividerColor,
      borderRadius: theme.borders.radius2,
      elevation: 3,
      shadowColor: theme.color.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 1,
      shadowRadius: 1,
    },
    nameText: {
      fontSize: theme.size.small,
      fontFamily: theme.family.bold,
      textAlign: 'center',
    },
    emailText: {
      color: theme.color.textGray,
      textAlign: 'center',
    },
    modalView: {
      backgroundColor: theme.color.backgroundColor,
      padding: hp(2),
      borderRadius: theme.borders.radius2,
    },
    innerModal: {
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
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: wp(2),
      marginTop: hp(4),
    },
    noBtn: {
      width: wp(35),
      backgroundColor: theme.color.secondaryButton,
    },
    yesBtn: {
      width: wp(35),
      backgroundColor: theme.color.tertiaryButton,
    },
  });
  return styles;
};
export default createStyles;
