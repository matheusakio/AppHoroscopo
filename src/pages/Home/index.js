import React from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import NavHome from '../../components/navHome';
import Header from '../../components/header/headerHome'

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.titulo}>
        <Text style={{fontSize: 14}}>Escolha um signo e descubra o horoscopo do dia!</Text>
      </View>
      <NavHome/>

    </SafeAreaView>

  )
}

export default home;