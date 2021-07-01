import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';



// import { Container } from './styles';

const headerHome = () => {
  return (
    <View style={styles.container} keyboardShouldPersistTaps='always'>
        <Image style={styles.imagem} source={require('../../../assets/header/Mascara.png')}/>

      </View>
      




    
  )
}

export default headerHome;