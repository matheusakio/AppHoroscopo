import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';



// import { Container } from './styles';

const headerSigno = ({uriHeader}) => {
  return (
    <View style={styles.container} keyboardShouldPersistTaps='always'>
        <Image  style={styles.imagem} source={uriHeader}/>

      </View>
  )
}

export default headerSigno;