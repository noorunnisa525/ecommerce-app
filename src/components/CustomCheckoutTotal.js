import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useThemeAwareObject } from '../theme';
import { hp, wp } from '../util';
import Text from './CustomText';
import CustomDivider from './CustomDivider';
function CustomCheckoutTotal(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        flexDirection: 'column',
        borderWidth: 1,
        backgroundColor: theme.color.backgroundColor,
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(3),
        marginBottom: hp(1.5),
        borderColor: theme.color.inputBorder,
        borderRadius: theme.borders.radius2,
        elevation: 3,
        shadowColor: theme.color.shadowColor,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,

        marginHorizontal: wp(5),
        justifyContent: 'space-between',
      },

      rowContainer: {
        flexDirection: 'row', justifyContent: 'space-between'
      },
      itemText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
        width: wp(50),
      },
      subText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.regular,
      },

      totalText: {
        color: theme.color.textGray,
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
      },
      dividerStyle:{
        marginVertical: hp(1),
        height: hp(0.15),
        borderBottomColor: 'transparent',
        backgroundColor: theme.color.textBlack,
      }
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text numberOfLines={1} style={styles.subText}>
            Shipping Fee :
          </Text>
          <Text numberOfLines={1} style={styles.subText}>
            {props.shippingFee}
          </Text>
        </View>
        {props.total&&<View style={styles.rowContainer}>
          <Text numberOfLines={1} style={styles.subText}>
            Subtotal :
          </Text>
          <Text numberOfLines={1} style={styles.subText}>
            {props.total}
          </Text>
        </View>}
        <CustomDivider style={styles.dividerStyle}/>
        <View style={styles.rowContainer}>
          <Text numberOfLines={1} style={styles.itemText}>
            Bag total :
          </Text>
          <Text numberOfLines={1} style={styles.totalText}>
            {props.bagTotal}
          </Text>
        </View>
      </View>
    </>
  );
}

export default CustomCheckoutTotal;
