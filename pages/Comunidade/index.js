import React, { useState, useEffect } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { ViewPostagem, ViewComentario, ViewConteudoComentario, ImageUsuario, TextNomeUsuario, ImagePostagem } from './styles'
import axios from 'axios';
import Header from '../Header';


function Comunidade() {

    const [postagens, setPostagens] = useState([]);

    useEffect(() => {
        async function fetchPostagens() {
          try {
            const id = 1;
            const response = await axios.get('https://urbtech-app.herokuapp.com/comunidade/selecionaPostagensDaComunidade/2');
            setPostagens(response.data);
          } catch (error) {
            console.error('Ocorreu um erro ao buscar as postagens:', error);
          }
        }
      
        fetchPostagens();
      }, []);

      return (
        <View>
        
        <Header/>
        <ScrollView>
        
          {postagens.map((postagem) => (
            <ViewPostagem key={postagem.id}>
              <ImagePostagem source={{ uri: postagem.imgUrl }} />
              <ViewComentario>
                <ViewConteudoComentario>
                  <ImageUsuario source={{ uri: postagem.imgUrlUsuario }} />
                  <TextNomeUsuario>{postagem.nomeUsuario}: <Text>{postagem.descricao}</Text></TextNomeUsuario>
                </ViewConteudoComentario>
              </ViewComentario>
            </ViewPostagem>
          ))}
        
        </ScrollView>
        </View>
        
      );
}

export default Comunidade;