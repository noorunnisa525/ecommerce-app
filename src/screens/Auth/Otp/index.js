import React, {useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Code from '../../../components/CodeVerification';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Snackbar from '../../../components/CustomSnackbar';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Otp({navigation, route}) {
  const styles = useThemeAwareObject(createStyles);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);

  function verifyCode(value) {
    setOtp(value);
  }

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  return (
    <View style={styles.mainContainer}>
      <Header
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
        <Image
          source={require('../../../../assets/images/OTP.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Enter OTP</Text>
        <Text style={styles.headerSubText}>
          4 digit code has been sent to{'\n'}
          <Text style={styles.keyText}>{route.params.key}</Text>
        </Text>
        <View style={styles.optContainer}>
          <Code verifyCode={value => verifyCode(value)} cellCount />
          <Button
            onPress={() => {
              Snackbar(
                `Code has been resent to ${route.params.key}. Check again.`,
                styles.snackbarSuccess,
              );
            }}
            style={[styles.resendButton, styles.noCodeText, styles.resendText]}
            title1="Didn't received the code? "
            title2="Resend"
          />
          <Text style={styles.errorText}>{error}</Text>
          <Button
            onPress={() => {
              if (containsSpecialChars(otp)) {
                setError('Invalid code');
              } else {
                if (otp.length == 4) {
                  setError('');
                  route.params.screen == 'Auth'
                    ? navigation.reset({
                        index: 0,
                        routes: [{name: 'Login'}],
                      })
                    : navigation.replace('PasswordReset', {
                        code: otp,
                      });
                } else if (otp.length > 0 && otp.length < 4) {
                  setError('Invalid code');
                } else {
                  setError('Code is required');
                }
              }
            }}
            style={[styles.verifyButton, styles.verifyText]}
            title1="Verify"
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Otp;
