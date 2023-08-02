import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import moment from 'moment';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import DatePicker from '../../../components/CustomDatePicker';
import Header from '../../../components/CustomHeader';
import Input from '../../../components/CustomInputField';
import RadioGroup from '../../../components/CustomRadioButton';
import Snackbar from '../../../components/CustomSnackbar';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/index';
import Social from '../Social';
import createStyles from './styles';

function Register({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isSelected, setSelection] = useState(false);
  const [date, setDate] = useState('');
  const buttons = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];
  const [gender, setGender] = useState();
  const [genderError, setGenderError] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .required('Email address or phone number is required')
      .test('email_or_phone', 'Email / Phone is invalid', value => {
        return validateEmail(value) || validatePhone(parseInt(value));
      }),
    password: yup
      .string()
      .min(
        8,
        ({}) =>
          `Minimum 8 characters. 1 capital and 1 lower case and 1 special character is must.`,
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        `Minimum 8 characters. 1 capital and 1 lower case and 1 special character is must.`,
      )
      .required('Password is required'),
    address: yup.string(),
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
        <Text style={styles.headerText}>Create account!</Text>
        <Text style={styles.headerSubText}>Fill in the form to continue.</Text>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Formik
          validationSchema={validationSchema}
          initialValues={{name: '', email: '', password: ''}}
          onSubmit={values => {
            gender
              ? isSelected
                ? navigation.navigate('Otp', {
                    screen: 'Auth',
                    key: values.email,
                  })
                : Snackbar('Please accept the privacy check')
              : setGenderError(true);
          }}
          validateOnChange={false}
          validateOnBlur={false}>
          {({handleChange, handleSubmit, handleBlur, values, errors}) => (
            <View style={styles.inputContainer}>
              <Input
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => {
                  handleBlur('name');
                }}
                error={errors.name}
              />
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
                      onPress={() => setPasswordVisible(!passwordVisible)}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={require('../../../../assets/icons/EyeOff.png')}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                  )
                }
                error={errors.password}
              />
              <Input
                placeholder="Address (optional)"
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={() => {
                  handleBlur('address');
                }}
              />
              <DatePicker
                value={date}
                type="date"
                customDateView={styles.dateInput}
                onChange={date => {
                  setDate(date);
                }}
                placeholder="Date of birth (optional)"
                format={moment(date).format('DD-MM-YYYY')}
                maxDate={new Date()}
              />
              <RadioGroup options={buttons} setChosenOption={setGender} />
              {
                <Text style={styles.errorText}>
                  {genderError ? 'Gender is required' : ''}
                </Text>
              }
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  tintColors={{
                    true: styles.checkboxColor,
                    false: styles.checkboxColor,
                  }}
                />
                <Text style={styles.termsAndConditionText}>
                  I have read the{' '}
                  <Text style={styles.privacyText}>Privacy Policy</Text>
                </Text>
              </View>
              <Button
                onPress={() => {
                  handleSubmit();
                  if (gender) {
                    setGenderError(false);
                  } else {
                    setGenderError(true);
                  }
                }}
                style={[null, styles.registerText, null]}
                title1="Register"
                title2={
                  <Image
                    source={require('../../../../assets/icons/Send.png')}
                    resizeMode="contain"
                    style={styles.iconStyle}
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
            onPress={() => navigation.replace('Login')}>
            Don't have any account?{' '}
            <Text style={styles.signUpText}>Sign Up</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Register;
