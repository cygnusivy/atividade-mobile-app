import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container,  Input, Button, Text, MensagemErro, MensagemSucesso } from '../Login/styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


function Cadastro() {

  const navigation = useNavigation();
  const [mensagemErro, setMensagemErro] = useState('');
  const [exibirMensagemErro, setExibirMensagemErro] = useState(false);

  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [exibirMensagemSucesso, setExibirMensagemSucesso] = useState(false);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');


  const Cadastrar = async () => {

    try {

      const response = await axios.post('https://urbtech-app.herokuapp.com/usuario', { nome, email, senha, senha2 });

      if (response.status === 201){
        setMensagemSucesso('Conta criada com sucesso!')
        setExibirMensagemSucesso(true);
      }else{
        setMensagemErro('Não foi possível realizar o cadastro!');
        setExibirMensagemErro(true);
      }

    } catch (error) {
      setMensagemErro('Email e/ou senha inválido(os)');
      setExibirMensagemErro(true);
      console.error('Ocorreu um erro:', error);
    }
  };

  const handleCadastroPress = () => {
    navigation.navigate('Login'); // Substitua 'Cadastro' pelo nome da tela de cadastro
  };

  return (
      <Container>
      <StatusBar style="hidden" />
      <Image style={{width:200, height:200}} source={require('../../assets/img/logo.avif')}/>
      <Text>Cadastrar conta</Text>
      <Input placeholder='Digite seu nome'  onChangeText={text=>setNome(text)}/>
      <Input placeholder='Digite seu email'  onChangeText={text=>setEmail(text)}/>
      <Input secureTextEntry={true} placeholder='Digite sua senha' onChangeText={text=>setSenha(text)}/>
      <Input secureTextEntry={true} placeholder='Repita sua senha' onChangeText={text=>setSenha2(text)}/>

      <Button onPress={Cadastrar}>
        <Text style={{ color: 'rgb(152, 192, 101)' }}>Cadastrar</Text>
      </Button>

      {exibirMensagemErro && (
        <MensagemSucesso style={{ display: 'none' }}>{mensagemSucesso}</MensagemSucesso>,
        <MensagemErro style={{ display: 'block' }}>{mensagemErro}</MensagemErro>
      )}

      {exibirMensagemSucesso && (
        <MensagemErro style={{ display: 'none' }}>{mensagemErro}</MensagemErro>,
        <MensagemSucesso style={{ display: 'block' }}>{mensagemSucesso}</MensagemSucesso>
      )}

      <TouchableOpacity style={{marginTop:10}} onPress={handleCadastroPress}>
        <Text>Retornar para tela de login.</Text>
      </TouchableOpacity>

      </Container>
    
  );
}

export default Cadastro;