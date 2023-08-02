import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../components/CustomText';
import Account from '../screens/Account/Account';
import Address from '../screens/Account/Address';
import EditProfile from '../screens/Account/EditProfile';
import Favourite from '../screens/Account/Favourite';
import OrderDetails from '../screens/Account/OrderDetails';
import ShippingAddress from '../screens/Home/ShippingAddress';
import MyOrder from '../screens/Account/Orders';
import PasswordChange from '../screens/Account/PasswordChange';
import Profile from '../screens/Account/Profile';
import Settings from '../screens/Account/Settings';
import Cart from '../screens/Home/Cart';
import Home from '../screens/Home/Home';
import ProductDetail from '../screens/Home/ProductDetail';
import EmptyCart from '../screens/Home/EmptyCart';
import SuccessfulPayment from '../screens/Home/SuccessfulPayment';
import Payment from '../screens/Home/Payment';
import Checkout from '../screens/Home/Checkout';
import {useThemeAwareObject} from '../theme';
import {wp} from '../util';
import Favorites from '../screens/Favorites';
import Notifications from '../screens/Notifications';
import ProductsCategory from '../screens/Home/ProductsCategory';
import SearchScreen from '../screens/Home/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'ProductsCategory'} component={ProductsCategory} />
      <Stack.Screen name={'ProductDetail'} component={ProductDetail} />
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Cart'} component={Cart} />
      <Stack.Screen name={'Checkout'} component={Checkout} />
      <Stack.Screen name={'Payment'} component={Payment} />
      <Stack.Screen name={'ShippingAddress'} component={ShippingAddress} />
      <Stack.Screen name={'SuccessfulPayment'} component={SuccessfulPayment} />
      <Stack.Screen name={'EmptyCart'} component={EmptyCart} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Account'} component={Account} />
      <Stack.Screen name={'Settings'} component={Settings} />
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'MyOrder'} component={MyOrder} />
      <Stack.Screen name={'OrderDetails'} component={OrderDetails} />
      <Stack.Screen name={'Address'} component={Address} />
      <Stack.Screen name={'PasswordChange'} component={PasswordChange} />
      <Stack.Screen name={'Favourite'} component={Favourite} />
    </Stack.Navigator>
  );
};

const TabNavigator = ({route}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      tabImage: {
        height: wp(4.5),
        width: wp(4.5),
      },
      focusedColor: {
        color: theme.color.textBlue,
      },
      grayColor: {
        color: theme.color.textGray,
      },
      tabBarColor: theme.color.backgroundColor,
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarAllowFontScaling: false,
          unmountOnBlur: true,
        }}
        backBehavior="initialRoute">
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={({route}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.textStyle,
                  focused ? styles.focusedColor : styles.grayColor,
                ]}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/icons/HomeActive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../assets/icons/HomeInactive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ),
            tabBarStyle: {
              backgroundColor: styles.tabBarColor,
              borderTopWidth: 0,
              display:
                getFocusedRouteNameFromRoute(route) == 'ProductDetail' ||
                getFocusedRouteNameFromRoute(route) == 'SearchScreen'
                  ? 'none'
                  : 'flex',
            },
          })}
        />
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={({route}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.textStyle,
                  focused ? styles.focusedColor : styles.grayColor,
                ]}>
                Cart
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/icons/CartActive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../assets/icons/CartInactive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ),
            tabBarStyle: {
              backgroundColor: styles.tabBarColor,
              borderTopWidth: 0,
              display:
                getFocusedRouteNameFromRoute(route) == 'Checkout' ||
                getFocusedRouteNameFromRoute(route) == 'Payment' ||
                getFocusedRouteNameFromRoute(route) == 'ShippingAddress'
                  ? 'none'
                  : 'flex',
            },
          })}
        />

        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={({route}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.textStyle,
                  focused ? styles.focusedColor : styles.grayColor,
                ]}>
                Notifications
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/icons/NotificationActive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../assets/icons/NotificationInactive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ),
          })}
        />

        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={({route}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.textStyle,
                  focused ? styles.focusedColor : styles.grayColor,
                ]}>
                Favorite
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/icons/HeartActive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../assets/icons/HeartInactive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ),
          })}
        />
        <Tab.Screen
          name="AccountStack"
          component={AccountStack}
          options={({route}) => ({
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.textStyle,
                  focused ? styles.focusedColor : styles.grayColor,
                ]}>
                Account
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/icons/AccountActive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../assets/icons/AccountInactive.png')}
                  style={styles.tabImage}
                  resizeMode="contain"
                />
              ),
            tabBarStyle: {
              backgroundColor: styles.tabBarColor,
              borderTopWidth: 0,
              display:
                getFocusedRouteNameFromRoute(route) == 'Profile' ||
                getFocusedRouteNameFromRoute(route) == 'EditProfile' ||
                getFocusedRouteNameFromRoute(route) == 'PasswordChange' ||
                getFocusedRouteNameFromRoute(route) == 'MyOrder' ||
                getFocusedRouteNameFromRoute(route) == 'OrderDetails' ||
                getFocusedRouteNameFromRoute(route) == 'Address' ||
                getFocusedRouteNameFromRoute(route) == 'Settings'
                  ? 'none'
                  : 'flex',
            },
          })}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
