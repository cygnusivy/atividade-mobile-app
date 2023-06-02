import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Container } from './styles'

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () =>{
    alert('funcionando')
  }

  return (
      <Container>
      <StatusBar style="hidden" />

      <Image style={{width:200, height:200}} source={require('../assets/img/logo.avif')}/>
      <Text style={{marginBottom:10}}>Acessar conta</Text>
      <TextInput placeholder='Digite seu email' style={styles.textInput} onChangeText={text=>setEmail(text)}/>
      <TextInput secureTextEntry={true} placeholder='Digite sua senha' style={styles.textInput} onChangeText={text=>setSenha(text)}/>

      <TouchableOpacity style={styles.botaoLogar} onPress={logar}>
        <Text style={{ color: 'rgb(152, 192, 101)hite' }}>Entrar</Text>
      </TouchableOpacity>

      </Container>
    
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(243, 252, 231)',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  textInput:{
    width:'100%',
    height:30,
    backgroundColor:'rgba(212, 221, 208, 0.698)',
    border: 'none',
    borderRadius:20,
    paddingLeft:'4.5%',
    marginBottom:10,
    color: 'black',
  },
  botaoLogar:{
    width:'100%',
    height:30,
    cursor: 'pointer',
    color: 'rgb(152, 192, 101)',
    backgroundColor: 'rgb(22, 27, 49)',
    borderRadius:20,
    justifyContent: 'center',
    alignItems:'center',
  }
});
