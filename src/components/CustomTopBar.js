import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Text from './CustomText';

const CustomTopBar = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      barItemView: {
        alignItems: 'center',
      },
      barImage: {
        height: wp(5),
        width: wp(5),
      },
      barText: {
        color: theme.color.textGray,
        marginTop: hp(0.5),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <TouchableOpacity style={styles.barItemView} onPress={props.onPress}>
      {props.barImage && (
        <Image
          source={props.barImage}
          resizeMode="contain"
          style={styles.barImage}
        />
      )}
      <Text style={[styles.barText, props.textStyle]}>{props.barText}</Text>
    </TouchableOpacity>
  );
};

export default CustomTopBar;
