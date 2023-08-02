import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Image} from 'react-native-elements';
import Button from '../../components/CustomButton';
import Header from '../../components/CustomHeader';
import Text from '../../components/CustomText';
import {useThemeAwareObject} from '../../theme/index';
import createStyles from './styles';
import CartItem from '../../components/CustomShippingAddressItem';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import NotificationItem from '../../components/NotificationItem';
import moment from 'moment/moment';


function Notifications({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const [selectedItem, setSelectedItem] = useState();
  const [items, setItems] = useState([
    {
      id: 1,
      image: require('../../../assets/images/Notification1.png'),
      name: 'Joan Perkins',
      address: 'its a really cute skirt! i did not expect to feel so good.',
      date: moment().utcOffset('+05:00').format('hh:mm A'), //To get the Current Hours
    },
    {
      id: 2,
      image: require('../../../assets/images/Notification2.png'),
      name: 'Nolan Vetrovs',
      address: 'its a really cute skirt! i did not expect to feel so good.',
      date: moment().utcOffset('+05:00').format('hh:mm A'), //To get the Current Hours
    },
  ]);
  const onPressItem = item => {
    setSelectedItem(item);
  };


  let notificationDay=moment().calendar(null, {
    sameDay: '[Todays]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
  });
  return (
    <View style={styles.mainContainer}>
      <Header
        leftComponent={
          <Image
            source={require('../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={<Text style={styles.headerText}>Notifications</Text>}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Text style={styles.notificationDayText}>{notificationDay}</Text>
        <KeyboardAwareFlatList
          data={items}
          contentContainerStyle={styles.flatlistStyle}
          renderItem={({item, index}) => (
            <NotificationItem
              item={item}
              phoneNumber={item.phone}
              address={item.address}
              avatarImg={item.image}
              selectedItem={selectedItem}
              setSelectedItem={onPressItem}
              time={item.date}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyView}>
              <Image
                source={require('../../../assets/images/EmptyNotifications.png')}
                resizeMode="contain"
                style={styles.cartImg}
              />
              <Text style={styles.emptyCartText}>No Notification</Text>
              <Text style={styles.emptyText}>
                We'll notify you when something arrives.
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default Notifications;
