import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useThemeAwareObject } from '../theme';
import { hp, wp } from '../util';
import Text from './CustomText';

function CustomCardTotal(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        flexDirection: 'row',
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
        
      marginHorizontal:wp(5),
        justifyContent:'space-between'
      },

      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      itemText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
        width: wp(50),
      },

      totalText: {
        color: theme.color.textGray,
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [quantity, setQuantity] = useState(props.quantity);
  return (
    <>
      <View style={styles.mainContainer}>
        <Text numberOfLines={1} style={styles.itemText}>
          SubTotal
        </Text>
        <Text numberOfLines={1} style={styles.totalText}>
          {props.total}
        </Text>
      </View>
    </>
  );
}

export default CustomCardTotal;
