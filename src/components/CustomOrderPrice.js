import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Divider from './CustomDivider';
import Text from './CustomText';

function CustomOrderPrice(props) {
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
      dividerStyle: {
        marginVertical: hp(1.5),
      },
      subText: {
        color: theme.color.textGray,
      },
      subValue: {
        color: theme.color.textGray,
        fontSize: theme.size.small,
        fontFamily: theme.family.medium,
      },
      totalText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
      },
      totalValue: {
        fontSize: theme.size.small,
        fontFamily: theme.family.bold,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.subText}>Shipping Fee: </Text>
          <Text style={styles.subValue}>${props.shipping}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.subText}>Subtotal: </Text>
          <Text style={styles.subValue}>${props.subtotal}</Text>
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <Text style={styles.totalText}>Total Fee: </Text>
          <Text style={styles.totalValue}>${props.total}</Text>
        </View>
      </View>
    </>
  );
}

export default CustomOrderPrice;
