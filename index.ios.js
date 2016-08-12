import { AppRegistry, StatusBar } from 'react-native';
import Root from "./src/root";

StatusBar.setBarStyle('default');
AppRegistry.registerComponent('ReactNativeBase', () => Root);
