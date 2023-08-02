import React, {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import Avatar from '../../../components/CustomAvatar';
import ImageInput from '../../../components/ImageInput';
import Header from '../../../components/CustomHeader';
import Text from '../../../components/CustomText';
import Input from '../../../components/CustomInputField';
import Button from '../../../components/CustomButton';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';

function Account({navigation}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();

  const [name, setName] = useState('Nolan Curtis');
  const [image, setImage] = useState(null);
  const [uri, setUri] = useState(null);

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
  });

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../../../assets/icons/AccountLinear.png')}
        style={styles.imageContainerStyle}
        resizeMode="stretch">
        <Header
          centerComponent={<Text style={styles.headerText}>Edit Profile</Text>}
          leftComponent={
            <Image
              source={require('../../../../assets/icons/Back.png')}
              style={styles.iconStyle}
              resizeMode="contain"
              onPress={() => navigation.pop()}
            />
          }
        />
        <View style={styles.avatarContainer}>
          <Avatar
            image={uri ? uri?.uri : image ? baseUrl.imageUrl + image : null}
            size={styles.avatarSize}
          />
          <ImageInput
            style={styles.cameraView}
            setUri={uri => {
              setImage(uri);
            }}>
            <Image
              source={require('../../../../assets/icons/Camera.png')}
              style={styles.cameraStyle}
              resizeMode="contain"
            />
          </ImageInput>
        </View>
      </ImageBackground>
      <Text style={[styles.subHeading, styles.avatarText]}>
        Change your photo
      </Text>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <Formik
          validationSchema={validationSchema}
          initialValues={{name: name}}
          onSubmit={values => {
            navigation.pop();
          }}
          validateOnChange={false}
          validateOnBlur={false}>
          {({handleChange, handleSubmit, handleBlur, values, errors}) => (
            <View style={styles.innerContainer}>
              <View>
                <Text style={styles.subHeading}>Name</Text>
                <Input
                  placeholder="Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => {
                    handleBlur('name');
                  }}
                  error={errors.name}
                  errorStyle={styles.errorStyle}
                />
                <View>
                  <Text style={styles.subHeading}>Password</Text>
                  <View style={styles.passwordView}>
                    <Text style={styles.passwordText}>********</Text>
                    <Button
                      style={[styles.changeBtn, styles.changeText, null]}
                      title1={'Change'}
                      title2={
                        <Image
                          source={require('../../../../assets/icons/AccountArrow.png')}
                          resizeMode="contain"
                          style={styles.arrowStyle}
                        />
                      }
                      onPress={() => navigation.navigate('PasswordChange')}
                    />
                  </View>
                </View>
              </View>
              <Button
                onPress={handleSubmit}
                style={[styles.saveBtn, null]}
                title1="Save Profile"
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Account;
