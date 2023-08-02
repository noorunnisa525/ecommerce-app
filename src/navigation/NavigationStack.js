import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import CreateAccount from '../screens/Auth/CreateAccount';
import Login from '../screens/Auth/Login';
import Otp from '../screens/Auth/Otp';
import Startup from '../screens/Auth/Startup';
import PasswordRecovery from '../screens/Auth/PasswordRecovery';
import PasswordReset from '../screens/Auth/PasswordReset';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Startup'} component={Startup} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'CreateAccount'} component={CreateAccount} />
      <Stack.Screen name={'Otp'} component={Otp} />
      <Stack.Screen name={'PasswordRecovery'} component={PasswordRecovery} />
      <Stack.Screen name={'PasswordReset'} component={PasswordReset} />
    </Stack.Navigator>
  );
};

const App = () => {
  const token = useSelector(state => state.user.token);
  const guest = useSelector(state => state.guest.guest);

  return token ? (
    <TabNavigator />
  ) : guest ? (
    <TabNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default App;
