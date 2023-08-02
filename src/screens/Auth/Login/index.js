import {Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import Header from '../../../components/CustomHeader';
import Input from '../../../components/CustomInputField';
import Text from '../../../components/CustomText';
import {setToken} from '../../../redux/slices/userSlice';
import {useThemeAwareObject} from '../../../theme/index';
import Social from '../Social';
import createStyles from './styles';

function Login({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email address or phone number is required')
      .test('email_or_phone', 'Email / Phone is invalid', value => {
        return validateEmail(value) || validatePhone(parseInt(value));
      }),
    password: yup.string().required('Password is required'),
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
      <Header />
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Let's sign you in 😃</Text>
        <Text style={styles.headerSubText}>
          Login with your account to continue.
        </Text>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            dispatch(setToken(true));
          }}
          validateOnChange={false}
          validateOnBlur={false}>
          {({handleChange, handleSubmit, handleBlur, values, errors}) => (
            <View style={styles.inputContainer}>
              <Input
                placeholder="Email or phone number"
                value={values.email}
                keyboardType={'email-address'}
                onChangeText={handleChange('email')}
                onBlur={() => {
                  handleBlur('email');
                }}
                error={errors.email}
              />
              <Input
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={passwordVisible}
                onBlur={() => {
                  handleBlur('password');
                }}
                rightIcon={
                  !passwordVisible ? (
                    <Image
                      source={require('../../../../assets/icons/Eye.png')}
                      style={styles.iconStyle}
                      resizeMode="contain"
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  ) : (
                    <Image
                      source={require('../../../../assets/icons/EyeOff.png')}
                      style={styles.iconStyle}
                      resizeMode="contain"
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  )
                }
                error={errors.password}
              />
              <Text
                onPress={() => {
                  navigation.navigate('PasswordRecovery');
                }}
                style={styles.forgotPasswordText}>
                Forgot Password?
              </Text>
              <Button
                onPress={handleSubmit}
                style={[null, styles.loginText, null]}
                title1="Log In"
                title2={
                  <Image
                    source={require('../../../../assets/icons/Send.png')}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                }
              />
            </View>
          )}
        </Formik>
        <View>
          <Text style={styles.continueText}>Or continue with</Text>
          <Social />
        </View>
        <View style={styles.termsButton}>
          <Text
            style={styles.noAccountText}
            onPress={() => navigation.replace('CreateAccount')}>
            Don't have any account?{' '}
            <Text style={styles.signUpText}>Sign Up</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Login;
