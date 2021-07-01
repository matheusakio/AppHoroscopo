import React,  {useEffect} from 'react';
import {View, Image, Text} from 'react-native';


import styles from './styles';


import { useNavigation } from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000);
  }, []);



  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        resizeMode="contain"
        source={require('../../assets/logo/Logo.png')}
      />
      <View style={styles.logoNome}>

      <Text style={{fontSize: 25, color: '#d2466b', fontWeight: 'bold'}}> Horoscopo App</Text>
      </View>
    </View>
  );
};

export default Splash