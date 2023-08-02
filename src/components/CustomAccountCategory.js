import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThemeAwareObject} from '../theme';
import Divider from './CustomDivider';
import {hp, wp} from '../util';
import Text from './CustomText';

function CustomAccountCategory(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(2),
        backgroundColor: theme.color.backgroundColor,
        borderRadius: theme.borders.radius2,
      },
      rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      textStyle: {
        marginLeft: wp(4),
        fontSize: theme.size.small,
        color: theme.color.textGray,
      },
      logoutText: {
        color: theme.color.textRed,
        fontFamily: theme.family.semiBold,
      },
      iconStyle: {
        height: wp(5),
        width: wp(5),
      },
      arrowStyle: {
        height: wp(3),
        width: wp(3),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
        <Image
          source={props.icon}
          resizeMode="contain"
          style={styles.iconStyle}
        />
        <View style={styles.rowContainer}>
          <Text
            style={[
              styles.textStyle,
              props.name == 'Logout' && styles.logoutText,
            ]}>
            {props.name}
          </Text>
          {props.name != 'Logout' && (
            <Image
              source={require('../../assets/icons/AccountArrow.png')}
              resizeMode="contain"
              style={styles.arrowStyle}
            />
          )}
        </View>
      </TouchableOpacity>
      <Divider />
    </>
  );
}

export default CustomAccountCategory;
