import React, {useEffect, useState} from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../components/header/headerSignos'
import NavSignos from '../../components/navSignos';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api'


const Aquario = () => {
  const route = useRoute();
  const [headerSigno, setHeaderSigno] = useState()
  const [imagemSigno, setImagemSigno] = useState()
  const [descricao, setDescricao] = useState('')
  const [loading, setLoading] = useState(true)


  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const dataAtual = `${year}-${month < 9 ? '0' + month : month}-${date < 9 ? '0' + date : date}`


  useEffect(async() => {
    const signosInfo = await api.get("/test").then(({data: {result}}) => {
      const dataHoroscopo = result.find(data => {
        if(data.dt != dataAtual) return data.dt == "2021-07-03"
        return data.dt == dataAtual
      })
      setLoading(false)
      return dataHoroscopo.horoscopes.find(signo => signo.sign == route.params.signo)
    })
    setDescricao(signosInfo.description)
    
    if(route.params.signo === 'Aquário'){
      setHeaderSigno(require('../../assets/header/EllipseAquario.png'))
      setImagemSigno(require('../../assets/imagemSignos/Aquario.png'))
    } else if (route.params.signo === 'Peixes') {
      setHeaderSigno(require('../../assets/header/EllipsePeixes.png'))
      setImagemSigno(require('../../assets/imagemSignos/Peixes.png'))
    } 
    else if (route.params.signo === 'Áries') {
      setHeaderSigno(require('../../assets/header/EllipseAries.png'))
      setImagemSigno(require('../../assets/imagemSignos/Aries.png'))
    } 
    else if (route.params.signo === 'Touro') {
      setHeaderSigno(require('../../assets/header/EllipseTouro.png'))
      setImagemSigno(require('../../assets/imagemSignos/Touro.png'))
    } 
    else if (route.params.signo === 'Gêmeos') {
      setHeaderSigno(require('../../assets/header/EllipseGemeos.png'))
      setImagemSigno(require('../../assets/imagemSignos/Gemeos.png'))
    } 
    else if (route.params.signo === 'Câncer') {
      setHeaderSigno(require('../../assets/header/EllipseCancer.png'))
      setImagemSigno(require('../../assets/imagemSignos/Cancer.png'))
    } 
    else if (route.params.signo === 'Leão') {
      setHeaderSigno(require('../../assets/header/EllipseLeao.png'))
      setImagemSigno(require('../../assets/imagemSignos/Leao.png'))
    } 
    else if (route.params.signo === 'Virgem') {
      setHeaderSigno(require('../../assets/header/EllipseVirgem.png'))
      setImagemSigno(require('../../assets/imagemSignos/Virgem.png'))
    } 
    else if (route.params.signo === 'Libra') {
      setHeaderSigno(require('../../assets/header/EllipseLibra.png'))
      setImagemSigno(require('../../assets/imagemSignos/Libra.png'))
    } 
    else if (route.params.signo === 'Escorpião') {
      setHeaderSigno(require('../../assets/header/EllipseEscorpiao.png'))
      setImagemSigno(require('../../assets/imagemSignos/Escorpiao.png'))
    } 
    else if (route.params.signo === 'Sagitário') {
      setHeaderSigno(require('../../assets/header/EllipseSagitario.png'))
      setImagemSigno(require('../../assets/imagemSignos/Sagitario.png'))
    } 
    else if (route.params.signo === 'Capricórnio') {
      setHeaderSigno(require('../../assets/header/EllipseCapricornio.png'))
      setImagemSigno(require('../../assets/imagemSignos/Capricornio.png'))
    } 
    

  },[])
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {loading ? 
        <ActivityIndicator size='small' color="black"/> 

      :
      <>
        <TouchableOpacity onPress={ () => navigation.navigate('Home')} style={styles.alinhamentoClose}>
          <Image style={styles.iconeClose} source={require('../../assets/ilustracao/Close.png')}/>
        </TouchableOpacity>
        <Header uriHeader={headerSigno}/>
        <NavSignos nomeSigno= {route.params.signo} uriSignos={imagemSigno} descricao={descricao}/>
      </>
      }
    </SafeAreaView>

  )
}

export default Aquario;