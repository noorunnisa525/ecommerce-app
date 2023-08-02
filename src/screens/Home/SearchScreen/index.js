import React, {useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {useThemeAwareObject} from '../../../theme/index';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import createStyles from './styles';
import Item from '../../../components/CustomItem1';
import SearchBar from '../../../components/SearchBar';

import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
function SearchScreen({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [selectedTab, setSelectedTab] = useState(0);

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

  const categories = [
    {id: 0, name: 'All'},
    {id: 1, name: 'Women'},
    {id: 2, name: 'Mens'},
    {id: 3, name: 'Kids'},
    {id: 4, name: 'Winter'},
    {id: 5, name: 'Sports'},
  ];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setData(array);
  }
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
        // centerComponent={<Text style={styles.headerText}>Wishlist</Text>}
        rightComponent={<SearchBar placeholder={'Search h'} />}
      />
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.subHeading}>Your Favorite . </Text>
          <Text style={styles.subHeading}>{data.length}</Text>
        </View>
        <KeyboardAwareScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          contentContainerStyle={styles.topBar}>
          {categories.map((item, index) => (
            <Text
              style={[
                styles.barText,
                selectedTab == index && styles.selectedBarText,
              ]}
              onPress={() => {
                setSelectedTab(index);
                shuffle(data);
              }}>
              {item.name}
            </Text>
          ))}
        </KeyboardAwareScrollView>
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

export default SearchScreen;
