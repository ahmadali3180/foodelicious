import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {setUser} from '../Redux/slices/user';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const RootNaviagtor = () => {
  const {user} = useSelector(state => state.user);
  const disptach = useDispatch();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(u => {
      if (u !== null) {
        const customUser = {
          displayName: u?.displayName,
          email: u?.email,
          uid: u?.uid,
          phoneNumber: u?.phoneNumber,
        };
        disptach(setUser(customUser));
      } else {
        disptach(setUser(u));
      }
    });
    return () => subscriber(); // unsubscribe on unmount
  }, []);

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    );
  }

  return <DrawerNavigator />;
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="ASHome" component={AppStack} />
      <Drawer.Screen name="My Profile" component={ProfileScreen} />
      <Drawer.Screen name="My Orders" component={OrderStack} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
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
      <Tab.Screen name="MTNHome" component={HomeStack} />
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
