/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import WelcomePage from './src/page/WelcomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WelcomePage);
