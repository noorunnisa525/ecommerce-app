import React, {useState} from 'react';
import {FlatList, View,ScrollView} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../../components/CustomButton';
import CartItem from '../../../components/CustomCheckoutItem';
import CustomCheckoutTotal from '../../../components/CustomCheckoutTotal';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import {hp} from '../../../util/index';
import createStyles from './styles';

function Checkout({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [listIndex, setIndex] = useState(1);
  const [items, setItems] = useState([
    {
      image: require('../../../../assets/images/Hoodie.png'),
      item: 'Kangaroo Pocket Drawstring Hoodie',
      size: 'Medium',
      finalPrice: 14.99,
      originalPrice: 29.99,
      quantity: '2',
    },
    {
      image: require('../../../../assets/images/Shoes.png'),
      item: 'LV Formal Shoes',
      size: 'Medium',
      finalPrice: 104.99,
      quantity: '1',
    },
    {
      image: require('../../../../assets/images/Hoodie.png'),
      item: 'Kangaroo Pocket Drawstring Hoodie',
      size: 'Medium',
      finalPrice: 14.99,
      originalPrice: '29.99',
      quantity: '2',
    },
    {
      image: require('../../../../assets/images/Shoes.png'),
      item: 'LV Formal Shoes',
      size: 'Medium',
      finalPrice: 104.99,
      quantity: '1',
    },
  ]);
  const [deliveryImages, setDeliveryImages] = useState([
    {
      id: 1,
      image: require('../../../../assets/images/Tcs.png'),
    },
    {
      id: 2,
      image: require('../../../../assets/images/Leopard.png'),
    },
    {
      id: 3,
      image: require('../../../../assets/images/FedEx.png'),
    },
    {
      id: 4,
      image: require('../../../../assets/images/morePayment.png'),
    },
  ]);
  let sum = 0;

  items.forEach(element => {
    sum += element.finalPrice;
  });
  let Total = sum + 10;

  return (
    <View style={styles.mainContainer}>
      <Header
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.backIcon}
            onPress={() => navigation.pop()}
          />
        }
        centerComponent={<Text style={styles.headerText}>Checkout</Text>}
      />
      <Text style={styles.itemText}>
        <Text style={styles.item}>{items.length} </Text>
        item{items.length > 1 && 's'}
      </Text>
      <ScrollView 
      contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
      <KeyboardAwareFlatList
        data={items}
        contentContainerStyle={styles.flatlistStyle}
        renderItem={({item, index}) => (
          <CartItem
            image={item.image}
            item={item.item}
            size={item.size}
            finalPrice={item.finalPrice}
            originalPrice={item.originalPrice}
            quantity={item.quantity}
            deleteItem={() => {
              let removeIndex = items.indexOf(item);
              items.splice(removeIndex, 1);
              setItems([...items]);
            }}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        )}
      />
      
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.listTitleText}>Delivery address</Text>
        <Text style={styles.selectText} onPress={()=>navigation.navigate('ShippingAddress')}>Select</Text>
      </View>
      <Button
        onPress={() => {}}
        style={[styles.ButtonAddress, styles.iconStyle,styles.addressText]}
        title1={<Icon name={'map-pin'}size={hp(3)} color='black' />}
        title2="Set your delivery address"
      />
      <Text style={styles.listTitleText}>Shipping service</Text>
      <FlatList
        horizontal={true}
        contentContainerStyle={styles.imageListStyle}
        showsHorizontalScrollIndicator={false}
        data={deliveryImages}
        renderItem={({item, index}) => (
          <>
            <Image
              source={item?.image}
              key={index}
              style={
                listIndex == item.id
                  ? styles.renderSelectedImages
                  : styles.renderImages
              }
              resizeMode="contain"
              onPress={() => {
                setIndex(item.id);
              }}
            />
          </>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        )}
      />
      <CustomCheckoutTotal
        total={'$' + sum.toFixed(2)}
        shippingFee={'$' + 10}
        bagTotal={'$' + Total.toFixed(2)}
      />
      </ScrollView>
      <Button
        onPress={() => navigation.navigate('Payment')}
        style={[null, styles.checkoutText, null]}
        title1="Proceed to pay"
      />
    </View>
  );
}

export default Checkout;
