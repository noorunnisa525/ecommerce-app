import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {hp} from '../util';

function CustomDivider(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      dividerStyle: {
        marginVertical: hp(0.3),
        height: hp(0.15),
        borderBottomColor: 'transparent',
        backgroundColor: theme.color.dividerColor,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return <Divider style={[styles.dividerStyle, props.style]} />;
}

export default CustomDivider;
