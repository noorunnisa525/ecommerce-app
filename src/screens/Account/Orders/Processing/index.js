import moment from 'moment';
import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import Order from '../../../../components/CustomOrder';
import Text from '../../../../components/CustomText';
import {useThemeAwareObject} from '../../../../theme/index';
import createStyles from './styles';

function Processing({props}) {
  const styles = useThemeAwareObject(createStyles);

  const data = [
    {
      number: '#000UG225456',
      status: 'Placed',
      type: 'Cash',
      date: moment().subtract(1, 'd').format('DD MMM YYYY'),
      price: '19.66',
    },
    {
      number: '#000UG243895',
      status: 'Placed',
      type: 'Cash',
      date: moment().subtract(4, 'd').format('DD MMM YYYY'),
      price: '19.66',
    },
    {
      number: '#000UG284593',
      status: 'Ready',
      type: 'Card',
      date: moment().subtract(8, 'd').format('DD MMM YYYY'),
      price: '19.66',
    },
  ];

  return (
    <KeyboardAwareFlatList
      showsVerticalScrollIndicator={false}
      data={data}
      onRefresh={() => console.log('firstItem')}
      refreshing={false}
      contentContainerStyle={styles.mainContainer}
      renderItem={({item}) => (
        <Order
          orderNumber={item.number}
          status={item.status}
          type={item.type}
          date={item.date}
          price={item.price}
          onPress={() => props.navigation.navigate('OrderDetails')}
        />
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>No orders being processed</Text>
        </View>
      )}
    />
  );
}

export default Processing;
