import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/welcome';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import HomeWork from '../pages/HomeWork';
import Redirection from '../pages/Redirection';
import CurrentLocalization from '../pages/CurrentLocalization';
import ServiceProvider from '../pages/ServiceProvider';
import informationLocalization from '../pages/CurrentLocalization/informationLocalization';
import indexForm from '../pages/ServiceProvider/indexForm';
import PaymentMethods from '../pages/PaymentMethods';
import UpLoadImage from '../pages/UpLoadImage';

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

      <Stack.Screen
        name="CurrentLocalization"
        component={CurrentLocalization}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="informationLocalization"
        component={informationLocalization}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="indexForm"
        component={indexForm}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{ headerShown: false }}
      />
  
      <Stack.Screen
        name="UpLoadImage"
        component={UpLoadImage}
        options={{ headerShown: false }}
      />

    </Stack.Navigator> 

    
  );
}
