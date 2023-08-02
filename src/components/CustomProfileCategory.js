import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThemeAwareObject} from '../theme';
import Divider from './CustomDivider';
import {hp, wp} from '../util';
import Text from './CustomText';

function CustomProfileCategory(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(1.5),
        backgroundColor: theme.color.backgroundColor,
        borderRadius: theme.borders.radius2,
      },
      nameStyle: {
        color: theme.color.textGray,
      },
      valueStyle: {
        fontSize: theme.size.small,
        color: theme.color.textGray,
        fontFamily: theme.family.medium,
      },
      iconStyle: {
        height: wp(8),
        width: wp(8),
        marginRight: wp(4),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
        <Image
          source={props.image}
          resizeMode="contain"
          style={styles.iconStyle}
        />
        <View>
          <Text style={styles.nameStyle}>{props.name}</Text>
          <Text style={styles.valueStyle}>{props.value}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default CustomProfileCategory;
