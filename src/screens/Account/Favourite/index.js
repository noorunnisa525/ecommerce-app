import React, {useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/CustomHeader';
import Item from '../../../components/CustomItem1';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Home({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [selectedTab, setSelectedTab] = useState(0);

  const images = [
    {image: require('../../../../assets/images/Hoodie.png')},
    {image: require('../../../../assets/images/LoginImage.png')},
    {image: require('../../../../assets/images/LogoutModal.png')},
    {image: require('../../../../assets/images/Sandals.png')},
    {image: require('../../../../assets/images/Shoes.png')},
    {image: require('../../../../assets/images/Joggers.png')},
  ];

  const [data, setData] = useState([
    {
      name: 'Kids wear',
      price: 300,
      image: require('../../../../assets/images/Hoodie.png'),
    },
    {
      name: 'Kids wear',
      price: 200,
      image: require('../../../../assets/images/LoginImage.png'),
    },
    {
      name: 'Kids wear',
      price: 350,
      image: require('../../../../assets/images/LogoutModal.png'),
    },
    {
      name: 'Kids wear',
      price: 250,
      image: require('../../../../assets/images/Sandals.png'),
    },
    {
      name: 'Kids wear',
      price: 100,
      image: require('../../../../assets/images/Shoes.png'),
    },
    {
      name: 'Kids wear',
      price: 150,
      image: require('../../../../assets/images/Joggers.png'),
    },
  ]);

  return (
    <View style={styles.mainContainer}>
      <Header
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.iconStyle}
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={<Text style={styles.headerText}>Wishlist</Text>}
        rightComponent={
          <Image
            source={require('../../../../assets/icons/Search.png')}
            resizeMode="contain"
            style={styles.searchIcon}
            onPress={() => {}}
          />
        }
      />
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.subHeading}>Favourite</Text>
          <Text style={styles.lengthText}> ({data.length})</Text>
        </View>
        <KeyboardAwareFlatList
          contentContainerStyle={styles.flatlistContainer}
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Item
              style={styles.itemStyle}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              favourite={true}
            />
          )}
        />
      </View>
    </View>
  );
}

export default Home;
