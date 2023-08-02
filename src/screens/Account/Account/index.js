import React, {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {Image} from 'react-native-elements';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import AccountCategory from '../../../components/CustomAccountCategory';
import Avatar from '../../../components/CustomAvatar';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Modal from '../../../components/CustomModal';
import Text from '../../../components/CustomText';
import TopBar from '../../../components/CustomTopBar';
import {setGuest} from '../../../redux/slices/guestSlice';
import {setToken} from '../../../redux/slices/userSlice';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Account({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  const [name, setName] = useState('Nolan Curtis');
  const [email, setEmail] = useState('nolancurtis@gmail.com');
  const [logoutModal, setLogoutModal] = useState(false);

  const topBar = [
    {
      text: 'Cart',
      image: require('../../../../assets/icons/Bag.png'),
    },
    {
      text: 'Wishlist',
      image: require('../../../../assets/icons/Heart.png'),
    },
    {
      text: 'Address',
      image: require('../../../../assets/icons/Location.png'),
    },
    {
      text: 'Coupon',
      image: require('../../../../assets/icons/Coupon.png'),
    },
  ];

  const accountCategory = [
    {
      name: 'My Profile',
      image: require('../../../../assets/icons/AccountUser.png'),
    },
    {
      name: 'Settings',
      image: require('../../../../assets/icons/AccountSetting.png'),
    },
    {
      name: 'Payment',
      image: require('../../../../assets/icons/AccountCard.png'),
    },
    {
      name: 'Orders',
      image: require('../../../../assets/icons/AccountOrders.png'),
    },
    {name: 'Logout', image: require('../../../../assets/icons/Logout.png')},
  ];

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../../../assets/icons/AccountLinear.png')}
        style={styles.imageContainerStyle}
        resizeMode="stretch">
        <Header
          centerComponent={<Text style={styles.headerText}>My Account</Text>}
        />
        <Avatar
          avatarContainer={styles.avatarContainer}
          size={styles.avatarSize}
        />
      </ImageBackground>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.emailText}>{email}</Text>
        <View style={styles.topBar}>
          {topBar.map((item, index) => (
            <TopBar
              barText={item.text}
              barImage={item.image}
              onPress={() => {
                index == 1
                  ? navigation.navigate('Favourite')
                  : index == 2
                  ? navigation.navigate('Address')
                  : null;
              }}
            />
          ))}
        </View>
        <KeyboardAwareFlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={accountCategory}
          keyExtractor={item => item.text}
          renderItem={({item, index}) => (
            <AccountCategory
              icon={item.image}
              name={item.name}
              onPress={() => {
                index == 0
                  ? navigation.navigate('Profile')
                  : index == 1
                  ? navigation.navigate('Settings')
                  : index == 3
                  ? navigation.navigate('MyOrder')
                  : index == 4
                  ? token
                    ? setLogoutModal(true)
                    : dispatch(setGuest(false))
                  : null;
              }}
            />
          )}
        />
        <Modal show={logoutModal}>
          <View style={styles.modalView}>
            <View style={styles.innerModal}>
              <Image
                source={require('../../../../assets/images/LogoutModal.png')}
                resizeMode="contain"
                style={styles.modalImage}
              />
              <Text style={styles.modalHeader}>Warning!</Text>
              <Text style={styles.modalText}>
                Are you sure you want to logout?
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={[styles.noBtn, styles.noText]}
                title1={'No'}
                onPress={() => {
                  setLogoutModal(false);
                }}
              />
              <Button
                style={[styles.yesBtn, styles.yesText]}
                title1={'Yes'}
                onPress={() => {
                  setLogoutModal(false);
                  dispatch(setToken(false));
                }}
              />
            </View>
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Account;
