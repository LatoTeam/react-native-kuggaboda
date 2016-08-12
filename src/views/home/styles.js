import {
  StyleSheet,
  Dimensions
} from 'react-native';

import theme from '../../template/baseTheme';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    color: theme.brandPrimary,
    textAlign:'center',
    alignSelf:'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;
