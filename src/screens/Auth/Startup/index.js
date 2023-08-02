import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import Text from '../../../components/CustomText';
import Header from '../../../components/CustomHeader';
import Button from '../../../components/CustomButton';
import {setGuest} from '../../../redux/slices/guestSlice';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
import {useDispatch} from 'react-redux';

function ForgotPassword({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <Header />
      <Image
        source={require('../../../../assets/images/Startup.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Discover the best collections</Text>
          <Text style={styles.subheaderText}>
            Get other intriguing offers and conveniently purchase your dream
            item with StackUp Shop.
          </Text>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigation.navigate('Login')}
              style={[styles.signupBtn, styles.signupText]}
              title1="Sign Up"
            />
            <Button
              onPress={() => navigation.navigate('CreateAccount')}
              style={[styles.signinBtn, styles.signinText]}
              title1="Sign In"
            />
          </View>
          <Text style={styles.continueText}>
            Continue as a{' '}
            <Text
              style={styles.guestText}
              onPress={() => dispatch(setGuest(true))}>
              Guest
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ForgotPassword;
