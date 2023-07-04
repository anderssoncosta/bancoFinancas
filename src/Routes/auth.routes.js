import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SingIn from "../Pages/SingIn";
import SingUp from '../Pages/SingUp'

const AuthStack = createNativeStackNavigator()

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name='SingIn' 
        component={SingIn}
        options={{headerShown: false}} // headerShown tira o titulo da navegação do tipo stack
      />
      <AuthStack.Screen 
        name='SingUp' 
        component={SingUp}
        options={{
          headerStyle:{
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a'
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar' //troca o titulo
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes