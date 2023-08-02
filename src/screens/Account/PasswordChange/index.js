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
import Modal from '../../../components/CustomModal';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
function PasswordChange({navigation, route}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();
  const [oldPasswordVisible, setOldPasswordVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [successModal, setSuccessModal] = useState(false);

  const validationSchema = yup.object().shape({
    old: yup
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
      .required('Old password is required'),
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
      .required('New password is required'),
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
        <Text style={styles.headerText}>Change Password?</Text>
        <Formik
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{old: '', password: '', confirmPassword: ''}}
          onSubmit={values => {
            setSuccessModal(true);
          }}>
          {({handleChange, handleSubmit, handleBlur, values, errors}) => (
            <View style={styles.inputContainer}>
              <Input
                inputStyle={styles.inputText}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Old Password"
                value={values.old}
                onChangeText={handleChange('old')}
                secureTextEntry={oldPasswordVisible}
                onBlur={() => handleBlur('old')}
                error={errors.old}
                rightIcon={
                  !oldPasswordVisible ? (
                    <Image
                      source={require('../../../../assets/icons/Eye.png')}
                      style={styles.eyeStyle}
                      resizeMode="contain"
                      onPress={() => setOldPasswordVisible(!oldPasswordVisible)}
                    />
                  ) : (
                    <Image
                      source={require('../../../../assets/icons/EyeOff.png')}
                      style={styles.eyeStyle}
                      resizeMode="contain"
                      onPress={() => setOldPasswordVisible(!oldPasswordVisible)}
                    />
                  )
                }
              />
              <Input
                inputStyle={styles.inputText}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="New password"
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
                placeholder="Confirm password"
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
                title1="Change password"
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <Modal show={successModal}>
        <View style={styles.modalView}>
          <Image
            source={require('../../../../assets/images/PasswordModal.png')}
            resizeMode="contain"
            style={styles.modalImage}
          />
          <Text style={styles.modalHeader}>Success!</Text>
          <Text style={styles.modalText}>
            Your password has been successfully changed
          </Text>
          <Button
            style={[styles.doneBtn, styles.doneText]}
            title1={'Done'}
            onPress={() => {
              setSuccessModal(false);
              navigation.pop();
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

export default PasswordChange;
