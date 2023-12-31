import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../../services/firebaseConnection.js';

export default function SignIn() {
  const navigation = useNavigation();
  const [rememberAccess, setRememberAccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  async function logar() {
    setEmailError('');
    setSenhaError('');

    if (!email || !password) {
      if (!email) setEmailError('Campo obrigatório');
      if (!password) setSenhaError('Campo obrigatório');
      return;
    }

    if (password.length < 6) {
      setSenhaError('Sua senha deve ter pelo menos 6 caracteres');
      return;
    }

    try {
      //firebase.auth().
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Redirection');
    } catch (error) {
      if (error.code !== 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        Alert.alert('Erro', 'Usuário não cadastrado ou senha incorreta.');
        return;
      } else {
        Alert.alert('Erro', 'Algo deu errado. Por favor, tente novamente.');
        return;
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>SEJA BEM-VINDO(a)</Text>
        <Text style={styles.message}>LIVRE SERVIÇOS IMEDIATOS</Text>
      </Animatable.View>

      <View style={styles.containerFormLogin}>
        <Text style={styles.titleLogin}>Email</Text>
        <TextInput
          placeholder="Digite um email."
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setEmail(texto)}
          value={email}
        />
        <Text style={styles.errorMessage}>{emailError}</Text>

        <Text style={styles.titleLogin}>Senha</Text>
        <View style={styles.passwordInput}>
          <TextInput
            placeholder="Digite sua senha.."
            style={styles.passwordInputText}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setPassword(texto)}
            secureTextEntry={!showPassword}
            value={password}
          />
          <TouchableOpacity
            style={styles.passwordVisibilityButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.errorMessage}>{senhaError}</Text>

        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('PasswordReset')}>
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

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonRegisterText}>Não possui uma conta? Cadastre-se.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={logar}>
          <Text style={styles.buttonText}>ACESSAR</Text>
        </TouchableOpacity>

        {/* Botão "Acessar usando meu Id Apple" */}
        <TouchableOpacity style={styles.appleButtonContainer} onPress={() => console.log('')}>
          <TouchableOpacity style={styles.appleButton} onPress={() => console.log('')}>
            <Icon name="apple" size={20} color="white" style={styles.icon} />
            <Text style={styles.appleButtonText}>ACESSAR USANDO MEU ID APPLE</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Botão "Acessar usando conta G-mail" */}
        <TouchableOpacity style={styles.gmailButtonContainer} onPress={() => console.log('')}>
          <TouchableOpacity style={styles.gmailButton} onPress={() => console.log('')}>
            <Text style={styles.gmailButtonText}>ACESSAR USANDO CONTA G-MAIL</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  errorMessage: {
    fontWeight: 'bold',
    fontSize: 12,
    bottom: 15,
    marginBottom: -5,
    color: 'red',
  },
  containerFormLogin: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '8%',
    paddingEnd: '8%',
    paddingBottom: 50,
  },
  titleLogin: {
    fontSize: 20,
    marginTop: 28,
    bottom: 0,
  },

  input: {
    borderBottomWidth: 1,
    height: 30,
    marginBottom: 15,
    fontSize: 16,
  },

  passwordInput: {
    borderBottomWidth: 1,
    height: 30,
    marginBottom: 15,
    fontSize: 16,
    flexDirection: 'row',
  },

  passwordInputText: {
    flex: 1,
  },

  passwordVisibilityButton: {
    justifyContent: 'center',
    alignItems: 'center',
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

  rememberAccessButton: {
    backgroundColor: 'transparent',
  },

  rememberAccessText: {
    fontSize: 16,
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
