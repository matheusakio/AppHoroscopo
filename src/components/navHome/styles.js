import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imagens: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginTop: 20,
    height: 90,
    width: 90,
    borderRadius: 45,

  },
  containerTitulo: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  }



});

export default styles;