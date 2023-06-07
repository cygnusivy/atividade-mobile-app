import React, {useState} from 'react';
import { Input, Text, Container } from '../Login/styles';
import { ImagePost, ViewButton, ViewContainer, ViewPostagem, ButtonPostagem } from './styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function Postagem() {

  const navigation = useNavigation();

  const [imgUrl, setImgUrl] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [descricao, setDescricao] = useState('');

  const Postar = async () => {
    try {
      const response = await axios.post('https://d42c-45-234-11-160.ngrok-free.app/post/postar', { imgUrl, idUsuario, descricao });

      console.log(response.data);
    } catch (error) {
      alert('Não foi possível postar!');
      console.error('Ocorreu um erro:', error);
    }
  };

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro'); // Substitua 'Cadastro' pelo nome da tela de cadastro
  };

  return (
    <Container>
      <ViewContainer>
        <ViewPostagem>
          <Text>Postagem</Text>
          <ImagePost/>
          <Input secureTextEntry={true} placeholder='Digite sua legenda' onChangeText={text=>setSenha(text)}/>
          <ViewButton>
            <ButtonPostagem onPress={Postar}>
              <Text style={{ color: 'rgb(152, 192, 101)' }}>Selecionar Foto</Text>
            </ButtonPostagem>

            <ButtonPostagem onPress={Postar}>
              <Text style={{ color: 'rgb(152, 192, 101)' }}>Postar</Text>
            </ButtonPostagem>

          </ViewButton>
        </ViewPostagem>

      </ViewContainer>
    </Container>
  );
}

export default Postagem;