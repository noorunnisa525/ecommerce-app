import {Formik} from 'formik';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import Button from '../../../components/CustomButton';
import Divider from '../../../components/CustomDivider';
import Header from '../../../components/CustomHeader';
import Input from '../../../components/CustomInputField';
import Map from '../../../components/CustomMap';
import Snackbar from '../../../components/CustomSnackbar';
import Text from '../../../components/CustomText';
import {
  getCurrentLocation,
  locationPermission,
} from '../../../components/LocationPermission';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Settings({navigation}) {
  const styles = useThemeAwareObject(createStyles);

  const [address, setAddress] = useState([
    {title: 'Work', address: 'Temp Address 1'},
    {title: 'Work', address: 'Temp Address 2'},
  ]);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const validationSchema = yup.object().shape({
    address: yup.string().required('Address is required'),
  });

  useEffect(() => {
    getLocation();
  }, []);

  const mapRef = useRef();

  useEffect(() => {
    if (lat && lng) {
      onMapReady();
    }
  }, [lat, lng]);

  function onMapReady() {
    setTimeout(
      () =>
        mapRef?.current?.animateToRegion({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0,
          longitudeDelta: 0.008,
        }),
      1500,
    );
  }

  const getLocation = async () => {
    await locationPermission()
      .then(async locPermissionGranted => {
        if (locPermissionGranted) {
          const {latitude, longitude} = await getCurrentLocation();
          setLat(latitude);
          setLng(longitude);
        }
      })
      .catch(e => {
        Snackbar('Please enable your location permission from settings');
      });
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        centerComponent={<Text style={styles.headerText}>Address</Text>}
        leftComponent={
          <Image
            source={require('../../../../assets/icons/Back.png')}
            resizeMode="contain"
            style={styles.iconStyle}
            onPress={() => navigation.pop()}
          />
        }
      />
      <KeyboardAwareFlatList
        data={address}
        style={styles.container}
        renderItem={({item, index}) => (
          <View style={styles.addressView}>
            <View style={styles.rowContainer}>
              <Text
                numberOfLines={1}
                style={index == 0 ? styles.primaryTitle : styles.secondaryText}>
                {index + 1}- {item.title}
              </Text>
              {index == 0 && (
                <Image
                  source={require('../../../../assets/icons/DefaultStar.png')}
                  resizeMode="contain"
                  style={styles.starStyle}
                />
              )}
            </View>
            <Text
              numberOfLines={2}
              style={index == 0 ? styles.primaryAddress : styles.secondaryText}>
              {item.address}
            </Text>
            <Divider />
          </View>
        )}
      />
      {lat && lng ? (
        <>
          <View>
            <View style={styles.mapView}>
              <Image
                source={require('../../../../assets/icons/Location.png')}
                resizeMode="contain"
                style={styles.markerStyle}
              />
            </View>
            <Map
              initialRegion={{
                latitude: parseFloat(lat),
                longitude: parseFloat(lng),
                latitudeDelta: 0,
                longitudeDelta: 0.008,
              }}
              ref={mapRef}
              style={styles.map}
              zoomControlEnabled
              showsUserLocation
              showsMyLocationButton
            />
          </View>

          <Formik
            validationSchema={validationSchema}
            initialValues={{address: ''}}
            onSubmit={(values, {resetForm}) => {
              setAddress([
                {
                  title: values.address,
                  address: `${values.address}`,
                },
                ...address,
              ]);
              resetForm({values: ''});
            }}
            validateOnChange={false}
            validateOnBlur={false}>
            {({handleChange, handleSubmit, handleBlur, values, errors}) => (
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Address Title"
                  value={values.address}
                  onChangeText={handleChange('address')}
                  onBlur={() => {
                    handleBlur('address');
                  }}
                  error={errors.address}
                />

                <Button
                  onPress={handleSubmit}
                  style={[styles.addressButton, null]}
                  title1="Save address"
                />
              </View>
            )}
          </Formik>
        </>
      ) : (
        <View style={styles.activityView}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
}

export default Settings;
