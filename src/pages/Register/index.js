import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Redirection from '../Redirection';


export default function Register() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  // Adicione refs para os campos de entrada
  const sobrenomeRef = useRef();
  const emailRef = useRef();
  const senhaRef = useRef();
  const confirmaSenhaRef = useRef();

  const handleRegister = () => {
   
      setTimeout(() => {
        Alert.alert('Registro Salvo', 'Registro salvo com sucesso');
        navigation.navigate('Redirection');
      }, 10);
    
  };

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
          placeholder="Digite seu nome completo"
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          onSubmitEditing={() => sobrenomeRef.current.focus()}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          ref={emailRef}
          blurOnSubmit={false}
          onSubmitEditing={() => senhaRef.current.focus()}
        />
        <TextInput
          placeholder="Celular"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          ref={emailRef}
          blurOnSubmit={false}
          onSubmitEditing={() => senhaRef.current.focus()}
        />
        <TextInput
          placeholder="Crie uma Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
          ref={senhaRef}
          blurOnSubmit={false}
          onSubmitEditing={() => confirmaSenhaRef.current.focus()}
        />
        <TextInput
          placeholder="Confirme sua Senha"
          style={styles.input}
          secureTextEntry
          value={confirmaSenha}
          onChangeText={(text) => setConfirmaSenha(text)}
          ref={confirmaSenhaRef}
          onSubmitEditing={handleRegister}
        />

        <TouchableOpacity style={styles.buttonregister} 
         onPress={handleRegister}>
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
    marginTop: '14%',
    marginBottom: '8%',
    fontWeight: 'bold',
    paddingStart: '8%',
  },
  message: {
    left: -15,
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
    bottom: -50,
    marginTop: -70,
    
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
    marginTop: 15,
    paddingTop: 5,
  },
  buttonregister: {
    marginTop: 50,
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
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
