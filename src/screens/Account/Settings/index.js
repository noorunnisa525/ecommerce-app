import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/CustomHeader';
import SettingsCategory from '../../../components/CustomSettings';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Settings({navigation}) {
  const styles = useThemeAwareObject(createStyles);

  const settingsCategory = [
    {
      name: 'Contact Us',
      image: require('../../../../assets/icons/SettingsContact.png'),
    },
    {
      name: 'Help',
      image: require('../../../../assets/icons/SettingsHelp.png'),
    },
    {
      name: 'Notification',
      image: require('../../../../assets/icons/SettingsNotification.png'),
    },
    {
      name: 'Update',
      image: require('../../../../assets/icons/SettingsUpdate.png'),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        centerComponent={<Text style={styles.headerText}>Settings</Text>}
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.iconStyle}
            onPress={() => navigation.pop()}
          />
        }
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <KeyboardAwareFlatList
          data={settingsCategory}
          keyExtractor={item => item.text}
          renderItem={({item, index}) => (
            <SettingsCategory
              icon={item.image}
              name={item.name}
              index={index}
              onPress={() => {}}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Settings;
