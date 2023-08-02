import React, { useState } from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { useThemeAwareObject } from '../theme';
import { hp, wp } from '../util';
import Text from './CustomText';
import { Image } from 'react-native-elements';
import Checked from '../../assets/images/Checked.png'
import CircleUnchecked from '../../assets/images/CircleUnchecked.png'


function NotificationItem(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        justifyContent:'space-between',
        backgroundColor: theme.color.notificationColor,
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(2),
        marginBottom: hp(1.5),
        borderRadius: theme.borders.radius2,
        elevation: 3,
        shadowColor: theme.color.shadowColor,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      imageStyle: {
        height: wp(10),
        width: wp(10),

      },
      imgContainer:{
        height: wp(10),
        width: wp(10),

           alignSelf: 'center',
        marginRight: wp(3),
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
      timeText: {
        color: theme.color.inputBorder,
        fontFamily: theme.family.medium,
        width:wp(50)

      },
      subText: {
        color: theme.color.textGray,
        fontFamily: theme.family.medium,
        width:wp(90)

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

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{flexDirection:'row'}}>
        <View style={styles.imgContainer}>
        <Image
          source={props.avatarImg}
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
            <Text style={styles.timeText}>{props.time}</Text>

          </View>
         
             
                     
          </View>
          </View>
          <Text style={styles.subText}>{props.address}</Text>

      </View>
      
    </>
  );
}

export default NotificationItem;
