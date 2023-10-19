import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../../services/firebaseConnection.js';

export default function Register() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [telefoneFixo, setTelefoneFixo] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [confirmaSenhaError, setConfirmaSenhaError] = useState('');

  async function cadastrar() {   

    if (!nome || !email || !senha || !confirmaSenha) {
      if (!nome) setNomeError('Campo obrigatório');
      if (!email) setEmailError('Campo obrigatório');
      if (!password) setSenhaError('Campo obrigatório');
      if (!confirmaSenha) setConfirmaSenhaError('Campo obrigatório');
      return; 
    }

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value) => {
      alert('Usuario criado com sucesso! ' + value.user.email )
    })
    .catch((error) => {
     if(error.code === 'auth/weak-password'){
      alert('Sua senha deve ter pelo menos 6 caracteres');
      return;
     }
     if(error.code === 'auth/invalid-email'){
      alert('Email invalido');
      return;
     } else{
      alert('Error, tente novamente');
      return;
     }
  })
}

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>SEJA BEM-VINDO(a)</Text>
        <Text style={styles.message}>LIVRE SERVIÇOS IMEDIATOS</Text>
      </Animatable.View>

      <View style={styles.containerFormRegister}>
        <TextInput
          style={{ ...styles.input, marginTop: 30 }}
          underlineColorAndroid='transparent'
          onChangeText={(texto) => setNome(texto)}
          placeholder="Digite seu nome completo"
          value={nome}
        />
        <Text style={styles.errorMessage}>{nomeError}</Text>

        <TextInput
          placeholder="Digite um email"
          style={{ ...styles.input, marginTop: 0 }}
          blurOnSubmit={false}
          onSubmitEditing={() => senhaRef.current.focus()}
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setEmail(texto)}
          value={email}
        />
        <Text style={styles.errorMessage}>{emailError}</Text>

        <TextInput
          placeholder="Celular Ex: (DDD)99999-9999"
          style={{ ...styles.input, marginTop: 0 }}
          value={celular}
          onChangeText={(texto) => setCelular(texto)}
          blurOnSubmit={false}
          onSubmitEditing={() => senhaRef.current.focus()}
        />
        <Text style={styles.errorMessage}>{senhaError}</Text>

        <TextInput
          placeholder="Telefone Fixo"
          style={{ ...styles.input, marginTop: 0 }}
          value={telefoneFixo}
          onChangeText={(texto) => setTelefoneFixo(texto)}
          blurOnSubmit={false}
          onSubmitEditing={() => senhaRef.current.focus()}
        />

        <TextInput
          placeholder="Crie uma Senha"
          style={{ ...styles.input, marginTop: 20 }}
          onChangeText={(texto) => setPassword(texto)}
          blurOnSubmit={false}
          onSubmitEditing={() => confirmaSenhaRef.current.focus()}
          underlineColorAndroid="transparent"
          value={password}
        />
        <Text style={styles.errorMessage}>{senhaError}</Text>

        <TextInput
          placeholder="Confirme sua Senha"
          style={{ ...styles.input, marginTop: 5 }}
          secureTextEntry
          value={confirmaSenha}
          onChangeText={(texto) => setConfirmaSenha(texto)}
        />
        <Text style={styles.errorMessage}>{confirmaSenhaError}</Text>

        <TouchableOpacity style={styles.buttonregister} onPress={cadastrar}>
          <Text style={styles.buttonregisterTitle}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Welcome')}>
          <Icon name="home" size={24} />
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('SignIn')}>
          <Icon name="user" size={24} />
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#38a69d',
  },
  containerHeader: {
    justifyContent: 'center',
    marginTop: -5,
    marginBottom: 15,
    paddingStart: 0,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
    alignSelf: 'center',
  },
  containerFormRegister: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '8%',
    paddingEnd: '8%',
    marginTop: 25,
  },
  errorMessage: {
    color: 'red',
  },
  titleLogin: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 35,
    marginBottom: 5,
    fontSize: 16,
    marginTop: 15,
    paddingTop: 5,
  },
  buttonregister: {
    marginTop: 40,
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonregisterTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  footerItem: {
    alignItems: 'center',
  },
});
