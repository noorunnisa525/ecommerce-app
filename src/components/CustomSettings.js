import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Text from './CustomText';

function CustomSettings(props) {
  const [enable, setEnable] = useState(false);

  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(1.5),
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
        fontFamily: theme.family.medium,
      },
      iconStyle: {
        height: wp(11),
        width: wp(11),
      },
      arrowStyle: {
        height: wp(3),
        width: wp(3),
      },
      falseColor: theme.color.disableSwitch,
      trueColor: theme.color.enableSwitch,
      thumbColor: theme.color.backgroundColor,
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={props.onPress}
        activeOpacity={props.index > 1 ? 1 : 0.2}>
        <Image
          source={props.icon}
          resizeMode="contain"
          style={styles.iconStyle}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.textStyle}>{props.name}</Text>
          {props.index <= 1 ? (
            <Image
              source={require('../../assets/icons/AccountArrow.png')}
              resizeMode="contain"
              style={styles.arrowStyle}
            />
          ) : (
            <Switch
              trackColor={{false: styles.falseColor, true: styles.trueColor}}
              thumbColor={styles.thumbColor}
              onValueChange={setEnable}
              value={enable}
            />
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

export default CustomSettings;
