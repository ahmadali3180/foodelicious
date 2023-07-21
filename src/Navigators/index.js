import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {
  HomeScreen,
  ProductDetailsScreen,
  OrderScreen,
  OrderHistoryScreen,
  CartScreen,
  CheckoutScreen,
  ProfileScreen,
  SettingsScreen,
  WelcomeScreen,
  SignupScreen,
  LoginScreen,
  OTPScreen,
  PasswordResetScreen,
  NewPasswordScreen,
} from '../Screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNaviagtor = () => {
  const user = useSelector(state => state.user.user);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user === null ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <Stack.Screen name="App" component={AppStack} />
      )}
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HSHome" component={HomeScreen} />
      <Stack.Screen name="HSDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OSOrders" component={OrderScreen} />
      <Stack.Screen name="OSOrderHistory" component={OrderHistoryScreen} />
    </Stack.Navigator>
  );
};
const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CSCart" component={CartScreen} />
      <Stack.Screen name="CSCheckout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PSProfile" component={ProfileScreen} />
      <Stack.Screen name="PSSettings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainApp" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

export default RootNaviagtor;
