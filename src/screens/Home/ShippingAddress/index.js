import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import CartItem from '../../../components/CustomShippingAddressItem';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function ShippingAddress({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [selectedItem, setSelectedItem] = useState();
  const [items, setItems] = useState([
    {
      id: 1,
      image: require('../../../../assets/images/Hoodie.png'),
      name: 'Home',
      phone: '(342)  4522019',
      address: ' 220  New York',
    },
    {
      id: 2,
      image: require('../../../../assets/images/Shoes.png'),
      name: 'Office',
      phone: '(342)  4522019',
      address: ' 220  Montmartre,paris',
    },
  ]);
  const onPressItem = (item) => {
    setSelectedItem(item)
  }

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
        centerComponent={
          <Text style={styles.headerText}>Shipping address</Text>
        }
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Text style={styles.listTitleText}>Delivery address</Text>

        <KeyboardAwareFlatList
          data={items}
          contentContainerStyle={styles.flatlistStyle}
          renderItem={({item, index}) => (
            <CartItem
              item={item}
              phoneNumber={item.phone}
              address={item.address}
              selectedItem={selectedItem}
              setSelectedItem={onPressItem}
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
          <Button
        onPress={() => {}}
        style={[styles.ButtonAddress, styles.listTitleText, null]}
        title1="Add new address"
      />
      </ScrollView>
      <Button
        onPress={() => navigation.navigate('Payment')}
        style={[null, styles.checkoutText, null]}
        title1="Save address"
      />
    </View>
  );
}

export default ShippingAddress;
