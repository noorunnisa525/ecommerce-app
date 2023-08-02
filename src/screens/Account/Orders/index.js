import React, {useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import TopBar from '../../../components/CustomTopBar';
import Processing from './Processing';
import Completed from './Completed';
import Cancelled from './Cancelled';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Orders(props) {
  const styles = useThemeAwareObject(createStyles);
  const [selectedTab, setSelectedTab] = useState(0);

  const categories = [
    {id: 0, name: 'Processing'},
    {id: 1, name: 'Completed'},
    {id: 2, name: 'Cancelled'},
  ];

  const Process = () => <Processing props={props} />;

  const Complete = () => <Completed props={props} />;

  const Cancel = () => <Cancelled props={props} />;

  return (
    <View style={styles.mainContainer}>
      <Header
        centerComponent={<Text style={styles.headerText}>My Orders</Text>}
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.iconStyle}
            onPress={() => props.navigation.pop()}
          />
        }
      />
      <View style={styles.topBar}>
        {categories.map(item => (
          <TopBar
            barText={item.name}
            textStyle={
              item.id == 0
                ? [
                    styles.processText,
                    selectedTab == 0 && styles.processUnderline,
                  ]
                : item.id == 1
                ? [
                    styles.completeText,
                    selectedTab == 1 && styles.completeUnderline,
                  ]
                : item.id == 2
                ? [
                    styles.cancelText,
                    selectedTab == 2 && styles.cancelUnderline,
                  ]
                : null
            }
            onPress={() =>
              item.id == 0
                ? setSelectedTab(item.id)
                : item.id == 1
                ? setSelectedTab(item.id)
                : item.id == 2
                ? setSelectedTab(item.id)
                : null
            }
          />
        ))}
      </View>
      {selectedTab == 0
        ? Process()
        : selectedTab == 1
        ? Complete()
        : selectedTab == 2
        ? Cancel()
        : null}
    </View>
  );
}

export default Orders;
