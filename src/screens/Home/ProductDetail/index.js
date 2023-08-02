import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Carousel from 'react-native-reanimated-carousel';
import Header from '../../../components/CustomHeader';
import Button from '../../../components/CustomButton';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
import {DisplayStarRating} from '../../../components/CustomStarRating';
import TopBar from '../../../components/CustomTopBar';
import Reviews from './Reviews';

function ProductDetail({navigation}) {
  const styles = useThemeAwareObject(createStyles);

  const [rating, setRating] = useState(3.5);
  const [review, setReview] = useState(526);
  const [price, setPrice] = useState(140);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [favourite, setFavourite] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const images = [
    {image: require('../../../../assets/images/Sandals.png')},
    {image: require('../../../../assets/images/Shoes.png')},
    {image: require('../../../../assets/images/Joggers.png')},
  ];

  const size = [
    {size: 'S'},
    {size: 'M'},
    {size: 'L'},
    {size: 'XL'},
    {size: 'XXL'},
  ];

  const color = [
    {color: '#018AEC'},
    {color: '#F32C31'},
    {color: '#5D5D5D'},
    {color: '#000000'},
  ];

  const topBar = [
    {
      text: 'Description',
    },
    {
      text: 'Specification',
    },
    {
      text: 'Reviews',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        leftContainerStyle={{flex: 0}}
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.backIcon}
            onPress={() => navigation.pop()}
          />
        }
        rightComponent={
          <Image
            source={require('../../../../assets/icons/CartGray.png')}
            resizeMode="contain"
            style={styles.cartIcon}
            onPress={() => {navigation.navigate('CartStack')}}
          />
        }
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View>
          <Carousel
            loop
            width={styles.carouselWidth}
            height={styles.carouselHeight}
            autoPlay={true}
            data={images}
            style={styles.carouselContainer}
            scrollAnimationDuration={3500}
            renderItem={({item}) => {
              return (
                <Image
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
          <Text style={styles.productName}>
            Kangaroo Pocket Drawstring Hoodie
          </Text>
          <View style={styles.reviewContainer}>
            <DisplayStarRating
              maxStars={5}
              rating={rating}
              starSize={styles.starSize}
            />
            <Text style={styles.reviewText}>(Reviews {review})</Text>
          </View>
          <Text style={styles.priceText}>$ {price}</Text>
          <Text style={styles.availabilityText}>Available in stock</Text>
          <View style={styles.selectionView}>
            <Text style={styles.subcategory}>Size</Text>
            <View>
              <FlatList
                data={size}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item, index}) => (
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize == index && styles.selectedSize,
                    ]}
                    onPress={() =>
                      index == selectedSize
                        ? setSelectedSize()
                        : setSelectedSize(index)
                    }>
                    {item.size}
                  </Text>
                )}
                ListFooterComponent={() => null}
                ListFooterComponentStyle={size?.length > 5 && styles.footer}
              />
            </View>
          </View>
          <View style={styles.selectionView}>
            <Text style={styles.subcategory}>Color</Text>
            <View>
              <FlatList
                data={color}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item, index}) => (
                  <View
                    style={[
                      styles.colorBorder,
                      {
                        borderColor:
                          index == selectedColor ? item.color : 'transparent',
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() =>
                        index == selectedColor
                          ? setSelectedColor()
                          : setSelectedColor(index)
                      }
                      style={[{backgroundColor: item.color}, styles.colorView]}
                    />
                  </View>
                )}
                ListFooterComponent={() => null}
                ListFooterComponentStyle={color?.length > 5 && styles.footer}
              />
            </View>
          </View>
          <View style={styles.topBar}>
            {topBar.map((item, index) => (
              <TopBar
                barText={item.text}
                barImage={item.image}
                textStyle={styles.topBarText}
                onPress={() => setSelectedTab(index)}
              />
            ))}
          </View>
          {selectedTab == 0 ? (
            <Text style={styles.descriptionText}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </Text>
          ) : selectedTab == 1 ? null : selectedTab == 2 ? (
            <Reviews />
          ) : null}
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {}}
          style={[styles.bagBtn, null, styles.bagText]}
          title1={
            <Image
              source={require('../../../../assets/icons/CartWhite.png')}
              style={styles.cartBtnStyle}
              resizeMode="contain"
            />
          }
          title2="Add to bag"
        />
        <Button
          onPress={() => setFavourite(!favourite)}
          style={[styles.heartBtn, null]}
          title1={
            <Image
              source={
                favourite
                  ? require('../../../../assets/icons/HeartFill.png')
                  : require('../../../../assets/icons/HeartEmpty.png')
              }
              style={styles.heartBtnStyle}
            />
          }
        />
      </View>
    </View>
  );
}

export default ProductDetail;
