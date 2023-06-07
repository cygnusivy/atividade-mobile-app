import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Postagem from './pages/Postagem';
import Header from './pages/Header';
import Comunidade from './pages/Comunidade';

function App () {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Comunidade' component={Comunidade} options={{ headerShown: false }}/>
        <Stack.Screen name='Header' component={Header} options={{ headerShown: false }}/>
        
        <Stack.Screen name='Postagem' component={Postagem} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
};

export default App;