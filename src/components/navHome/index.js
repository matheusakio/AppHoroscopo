import React from 'react';
import { TouchableOpacity, View, Image, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';


// import { Container } from './styles';

const navHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Aquário'}) } style={{...styles.imagens, backgroundColor: '#fed5d1'}}>
          <Image style={{height:65, width:62}} source={require('../../assets/imagemSignos/Aquario.png')}/>
        </TouchableOpacity>
        <Text>Aquário</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Peixes'}) } style={{...styles.imagens, backgroundColor: '#d0e8ea'}}>
          <Image style={{height:75, width:60}} source={require('../../assets/imagemSignos/Peixes.png')}/>
        </TouchableOpacity >
        <Text>Peixes</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Áries'}) }style={{...styles.imagens, backgroundColor: '#f9fdcb'}}>
          <Image style={{height:60, width:60}} source={require('../../assets/imagemSignos/Aries.png')}/>
        </TouchableOpacity >
        <Text>Áries</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Touro'}) }style={{...styles.imagens, backgroundColor: '#dbec85'}}>
          <Image style={{height:65, width:66}} source={require('../../assets/imagemSignos/Touro.png')}/>
        </TouchableOpacity>
        <Text>Touro</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Gêmeos'}) } style={{...styles.imagens, backgroundColor: '#c5e4d8'}}> 
          <Image style={{height:70, width:60}} source={require('../../assets/imagemSignos/Gemeos.png')}/>
        </TouchableOpacity>
        <Text>Gêmeos</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Câncer'}) } style={{...styles.imagens, backgroundColor: '#edc8e9'}}>
          <Image style={{height:60, width:72}} source={require('../../assets/imagemSignos/Cancer.png')}/>
        </TouchableOpacity>
        <Text>Câncer</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Leão'}) } style={{...styles.imagens, backgroundColor: '#c5cdf4'}}>
          <Image style={{height:65, width:60}} source={require('../../assets/imagemSignos/Leao.png')}/>
        </TouchableOpacity>
        <Text>Leão</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Virgem'}) } style={{...styles.imagens, backgroundColor: '#ffefcb'}}>
          <Image style={{height:65, width:60}} source={require('../../assets/imagemSignos/Virgem.png')}/>
        </TouchableOpacity>
        <Text>Virgem</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Libra'}) } style={{...styles.imagens, backgroundColor: '#f5b6ab'}}>
          <Image style={{height:60, width:70}} source={require('../../assets/imagemSignos/Libra.png')}/>
        </TouchableOpacity >
        <Text>Libra</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Escorpião'}) } style={{...styles.imagens, backgroundColor: '#e5cbb9'}}>
          <Image style={{height:60, width:65}} source={require('../../assets/imagemSignos/Escorpiao.png')}/>
        </TouchableOpacity >
        <Text>Escorpião</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Sagitário'}) } style={{...styles.imagens, backgroundColor: '#c5e7ab'}}>
          <Image style={{height:60, width:60}} source={require('../../assets/imagemSignos/Sagitario.png')}/>
        </TouchableOpacity>
        <Text>Sagitário</Text>
      </View>
      <View style={styles.containerTitulo}>
        <TouchableOpacity onPress={ () => navigation.navigate('Signos', {signo: 'Capricórnio'}) } style={{...styles.imagens, backgroundColor: '#c8deed'}}>
          <Image style={{height:80, width:60}} source={require('../../assets/imagemSignos/Capricornio.png')}/>
        </TouchableOpacity>
        <Text>Capricórnio</Text>
      </View>

    </View>
  ) 
}

export default navHome;