import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Text from './CustomText';

function CustomItem(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        borderRadius: theme.borders.radius2,
        backgroundColor: theme.color.backgroundColor,
        elevation: 3,
        shadowColor: theme.color.shadowColor,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      imageStyle: {
        height: wp(45),
        width: wp(43),
        backgroundColor: theme.color.backgroundColor,
        borderRadius: theme.borders.radius2,
        overflow: 'hidden',
        justifyContent: 'space-between',
      },
      heartStyle: {
        height: wp(7),
        width: wp(7),
        marginTop: hp(0.5),
        marginHorizontal: wp(1.5),
      },
      heartView: {
        alignSelf: 'flex-end',
      },
      nameText: {
        paddingHorizontal: wp(1.5),
        fontSize: theme.size.small,
        width: wp(42),
      },
      priceText: {
        width: wp(42),
        paddingHorizontal: wp(1.5),
        fontFamily: theme.family.medium,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [favourite, setFavourite] = useState(props.favourite);
  return (
    <TouchableOpacity
      style={[styles.mainContainer, props.style]}
      onPress={props.onPress}>
      <ImageBackground
        source={props.image}
        style={[styles.imageStyle, props.imageStyle]}
        resizeMode="contain">
        <View style={styles.heartView}>
          <Image
            source={
              favourite
                ? require('../../assets/icons/HeartFill.png')
                : require('../../assets/icons/HeartEmpty.png')
            }
            onPress={() => setFavourite(!favourite)}
            style={styles.heartStyle}
          />
        </View>
      </ImageBackground>
      <Text numberOfLines={1} style={[styles.nameText, props.textStyle]}>
        {props.name}
      </Text>
      <Text numberOfLines={1} style={[styles.priceText, props.textStyle]}>
        $ {props.price}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomItem;
