import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util';

const createStyles = theme => {
  const styles = StyleSheet.create({
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialIcons: {
      backgroundColor: theme.color.textBlack,
    },
    iconSize: wp(6.5),
  });
  return styles;
};
export default createStyles;
