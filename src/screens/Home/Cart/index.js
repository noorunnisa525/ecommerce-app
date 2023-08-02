import React, {useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import CartItem from '../../../components/CustomCartItem';
import CustomCartTotal from '../../../components/CustomCardTotal';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
import Button from '../../../components/CustomButton';
function Cart({navigation}) {
  const styles = useThemeAwareObject(createStyles);
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
 
let sum = 0;

items.forEach(element => {
  sum += element.finalPrice;
});  

  return (
    <View style={styles.mainContainer}>
      <Header
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.backIcon}
            onPress={() => navigation.navigate('HomeStack')}
          />
        }
        centerComponent={<Text style={styles.headerText}>Cart</Text>}
      />
      <Text style={styles.itemText}>
        <Text style={styles.item}>{items.length} </Text>
        item{items.length > 1 && 's'}
      </Text>
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
      <CustomCartTotal total={'$' +sum.toFixed(2)}/>
      <Button
        onPress={() => navigation.navigate('Checkout')}
        style={[null, styles.checkoutText, null]}
        title1="Check out"
      />
    </View>
  );
}

export default Cart;
