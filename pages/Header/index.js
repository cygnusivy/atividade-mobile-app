import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { ViewHeaderContainer, ReturnButton, MenuIconImage, ProfileButton } from './styles';
import axios from 'axios';

function Header() {
/*
  const [profileImageUrl, setProfileImageUrl] = useState('');

  useEffect(() => {
    async function fetchProfileImageUrl() {
      try {
        const response = await axios.get('http://localhost:8080/retornaUrlFotoPerfil/10');
        const imageUrl = response.data.profileImageUrl;
        setProfileImageUrl(imageUrl);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar a imagem do perfil:', error);
      }
    }

    fetchProfileImageUrl();
  }, []);
*/
  return (
    <ViewHeaderContainer>
      <TouchableOpacity onPress={() => console.log('Voltar')}>
        <ReturnButton source={require('../../assets/img/seta-verde.avif')}/>
      </TouchableOpacity>

      <MenuIconImage source={require('../../assets/img/Postagem.png')} resizeMode="contain" />

      <ProfileButton source={{ uri: 'https://res.cloudinary.com/dfgyr0fi7/image/upload/v1684527579/pjwp0vnnz4yecnoplab3.webp' }} ></ProfileButton>
      

    </ViewHeaderContainer>
  );
} 

export default Header;