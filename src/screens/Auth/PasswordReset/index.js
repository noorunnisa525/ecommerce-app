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
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
function PasswordReset({navigation, route}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  const loginValidationSchema = yup.object().shape({
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .min(
        8,
        ({}) =>
          `Minimum 8 characters. 1 capital and 1 lower case and 1 special character is must.`,
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        `Minimum 8 characters. 1 capital and 1 lower case and 1 special character is must.`,
      )
      .required('Confirm password is required'),
  });

  return (
    <View style={styles.mainContainer}>
      <Header
        containerStyle={styles.headerContainerStyle}
        backgroundColor={styles.headerColor}
        statusbar={styles.statusBar}
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.iconStyle}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <Image
        source={require('../../../../assets/images/ResetPassword.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Text style={styles.headerText}>Reset Password?</Text>
        <Text style={styles.headerSubText}>
          Enter a new password to recover your account
        </Text>
        <Formik
          validationSchema={loginValidationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{password: '', confirmPassword: ''}}
          onSubmit={values => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }}>
          {({handleChange, handleSubmit, handleBlur, values, errors}) => (
            <View style={styles.inputContainer}>
              <Input
                inputStyle={styles.inputText}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={passwordVisible}
                onBlur={() => handleBlur('password')}
                error={errors.password}
                rightIcon={
                  !passwordVisible ? (
                    <Image
                      source={require('../../../../assets/icons/Eye.png')}
                      style={styles.eyeStyle}
                      resizeMode="contain"
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  ) : (
                    <Image
                      source={require('../../../../assets/icons/EyeOff.png')}
                      style={styles.eyeStyle}
                      resizeMode="contain"
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  )
                }
              />
              <Input
                inputStyle={styles.inputText}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry={confirmPasswordVisible}
                onBlur={() => handleBlur('confirmPassword')}
                error={errors.confirmPassword}
                rightIcon={
                  !confirmPasswordVisible ? (
                    <Image
                      source={require('../../../../assets/icons/Eye.png')}
                      style={styles.eyeStyle}
                      resizeMode="contain"
                      onPress={() =>
                        setConfirmPasswordVisible(!confirmPasswordVisible)
                      }
                    />
                  ) : (
                    <Image
                      source={require('../../../../assets/icons/EyeOff.png')}
                      style={styles.eyeStyle}
                      resizeMode="contain"
                      onPress={() =>
                        setConfirmPasswordVisible(!confirmPasswordVisible)
                      }
                    />
                  )
                }
              />
              <Button
                onPress={handleSubmit}
                style={[styles.doneButton, null]}
                title1="Recover"
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default PasswordReset;
