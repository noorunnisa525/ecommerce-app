import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from './CustomText';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';

function CustomOrderItem(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: theme.color.backgroundColor,
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(2),
        marginBottom: hp(1.5),
        borderColor: theme.color.inputBorder,
        borderRadius: theme.borders.radius2,
        elevation: 3,
        shadowColor: theme.color.shadowColor,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      imageStyle: {
        height: hp(14),
        width: wp(20),
        alignSelf: 'center',
        marginRight: wp(3),
        backgroundColor: theme.color.avatarColor,
        borderRadius: theme.borders.radius2,
      },
      rightContainer: {
        flex: 1,
        justifyContent: 'space-between',
      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      itemText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
      },
      sizeText: {
        color: theme.color.textGray,
        fontFamily: theme.family.medium,
      },
      finalText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.bold,
      },
      originalText: {
        color: theme.color.textLightGray,
        textDecorationLine: 'line-through',
      },
      quantityText: {
        color: theme.color.textGray,
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
      },
    });
    return themeStyles;
  };

  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={props.image}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <View style={styles.rightContainer}>
          <View>
            <Text numberOfLines={2} style={styles.itemText}>
              {props.item}
            </Text>
            <Text style={styles.sizeText}>{props.size}</Text>
          </View>
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.finalText}>${props.finalPrice}</Text>
              {props.originalPrice && (
                <Text style={styles.originalText}>${props.originalPrice}</Text>
              )}
            </View>
            <Text style={styles.quantityText}>x {props.quantity}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default CustomOrderItem;
