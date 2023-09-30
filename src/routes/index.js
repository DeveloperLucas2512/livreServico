import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/welcome';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import HomeWork from '../pages/HomeWork';
import Redirection from '../pages/Redirection';
import ServiceProvider from '../pages/ServiceProvider';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeWork"
        component={HomeWork}
        options={{ headerShown: false }}
      />
      {/* Configuração da rota para a tela da modal */}
      <Stack.Screen
        name="Redirection"
        component={Redirection}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ServiceProvider"
        component={ServiceProvider}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
