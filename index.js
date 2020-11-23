/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import AppNavigators from './src/navigator/AppNavigators';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigators);
