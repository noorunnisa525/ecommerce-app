import moment from 'moment';
import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/CustomHeader';
import Order from '../../../components/CustomOrder';
import OrderItem from '../../../components/CustomOrderItem';
import OrderPrice from '../../../components/CustomOrderPrice';
import Text from '../../../components/CustomText';
import Button from '../../../components/CustomButton';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function OrdersDetails(props) {
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.mainContainer}>
      <Header
        centerComponent={<Text style={styles.headerText}>Order Details</Text>}
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.iconStyle}
            onPress={() => props.navigation.pop()}
          />
        }
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <Order
          orderNumber={'#000UG225456'}
          status={'Placed'}
          type={'Cash'}
          date={moment().subtract(1, 'd').format('DD MMM YYYY')}
          price={'19.66'}
        />
        <OrderItem
          image={require('../../../../assets/images/Hoodie.png')}
          item={'Kangaroo Pocket Drawstring Hoodie'}
          size={'Medium'}
          finalPrice={'14.99'}
          originalPrice={'29.99'}
          quantity={'2'}
        />
        <OrderItem
          image={require('../../../../assets/images/Hoodie.png')}
          item={'Kangaroo Pocket Drawstring Hoodie'}
          size={'Medium'}
          finalPrice={'14.99'}
          originalPrice={'29.99'}
          quantity={'2'}
        />
        <OrderItem
          image={require('../../../../assets/images/Hoodie.png')}
          item={'Kangaroo Pocket Drawstring Hoodie'}
          size={'Medium'}
          finalPrice={'14.99'}
          originalPrice={'29.99'}
          quantity={'2'}
        />
      </KeyboardAwareScrollView>
      <View style={styles.bottomContainer}>
        <OrderPrice shipping={'5'} subtotal={'14.99'} total={'19.99'} />
        <View>
          <Text style={styles.deliveryText}>Delivery Address</Text>
          <View style={styles.addressView}>
            <Image
              source={require('../../../../assets/icons/AddressPin.png')}
              resizeMode="contain"
              style={styles.iconStyle}
            />
            <Text numberOfLines={2} style={styles.addressText}>
              349/A, Stackup Solutions, Main Ferozepur Rd, Block M Gulberg III,
              Lahore
            </Text>
          </View>
        </View>
        <Button
          style={[styles.cancelButton, styles.cancelText]}
          title1={'Cancel order'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

export default OrdersDetails;
