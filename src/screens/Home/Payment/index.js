import React, {useState} from 'react';
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
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

function Payment({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [listIndex, setIndex] = useState(1);
  const [cardName, setCardName] = useState('Master Card');
  const [deliveryImages, setDeliveryImages] = useState([
    {
      id: 1,
      name: 'Master Card',
      image: require('../../../../assets/images/Mastercard.png'),
    },
    {
      id: 2,
      name: 'PayPal',
      image: require('../../../../assets/images/PayPal.png'),
    },
    {
      id: 3,
      name: 'Apple Pay',
      image: require('../../../../assets/images/ApplePay.png'),
    },
    {
      id: 4,
      name: 'Cash on delivery',
      image: require('../../../../assets/images/Union.png'),
    },
  ]);

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
        centerComponent={<Text style={styles.headerText}>Payment</Text>}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Image
          source={require('../../../../assets/images/MasterCardBackground.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />

        <Text style={styles.listTitleText}>Chose payment method</Text>
        <FlatList
          horizontal={true}
          contentContainerStyle={styles.imageListStyle}
          showsHorizontalScrollIndicator={false}
          data={deliveryImages}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={
                listIndex == item.id
                  ? styles.renderSelectedImages
                  : styles.renderImages
              }
              onPress={() => {
                setIndex(item.id);
                setCardName(item.name);
              }}>
              <ImageBackground
                source={item?.image}
                key={index}
                style={styles.image}
                resizeMode="contain">
                {listIndex == item.id && (
                  <View style={styles.tickImageContainer}>
                    <Image
                      source={require('../../../../assets/images/Tick.png')}
                      style={styles.tickImage}
                      resizeMode="cover"
                    />
                  </View>
                )}
              </ImageBackground>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyView}>
              <Text style={styles.emptyText}>Your cart is empty</Text>
            </View>
          )}
        />
        <Text style={styles.selectedText}>
          You select <Text style={styles.cardText}>({cardName})</Text>
        </Text>
        <Button
          onPress={() => {}}
          style={[styles.promoCode, styles.codeText]}
          title1="Promo code"
          title2={
            <Button
              onPress={() => {}}
              style={[styles.applyButton]}
              title1="Apply"
            />
          }
        />
      </ScrollView>
      <CustomCheckoutTotal shippingFee={'$' + 10} bagTotal={'$' + 259} />
      <Button
        onPress={() => {
          console.log("helloo");
          navigation.navigate('SuccessfulPayment');
        }}
        style={[null, styles.checkoutText, null]}
        title1="Place Order"
      />
    </View>
  );
}

export default Payment;
