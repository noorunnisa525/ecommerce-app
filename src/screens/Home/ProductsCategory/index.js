import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/CustomHeader';
import Item from '../../../components/CustomItem3';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function ProductsCategory({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [selectedTab, setSelectedTab] = useState(0);
  const route = useRoute();
  const categorySelected = route.params.categoriesData;
  console.log('categorySelected', categorySelected);

  const [data, setData] = useState([
    {
      name: 'Kids wear',
      price: 300,
      image: require('../../../../assets/images/Hoodie.png'),
      rating: 2,
    },
    {
      name: 'Kids wear',
      price: 200,
      image: require('../../../../assets/images/LoginImage.png'),
      rating: 2.5,
    },
    {
      name: 'Kids wear',
      price: 350,
      image: require('../../../../assets/images/LogoutModal.png'),
      rating: 1,
    },
    {
      name: 'Kids wear',
      price: 250,
      image: require('../../../../assets/images/Sandals.png'),
      rating: 3,
    },
    {
      name: 'Kids wear',
      price: 100,
      image: require('../../../../assets/images/Shoes.png'),
      rating: 4,
    },
    {
      name: 'Kids wear',
      price: 150,
      image: require('../../../../assets/images/Joggers.png'),
      rating: 5,
    },
  ]);

  const categories = [
    {id: 0, name: ' All'},
    {id: 1, name: 'Clothes'},
    {id: 2, name: 'Footwear'},
    {id: 3, name: 'Accessories'},
    {id: 4, name: 'Men'},
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
  useEffect(() => {
    setSelectedTab(categorySelected?.id);
  }, []);
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
        centerComponent={
          <Text style={styles.centerHeaderText}>{categorySelected?.name}</Text>
        }
        rightComponent={
          <View style={styles.rightComponent}>
            <Image
              source={require('../../../../assets/icons/Search.png')}
              resizeMode="contain"
              style={styles.searchIcon}
              onPress={() => {}}
            />
            <Image
              source={require('../../../../assets/icons/FilterIcon.png')}
              resizeMode="contain"
              style={styles.searchIcon}
              onPress={() => {}}
            />
          </View>
        }
      />
      <KeyboardAwareScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View>
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
        </View>

        <KeyboardAwareFlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Item
              style={styles.itemStyle}
              name={item.name + item.name + item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              onPress={() => navigation.navigate('ProductDetail')}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ProductsCategory;
