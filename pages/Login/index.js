import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Input, Button, Text, MensagemErro } from './styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [exibirMensagemErro, setExibirMensagemErro] = useState(false);

  const logar = async () => {
    try {
      const response = await axios.post('https://urbtech-app.herokuapp.com/login/loginUsuario', { email, senha });

      if (response.status === 201) {
        // Redireciona o usuário para a tela de postagens
        navigation.navigate('Comunidade'); // Substitua 'Postagens' pelo nome da tela de postagens
      } else {
        setMensagemErro('Email e/ou senha inválido(os)');
        setExibirMensagemErro(true);
      }
    } catch (error) {
      setMensagemErro('Email e/ou senha inválido(os)');
      setExibirMensagemErro(true);
      console.error('Ocorreu um erro:', error);
    }
  };

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro'); // Substitua 'Cadastro' pelo nome da tela de cadastro
  };

  return (
    <Container>
      <StatusBar style="hidden" />
      <Image style={{ width: 200, height: 200 }} source={require('../../assets/img/logo.avif')} />
      <Text>Acessar conta</Text>
      <Input placeholder='Digite seu email' onChangeText={text => setEmail(text)} />
      <Input secureTextEntry={true} placeholder='Digite sua senha' onChangeText={text => setSenha(text)} />

      <Button onPress={logar}>
        <Text style={{ color: 'rgb(152, 192, 101)' }}>Entrar</Text>
      </Button>

      {exibirMensagemErro && (
        <MensagemErro style={{ display: 'block' }}>{mensagemErro}</MensagemErro>
      )}

      <TouchableOpacity style={{ marginTop: 10 }} onPress={handleCadastroPress}>
        <Text>Não tem uma conta, cadastre-se</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Login;