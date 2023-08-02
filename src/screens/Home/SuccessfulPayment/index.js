import React from 'react';
import { ScrollView, View } from 'react-native';
import { Image } from 'react-native-elements';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import { useThemeAwareObject } from '../../../theme/index';
import createStyles from './styles';

function SuccessfulPayment({navigation}) {
  const styles = useThemeAwareObject(createStyles);

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
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Image
          source={require('../../../../assets/images/SuccessfulPayment.png')}
          resizeMode="contain"
          style={styles.paymentImg}
        />
        <Text style={styles.successText}>Successful</Text>
        <Text style={styles.successSubText}>
          Your order has been successfully placed &{'\n'}will be process by system.{'\n'}
          Thank you for your order
        </Text>
         <Button
        onPress={() => navigation.navigate('EmptyCart')}
        style={[styles.continueButton, styles.buttonText, null]}
        title1="Continue Shopping"
      />
      </ScrollView>
   
    </View>
  );
}

export default SuccessfulPayment;
