import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Divider from './CustomDivider';
import Text from './CustomText';

function CustomOrder(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
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
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      orderText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.bold,
      },
      statusText: {
        paddingVertical: hp(0.5),
        paddingHorizontal: wp(2),
        borderRadius: theme.borders.radius1,
        fontFamily: theme.family.medium,
      },
      placeText: {
        backgroundColor: theme.color.inputBorder,
        color: theme.color.textGray,
      },
      readyText: {
        backgroundColor: theme.color.process,
        color: theme.color.textBlue,
      },
      completeText: {
        backgroundColor: theme.color.complete,
        color: theme.color.textGreen,
      },
      cancelText: {
        backgroundColor: theme.color.cancel,
        color: theme.color.textRed,
      },
      typeText: {
        color: theme.color.textLightGray,
      },
      deliveryText: {
        color: theme.color.textLightGray,
      },
      dateText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.medium,
      },
      priceText: {
        color: theme.color.textBlue,
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
      },
      dividerStyle: {
        marginVertical: hp(1.5),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
        <View style={styles.rowContainer}>
          <Text style={styles.orderText}>{props.orderNumber}</Text>
          <Text
            style={[
              styles.statusText,
              props.status == 'Placed' && styles.placeText,
              props.status == 'Ready' && styles.readyText,
              props.status == 'Completed' && styles.completeText,
              props.status == 'Cancelled' && styles.cancelText,
            ]}>
            {props.status}
          </Text>
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <Text style={styles.typeText}>Payment Type: {props.type}</Text>
          <Text style={styles.deliveryText}>Take Delivery</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.dateText}>{props.date}</Text>
          <Text style={styles.priceText}>$ {props.price}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default CustomOrder;
