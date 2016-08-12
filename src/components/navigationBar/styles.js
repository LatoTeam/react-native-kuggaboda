import {
  StyleSheet,
  Dimensions
} from 'react-native';

import theme from '../../template/baseTheme';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: theme.brandPrimary
  },
  title: {
    color: theme.inverseTextColor
  }
});

export default styles;
