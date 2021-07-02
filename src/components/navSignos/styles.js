import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20


  },
  texto: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 300,

  },
  titulo:{
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 'bold',

    
  },
  subTitulo: {
    fontSize: 16,
    fontStyle: "normal",
    textAlign: 'center',
    flexWrap: "wrap",
  },
  ilustracao: {
    marginTop: 25

  },
  botaoHome: {
    marginTop: 30,
    marginBottom:20,
    width: '90%',
    height: 35,
    backgroundColor: '#3a383a',
    borderRadius: 40,

    
  }

})

export default styles;