import React, {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {Image} from 'react-native-elements';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import Avatar from '../../../components/CustomAvatar';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import ProfileCategory from '../../../components/CustomProfileCategory';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Account({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();

  const [name, setName] = useState('Nolan Curtis');
  const [email, setEmail] = useState('nolancurtis@gmail.com');
  const [phone, setPhone] = useState('9876543210');
  const [image, setImage] = useState(null);

  const profileCategory = [
    {
      name: 'Full name',
      value: name,
      image: require('../../../../assets/icons/ProfileUser.png'),
    },
    {
      name: 'Phone number',
      value: phone,
      image: require('../../../../assets/icons/ProfilePhone.png'),
    },
    {
      name: 'Email',
      value: email,
      image: require('../../../../assets/icons/ProfileEmail.png'),
    },
    {
      name: 'Password',
      value: '*********',
      image: require('../../../../assets/icons/ProfilePassword.png'),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../../../assets/icons/AccountLinear.png')}
        style={styles.imageContainerStyle}
        resizeMode="stretch">
        <Header
          centerComponent={<Text style={styles.headerText}>My Profile</Text>}
          leftComponent={
            <Image
              source={require('../../../../assets/icons/Back.png')}
              style={styles.iconStyle}
              resizeMode="contain"
              onPress={() => navigation.pop()}
            />
          }
          rightComponent={
            <Button
              title1={
                <Image
                  source={require('../../../../assets/icons/EditProfile.png')}
                  resizeMode="contain"
                  style={styles.editStyle}
                />
              }
              title2={'Edit'}
              onPress={() => navigation.navigate('EditProfile')}
              style={[styles.editBtn, null, styles.editText]}
            />
          }
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
        <KeyboardAwareFlatList
          data={profileCategory}
          keyExtractor={item => item.text}
          renderItem={({item, index}) => (
            <ProfileCategory
              name={item.name}
              value={item.value}
              image={item.image}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Account;
