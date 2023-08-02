// import {appleAuth} from '@invertase/react-native-apple-authentication';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import {SocialIcon} from 'react-native-elements';
// import {
//   AccessToken,
//   AuthenticationToken,
//   GraphRequest,
//   GraphRequestManager,
//   LoginManager,
// } from 'react-native-fbsdk-next';
// import OneSignal from 'react-native-onesignal';
import {useDispatch} from 'react-redux';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

function Social({props}) {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useDispatch();

  const [facebookLoader, setFacebookLoader] = useState(false);
  const [googleLoader, setGoogleLoader] = useState(false);
  const [appleLoader, setAppleLoader] = useState(false);

  const facebookLogin = async () => {
    setFacebookLoader(true);
    LoginManager.logOut();
    try {
      const results = await LoginManager.logInWithPermissions([
        'email',
        'public_profile',
        'user_friends',
      ]);

      if (Platform.OS === 'ios') {
        const result =
          await AuthenticationToken.getAuthenticationTokenIOS().then(data => {
            const processRequest = new GraphRequest(
              '/me?fields=name,email',
              null,
              (err, res) =>
                getResponseInfo(err, res, result?.authenticationToken),
            ); // Start the graph request.
            new GraphRequestManager().addRequest(processRequest).start();
          });
      } else {
        if (!results.isCancelled) {
          // await AsyncStorage.setItem('login', 'facebook');
          // navigation.navigate('MainTab');
        }
        const result = AccessToken.getCurrentAccessToken().then(data => {
          const processRequest = new GraphRequest(
            '/me?fields=name,email',
            null,
            (err, res) =>
              getResponseInfo(err, res, data?.accessToken.toString()),
          ); // Start the graph request.
          new GraphRequestManager().addRequest(processRequest).start();
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const getResponseInfo = (error, result, info) => {
    if (error) {
      setFacebookLoader(false);
    } else {
      facebookAuth(result, info);
    }
  };

  const googleLogin = async () => {
    setGoogleLoader(true);
    GoogleSignin.signOut();
    try {
      GoogleSignin.configure({
        scopes: ['profile', 'email'],
        iosClientId:
          '141693205375-tmlga03ajuqog5u0l5ka7usmtni2n7db.apps.googleusercontent.com',
        androidClientId:
          '141693205375-llk406843a51p03e7cr5onlk3npot7r4.apps.googleusercontent.com',
        webClientId:
          '141693205375-f12pfcn56ia97di86b92n7kncnj54am6.apps.googleusercontent.com',
      });

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      googleAuth(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setGoogleLoader(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        setGoogleLoader(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setGoogleLoader(false);
      } else {
        setGoogleLoader(false);
      }
    }
  };

  const facebookAuth = async (result, info) => {
    let form = new FormData();
    form.append('name', result.name);
    form.append('email', result.email.toLowerCase());
    form.append('facebook_id', result.id);
    form.append('is_facebook', true);
    form.append('type', 'person');
    let apiData = {
      url: socialLogin,
      method: 'POST',
      data: form,
    };
    try {
      let res = await socialCall(apiData).unwrap();
      if (res.statusCode == 200) {
        setFacebookLoader(false);
        if (res.Data.user.phone) {
          if (res.Data.user.status == 'active') {
            OneSignal.setExternalUserId(
              result.email.toLowerCase(),
              res.Data.oneSignalHash,
            );
            dispatch(setToken(res.Data.access_token));
            dispatch(setUser(res.Data.user));
            dispatch(setLogin(true));
            props.navigation.replace('Tabs');
          } else {
            Toast('Please wait for your account verification from admin side');
          }
        } else {
          props.navigation.navigate('ProfileSetup', {
            isSocial: true,
            name: result.name,
            token: res.Data.access_token,
          });
        }
      } else {
        setFacebookLoader(false);
        Toast(res.message);
      }
    } catch (e) {
      setFacebookLoader(false);
      Toast(e.error || e.Data.errors);
    }
  };

  const googleAuth = async info => {
    let form = new FormData();
    form.append('name', info.user.name);
    form.append('email', info.user.email.toLowerCase());
    form.append('google_id', info.user.id);
    form.append('is_google', true);
    form.append('type', 'person');
    let apiData = {
      url: socialLogin,
      method: 'POST',
      data: form,
    };
    try {
      let res = await socialCall(apiData).unwrap();
      if (res.statusCode == 200) {
        setGoogleLoader(false);
        if (res.Data.user.phone) {
          if (res.Data.user.status == 'active') {
            OneSignal.setExternalUserId(
              info.user.email.toLowerCase(),
              res.Data.oneSignalHash,
            );
            dispatch(setToken(res.Data.access_token));
            dispatch(setUser(res.Data.user));
            dispatch(setLogin(true));
            props.navigation.replace('Tabs');
          } else {
            Toast('Please wait for your account verification from admin side');
          }
        } else {
          props.navigation.navigate('ProfileSetup', {
            isSocial: true,
            name: info.user.name,
            token: res.Data.access_token,
          });
        }
      } else {
        setGoogleLoader(false);
        Toast(res.message);
      }
    } catch (e) {
      setGoogleLoader(false);
      Toast(e.error || e.Data.errors);
    }
  };

  const onAppleButtonPress = async () => {
    setAppleLoader(true);
    const appleAuthRequestResponse = await appleAuth
      .performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })
      .then(async appleAuthResponse => {
        const {email, email_verified, is_private_email, sub} = jwt_decode(
          appleAuthResponse.identityToken,
        );
        var socialData = new FormData();
        socialData.append(
          'email',
          appleAuthResponse.email
            ? appleAuthResponse.email?.toLowerCase()
            : email.toLowerCase(),
        );
        socialData.append(
          'name',
          appleAuthResponse?.fullName?.givenName +
            appleAuthResponse?.fullName?.familyName,
        );
        socialData.append('apple_id', appleAuthResponse.user);
        socialData.append('is_apple', true);
        socialData.append('type', 'person');

        let apiData = {
          url: socialLogin,
          method: 'POST',
          data: socialData,
        };

        try {
          let res = await socialCall(apiData).unwrap();
          if (res.statusCode == 200) {
            setAppleLoader(false);
            if (res.Data.user.phone) {
              if (res.Data.user.status == 'active') {
                OneSignal.setExternalUserId(
                  res.Data.user?.email?.toLowerCase(),
                  res.Data.oneSignalHash,
                );
                dispatch(setToken(res.Data.access_token));
                dispatch(setUser(res.Data.user));
                dispatch(setLogin(true));
                props.navigation.replace('Tabs');
              } else {
                Toast(
                  'Please wait for your account verification from admin side',
                );
              }
            } else {
              props.navigation.navigate('ProfileSetup', {
                isSocial: true,
                name:
                  appleAuthResponse?.fullName?.givenName +
                  appleAuthResponse?.fullName?.familyName,
                token: res.Data.access_token,
              });
            }
          } else {
            setAppleLoader(false);
            Toast(res.message);
          }
        } catch (e) {
          setAppleLoader(false);
          Toast(e.error || e.Data.errors);
        }
      })
      .catch(e => {
        setAppleLoader(false);
      });
  };

  return (
    <View style={styles.socialContainer}>
      <SocialIcon
        iconSize={styles.iconSize}
        Component={TouchableOpacity}
        loading={facebookLoader}
        // onPress={() => !facebookLoader && facebookLogin()}
        raised={false}
        type="facebook"
      />
      <SocialIcon
        iconSize={styles.iconSize}
        Component={TouchableOpacity}
        loading={googleLoader}
        onPress={() => {
          // !googleLoader && GoogleSignin.signOut() && googleLogin();
        }}
        raised={false}
        type="google"
      />
      {Platform.OS == 'ios' && (
        <SocialIcon
          iconSize={styles.iconSize}
          Component={TouchableOpacity}
          loading={appleLoader}
          onPress={() => {
            // !appleLoader && onAppleButtonPress();
          }}
          style={styles.socialIcons}
          raised={false}
          type="apple"
        />
      )}
    </View>
  );
}

export default Social;
