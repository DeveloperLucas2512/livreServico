import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Redirection from '../Redirection';

export default function PasswordReset() {
  const navigation = useNavigation();
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const senhaRef = useRef();
  const confirmaSenhaRef = useRef();

  const handleRegister = () => {
    if (senha !== confirmaSenha) {
      Alert.alert('Error', 'As senhas não coincidem. Por favor, verifique.');
    } else if (senha.length <= 4) {
      Alert.alert('Erro', 'A senha deve ter no minimo 4 caracteres.');
    } else {
      // Senha válida, prossiga com o registro
      setTimeout(() => {
        Alert.alert('Senha', 'Senha atualizada com sucesso');
        navigation.navigate('SignIn');
      }, 10);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Seja Bem-Vindo(a)</Text>
        <Text style={styles.message}>Livre Serviços</Text>
      </Animatable.View>

      <View style={styles.containerFormRegister}>
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

        <TouchableOpacity style={styles.buttonregister} onPress={handleRegister}>
          <Text style={styles.buttonregisterTitle}>Atualizar Senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Icon name="home" size={24} />
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('SignIn')}
        >
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
    marginTop: 20,
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
