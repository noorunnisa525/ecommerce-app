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
        backgroundColor: theme.color.textWhite,
        borderRadius: theme.borders.radius2,
        overflow: 'hidden',
        justifyContent: 'space-between',
      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(1.5),
        marginBottom: hp(0.5),
      },
      ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ratingText: {
        color: theme.color.textGray,
        fontSize: theme.size.small,
        fontFamily: theme.family.medium,
        marginLeft: wp(1),
      },
      starStyle: {
        height: wp(4),
        width: wp(4),
        marginBottom: hp(0.75),
      },
      nameText: {
        width: wp(29),
        fontSize: theme.size.small,
        color: theme.color.textGray,
      },
      priceText: {
        width: wp(19),
        fontSize: hp(2.1),
        fontFamily: theme.family.semiBold,
      },
      actualPriceText: {
        width: wp(19),
        fontSize: theme.size.small,
        color: theme.color.inputBorder,
        marginLeft: wp(0.2),
        textDecorationLine: 'line-through',
      },
      plusStyle: {
        height: wp(6),
        width: wp(6),
        marginBottom: hp(0.5),
      },
      imageTopStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(1.2),
        marginHorizontal: wp(3),
      },
      heartStyle: {
        height: wp(7),
        width: wp(7),
      },
      priceRowContainer: {
        flexDirection: 'row',
        marginLeft: wp(1.5),
        alignItems: 'center',
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
        <View style={styles.imageTopStyle}>
          {props.rating && (
            <View style={styles.ratingView}>
              <Image
                source={require('../../assets/icons/FullStar.png')}
                style={styles.starStyle}
              />
              <Text style={styles.ratingText}>{props.rating}</Text>
            </View>
          )}
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
      <View style={styles.priceRowContainer}>
        <Text numberOfLines={1} style={styles.priceText}>
          ${props.price}.00
        </Text>
        <Text numberOfLines={1} style={styles.actualPriceText}>
          ${props.price}.00
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text numberOfLines={1} style={styles.nameText}>
          {props.name}
        </Text>
        <Image
          source={require('../../assets/icons/ItemAdd2.png')}
          style={styles.plusStyle}
        />
      </View>
    </TouchableOpacity>
  );
}

export default CustomItem;
