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
        backgroundColor: theme.color.favItemColor,
        borderRadius: theme.borders.radius2,
        overflow: 'hidden',
        justifyContent: 'space-between',
      },
      imageTopStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: hp(1.5),
        marginHorizontal: wp(3),
      },
      heartStyle: {
        height: wp(7),
        width: wp(7),
        
      },
    
    
      nameText: {
        fontSize: theme.size.small,
        textAlign: 'left',
        paddingHorizontal: wp(1.5),
       
        fontFamily: theme.family.bold,
        width: wp(42),
      },
      priceText: {
        fontSize: theme.size.small,
        textAlign: 'left',
        paddingHorizontal: wp(1.5),
        width: wp(42),

      },
      ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ratingText: {
        color: theme.color.textGray,
      },
      starStyle: {
        height: wp(3),
        width: wp(3),
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
          <Image
            source={
              favourite
                ? require('../../assets/icons/HeartFill.png')
                : require('../../assets/icons/HeartEmpty.png')
            }
            onPress={() => setFavourite(!favourite)}
            style={styles.heartStyle}
          />
          {props.rating && (
            <View style={styles.ratingView}>
              <Image
                source={require('../../assets/icons/FullStar.png')}
                style={styles.starStyle}
              />
              <Text style={styles.ratingText}>{props.rating}</Text>
            </View>
          )}
        </View>
      </ImageBackground>
      <Text numberOfLines={1} style={[styles.nameText, props.textStyle]}>
        {props.name} </Text>
      <Text numberOfLines={1} style={[styles.priceText, props.textStyle]}>
        $ {props.price}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomItem;
