import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Input from '../../../components/CustomInputField';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function ForgotPassword({navigation}) {
  const styles = useThemeAwareObject(createStyles);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email / Phone is required')
      .test('email_or_phone', 'Email / Phone is invalid', value => {
        return validateEmail(value) || validatePhone(parseInt(value));
      }),
  });

  const validateEmail = email => {
    return yup.string().email().isValidSync(email);
  };

  const validatePhone = phone => {
    return yup
      .number()
      .integer()
      .positive()
      .test(phone => {
        return phone && phone.toString().length >= 10 ? true : false;
      })
      .isValidSync(phone);
  };

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
      <Image
        source={require('../../../../assets/images/PasswordRecovery.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <View style={{paddingVertical: 2}}>
          <Text style={styles.headerText}>Forgot Password?</Text>
          <Text style={styles.headerSubText}>
            Don’t worry! It happens. Please enter the email address associated
            with your account.
          </Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: ''}}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={values => {
              navigation.navigate('Otp', {
                screen: 'Forgot',
                key: values.email,
              });
            }}>
            {({handleChange, handleSubmit, handleBlur, values, errors}) => (
              <View style={styles.inputContainer}>
                <Input
                  inputStyle={styles.loginInputText}
                  inputContainerStyle={styles.inputContainerStyle}
                  placeholder="Email or phone number"
                  keyboardType={'email-address'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  onBlur={() => {
                    handleBlur('email');
                  }}
                />
                <Button
                  onPress={handleSubmit}
                  style={[styles.sendBtn, null]}
                  title1="Send"
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ForgotPassword;
