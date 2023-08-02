import React, { useState } from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { useThemeAwareObject } from '../theme';
import { hp, wp } from '../util';
import Text from './CustomText';
import { Image } from 'react-native-elements';
import Checked from '../../assets/images/Checked.png'
import CircleUnchecked from '../../assets/images/CircleUnchecked.png'


function CustomShippingAddress(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent:'space-between',
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
        height: wp(5),
        width: wp(5),

      },
      imgContainer:{
        height: wp(5),
        width: wp(5),

           alignSelf: 'center',
        marginHorizontal: wp(3),
      },
      deleteView: {
        height: wp(8),
        width: wp(8),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'flex-end',
        backgroundColor: theme.color.dividerColor,
        borderRadius: theme.borders.radius2,
       
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
        justifyContent: 'flex-end',
      },
      itemText: {
        fontSize: theme.size.small,
        fontFamily: theme.family.semiBold,
        width:wp(50)
      },
      subText: {
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
        justifyContent: 'flex-end',
        paddingRight:wp(2),
        width: wp(30),
      },
    
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [quantity, setQuantity] = useState(props.quantity);
  console.log('selectedItem',props.selectedItem?.id, props.item.id);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{flexDirection:'row'}}>
        <View style={styles.imgContainer}>
        <Image
          source={props?.selectedItem?.id == props?.item?.id ? Checked : CircleUnchecked}
          style={styles.imageStyle}
          resizeMode="contain"
          onPress={() => props.setSelectedItem(props.item)}
        />
       
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Text numberOfLines={1} style={styles.itemText}>
              {props.item.name}
            </Text>
            <Text style={styles.subText}>{props.phoneNumber}</Text>
            <Text style={styles.subText}>{props.address}</Text>

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
      </View>
      
    </>
  );
}

export default CustomShippingAddress;
