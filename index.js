/**
 * @format
 */
import 'react-native-reanimated';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initializeApp} from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAQCd4y7WSWLJg8kb9I1eyPeRPSavo_U30',
  authDomain: 'foodelicious-e13e7.firebaseapp.com',
  projectId: 'foodelicious-e13e7',
  storageBucket: 'foodelicious-e13e7.appspot.com',
  messagingSenderId: '809300336767',
  appId: '1:809300336767:web:0751fa5799456d87129f4a',
  // databaseURL: 'foodelicious-e13e7.firebaseio.com',
};

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
