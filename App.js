import 'react-native-gesture-handler'

import React from 'react';
import { StatusBar, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

console.disableYellowBox = true;

import AuthProvider from './src/Contexts/auth';

import Routes from './src/Routes';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <AuthProvider>
        <StatusBar  backgroundColor='#131313' barStyle='light-content' />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
