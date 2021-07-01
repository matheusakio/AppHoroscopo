import { ifIphoneX } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:-50,
    left:0,
    right:0,
    zIndex: -1,
  },
  imagem: {
    position:'absolute',
    width: '100%',
    opacity: 0.5,
    ...Platform.select({
      ios: {
        height: 220
      },
      android: {
        height: 200
      },
    }),
    ...ifIphoneX({
      height: 245
    }),
    resizeMode: 'stretch',
    top:0,
    left:0,
    right:0,
    zIndex: -1,
  },
});

export default styles;