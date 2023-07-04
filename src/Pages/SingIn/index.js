import React, { useState, useContext } from 'react';
import { Platform, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../Contexts/auth';

import { AreaInput, Background, Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText } from './styles';

export default function SingIn() {
 
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext)

  function handleLogin(){
    signIn(email, password)
  }

  return (
   <Background>
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
    >
      <Logo source={require('../../Assets/Logo.png')} />

      <AreaInput>
        <Input
          placeholder='E-mail' 
          autoCorrect={false} //Para o corretor não autocorrigir
          autoCapilatize='none' //Para não começar com letra maiuscula
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </AreaInput>

      <AreaInput>
        <Input
          placeholder='Senha' 
          autoCorrect={false} //Para o corretor não autocorrigir
          autoCapilatize='none' //Para não começar com letra maiuscula
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </AreaInput>

      <SubmitButton onPress={handleLogin} >
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>   

      
      <Link onPress={ ()=> navigation.navigate('SingUp') } >
        <LinkText>Criar uma conta</LinkText>
      </Link>   

    </Container>
   </Background>
  );
}