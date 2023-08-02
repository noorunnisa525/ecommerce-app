import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from './CustomText';
import Button from './CustomButton';
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
        height: wp(20),
        width: wp(20),
        alignSelf: 'center',
        marginRight: wp(3),
        backgroundColor: theme.color.avatarColor,
        borderRadius: theme.borders.radius2,
      },
      deleteView: {
        height: wp(8),
        width: wp(8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.color.dividerColor,
        borderRadius: theme.borders.radius2,
        position: 'absolute',
        right: 0,
        marginRight:wp(2),
        top: hp(1),
      },
      deleteStyle: {
        height: wp(5),
        width: wp(5),
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
        width:wp(50)
      },
      sizeText: {
        color: theme.color.textGray,
        fontFamily: theme.family.medium,
        width:wp(50)

      },
      finalText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.bold,
        width:wp(20)


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
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(30),
      },
      minusBtn: {
        backgroundColor: theme.color.backgroundColor,
        borderWidth: 1,
        borderColor: theme.color.textGray,
        width: wp(7),
        height: wp(7),
        borderRadius: theme.borders.radius4,
      },
      minusText: {
        color: theme.color.textGray,
      },
      plusBtn: {
        width: wp(7),
        height: wp(7),
        borderRadius: theme.borders.radius4,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [quantity, setQuantity] = useState(props.quantity);
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
            <Text numberOfLines={1} style={styles.itemText}>
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
            <View style={styles.buttonContainer}>
              <Button
                style={[styles.minusBtn, styles.minusText]}
                title1={'-'}
                onPress={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1);
                  }
                }}
              />
              <Text style={styles.quantityText}>{quantity}</Text>
              <Button
                style={[styles.plusBtn, styles.plusText]}
                title1={'+'}
                onPress={() => setQuantity(quantity + 1)}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.deleteView}
        onPress={() => {
          props.deleteItem();
        }}>
        <Image
          source={require('../../assets/icons/Delete.png')}
          style={styles.deleteStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}

export default CustomOrderItem;
