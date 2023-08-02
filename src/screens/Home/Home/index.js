import React, {useState} from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import Carousel from 'react-native-reanimated-carousel';
import Header from '../../../components/CustomHeader';
import Item from '../../../components/CustomItem3';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
import {useFocusEffect} from '@react-navigation/native';

function Home({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [selectedTab, setSelectedTab] = useState(0);
  const [scrollHeader, setScrollHeader] = useState(false);
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
  const handleScroll = event => {
    console.log(event.nativeEvent.contentOffset.y);
    if (event.nativeEvent.contentOffset.y >= 160) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      return () => setSelectedTab(0);
    }, [selectedTab]),
  );
  return (
    <View style={styles.mainContainer}>
      <Header
        leftContainerStyle={{flex: 0}}
        leftComponent={
          scrollHeader ? (
            <Text style={styles.exploreText}>Explore</Text>
          ) : (
            <Image
              source={require('../../../../assets/images/HomePic.png')}
              resizeMode="contain"
              style={styles.leftImg}
              onPress={() => {}}
            />
          )
        }
        rightComponent={
          <View style={styles.rightComponent}>
            <Image
              source={require('../../../../assets/icons/Search.png')}
              resizeMode="contain"
              style={styles.searchIcon}
              onPress={() => {navigation.navigate('SearchScreen')}}
            />
            <Image
              source={require('../../../../assets/icons/BellImg.png')}
              resizeMode="contain"
              style={styles.searchIcon}
              onPress={() => {navigation.navigate('Notifications')}}
            />
          </View>
        }
      />
      <KeyboardAwareScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        keyboardShouldPersistTaps="always">
        <Carousel
          loop
          width={styles.carouselWidth}
          height={styles.carouselHeight}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={4000}
          renderItem={({item}) => {
            return (
              <Image
                containerStyle={styles.imageView}
                source={item.image}
                resizeMode="contain"
                style={styles.carouselImage}
              />
            );
          }}
          mode="horizontal"
          snapEnabled={false}
          enabled={false}
        />
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
                  if (item?.id != 0) {
                    navigation.navigate('ProductsCategory', {
                      categoriesData: item,
                    });
                  }
                }}>
                {item.name}
              </Text>
            ))}
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.subHeading}>Select for you</Text>
          <Text style={styles.seeText}>See all</Text>
        </View>
        <KeyboardAwareFlatList
          data={data}
          horizontal
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
        <View style={styles.rowContainer}>
          <Text style={styles.subHeading}>Most Popular</Text>
          <Text style={styles.seeText}>See all</Text>
        </View>
        <KeyboardAwareFlatList
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
              onPress={() => navigation.navigate('ProductDetail')}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Home;
