import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect}from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';


const navSignos = ({uriSignos, nomeSigno, descricao}) => {
  const [data, setData] = useState('');

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();
    if(date < 9 && month < 9){
      setData(
       '0' + date + '/' + '0' + month + '/' + year 
      );
    } else if (date < 9 && month > 9){
      setData(
        '0' + date + '/' + month + '/' + year 
       );
    } else if (date > 9 && month < 9){
      setData(
        date + '/' + '0' + month + '/' + year 
       );
    } else {
      setData(
        date + '/' + month + '/' + year 
       );

    }
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container} keyboardShouldPersistTaps='always'>
      <View style={{height:120, width:120}}>
        <Image style={{height: '100%', width:'100%'}}  resizeMode="contain" source={uriSignos}/>
      </View>
        <View style={styles.texto}>
          <Text style={styles.titulo}>{nomeSigno}</Text>
          <Text style={styles.subTitulo}>{data}</Text>
          <Text style={{...styles.subTitulo, marginTop: 10,}}>{descricao}</Text>
        </View>
        <View style={styles.ilustracao}>
          <Image style={{height:200, width:250}} source={require('../../assets/ilustracao/Arte.png')}/>
        </View>
        <TouchableOpacity onPress={ () => navigation.navigate('Home')} style={styles.botaoHome}>
          <Text style={{...styles.subTitulo, color: 'white', marginTop: 6}}>Veja o horóscopo de outros signos!</Text>
        </TouchableOpacity>
      </View>
  )
}

export default navSignos;