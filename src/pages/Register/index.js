import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Redirection from '../Redirection';

export default function Register() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Seja Bem-Vindo(a)</Text>
          <Text style={styles.message}>Livre Serviços</Text>
        </Animatable.View>

        <View style={styles.containerFormRegister}>
          <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
          />

          <TextInput
            placeholder="Sobrenome"
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            style={styles.input}
          />

          <TextInput
            placeholder="Confirme sua Senha"
            style={styles.input}
          />

          <TouchableOpacity style={styles.buttonregister}
          onPress={() => navigation.navigate("Redirection")}>
            <Text style={styles.buttonregisterTitle}>Registrar</Text>
          </TouchableOpacity>

        </View>
      </View>
     
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="shopping-cart" size={24} />
          <Text>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="user" size={24} />
          <Text>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="cog" size={24} /> 
          <Text>Configuração</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="home" size={24} />
          <Text>Início</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%', // Corrigido: substituído 'margimBottom' por 'marginBottom'
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

  buttonRegister: {
    marginTop: 8,
    alignSelf: 'center',
  },

  buttonRegisterText: {
    color: '#a1a1a1',
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

