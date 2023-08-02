import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Text from './CustomText';

function CustomButton(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      blackColor: theme.color.textBlack,
      whiteColor: theme.color.textWhite,
      buttonContainer: {
        width: wp(90),
        height: hp(7),
        backgroundColor: theme.color.primaryButton,
        borderRadius: theme.borders.radius2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      title1: {
        color: theme.color.textWhite,
        fontFamily: theme.family.medium,
        fontSize: theme.size.small,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      {!props.loading ? (
        !props.disabled ? (
          <TouchableOpacity
            style={[styles.buttonContainer, props.style[0]]}
            onPress={props.onPress}
            hitSlop={props.hitSlop}>
            <View style={styles.rowContainer}>
              <Text style={[styles.title1, props.style[1]]}>
                {props.title1}
              </Text>
              {props.title2 && (
                <Text style={[styles.title1, props.style[2]]}>
                  {props.title2}
                </Text>
              )}
            </View>
            {props.children && props.children}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled style={[props.style[0]]}>
            <View style={styles.rowContainer}>
              <Text style={props.style[1]}>{props.title1}</Text>
              {props.title2 && (
                <Text style={props.style[2]}>{props.title2}</Text>
              )}
            </View>
            {props.children && props.children}
          </TouchableOpacity>
        )
      ) : (
        <TouchableOpacity
          disabled
          style={[props.style[0]]}
          onPress={props.onPress}>
          <ActivityIndicator
            color={props.blackLoader ? styles.blackColor : styles.whiteColor}
          />
        </TouchableOpacity>
      )}
    </>
  );
}

export default CustomButton;
