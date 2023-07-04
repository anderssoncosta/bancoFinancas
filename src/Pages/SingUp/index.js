import React, { useState, useContext } from 'react';
import { Platform, Text, View } from 'react-native';
import { AreaInput, Background, Container, Input, Logo, SubmitButton, SubmitText } from '../SingIn/styles';

import { AuthContext } from '../../Contexts/auth';

export default function SingIn() {
 
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useContext(AuthContext)

  function handleSignUp() {
    signUp(email, password, nome)
  }
 
  return (
   <Background>
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
    >
      <AreaInput>
        <Input
          placeholder='Nome' 
          autoCorrect={false} //Para o corretor não autocorrigir
          autoCapilatize='none' //Para não começar com letra maiuscula
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </AreaInput>
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

      <SubmitButton onPress={handleSignUp}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>   

    </Container>
   </Background>
  );
}