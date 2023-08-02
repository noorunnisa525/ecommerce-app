import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Image } from 'react-native-elements';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import { useThemeAwareObject } from '../../../theme/index';
import createStyles from './styles';

function EmptyCart({navigation}) {
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
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Image
          source={require('../../../../assets/images/EmptyCartImg.png')}
          resizeMode="contain"
          style={styles.cartImg}
        />
        <Text style={styles.emptyCartText}>Your shopping cart is empty</Text>
        <Text style={styles.successSubText}>
        Fortunately, there’s an easy solutions.
        </Text>

       
         <Button
        onPress={() => navigation.navigate('HomeStack')}
        style={[styles.continueButton, styles.buttonText, null]}
        title1="Go to shopping"
      />
      </ScrollView>
   
    </View>
  );
}

export default EmptyCart;
