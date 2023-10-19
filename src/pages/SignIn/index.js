import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,
   TouchableWithoutFeedback, Keyboard, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';


export default function SignIn() {
  const navigation = useNavigation();
  const [rememberAccess, setRememberAccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>SEJA BEM-VINDO(a)</Text>
        <Text style={styles.message}>LIVRE SERVIÇOS IMEDIATOS</Text>
        </Animatable.View>

        <View style={styles.containerFormLogin}>
          <Text style={styles.titleLogin}>Email</Text>         
          <TextInput placeholder="Digite um email." style={styles.input}
           underlineColorndroid="transparent"
           onChangeTest={(texto) => setEmail(texto)}
           value={email}
          />

          <Text style={styles.titleLogin}>Senha</Text>
          <TextInput placeholder="Digite sua senha.." style={styles.input} 
           underlineColorndroid="transparent"
           onChangeTest={(texto) => setPassword(texto)}
           value={password}
          />

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('PasswordReset')}>
            <Text style={{ color: 'red' }}>Esqueci minha Senha</Text>
          </TouchableOpacity>

          <View style={styles.rememberAccessContainer}>
            <CheckBox
              containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
              title="Lembrar acesso"
              checked={rememberAccess}
              onPress={() => setRememberAccess(!rememberAccess)}
              textStyle={{ color: 'black' }}
              checkedColor="green"
            />
          </View>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonRegisterText}>Não possui uma conta? Cadastre-se.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('UpLoadImage')}>
            <Text style={styles.buttonText}>ACESSAR</Text>
          </TouchableOpacity>

          {/* Botão "Acessar usando meu Id Apple" */}
          <TouchableOpacity
            style={styles.appleButtonContainer}
            onPress={() => console.log("")}>
            <TouchableOpacity
              style={styles.appleButton}
              onPress={() => console.log("")}>
              <Icon name="apple" size={20} color="white" style={styles.icon} />
              <Text style={styles.appleButtonText}>ACESSAR USANDO MEU ID APPLE</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Botão "Acessar usando conta G-mail" */}
          <TouchableOpacity
            style={styles.gmailButtonContainer}
            onPress={() => console.log("")}>
            <TouchableOpacity
              style={styles.gmailButton}
              onPress={() => console.log("")}>
              <Text style={styles.gmailButtonText}>ACESSAR USANDO CONTA G-MAIL</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    fontWeight: 'bold',
    paddingStart: '8%',
  },
  message: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
    alignSelf: 'center',
  },

  containerFormLogin: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '8%',
    paddingEnd: '8%',
    paddingBottom: 50, // Adicionei paddingBottom para evitar que os últimos elementos fiquem cobertos pelo teclado
  },
  titleLogin: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  forgotPassword: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: -10,
    marginLeft: 8,
  },

  rememberAccessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -35,
    marginLeft: 180,
    justifyContent: 'flex-end',
  },

  buttonRegister: {
    marginTop: 8,
    alignSelf: 'center',
  },

  buttonRegisterText: {
    color: '#a1a1a1',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  appleButtonContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 40,
    marginTop: 20,
  },

  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appleButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },

  gmailButtonContainer: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
  },

  gmailButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gmailButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
