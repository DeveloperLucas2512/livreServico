import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image, // Importe Image para usar na exibição do ícone do WhatsApp
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Redirection from '../Redirection';
import Register from '../Register';

export default function ServiceProvider() {
  const navigation = useNavigation();
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message_1}>Livre Serviços</Text>
          <Text style={styles.message}>Seja Bem-Vindo(a) Profissional</Text>
        </Animatable.View>

        <View style={styles.containerFormRegister}>
          <TextInput
            placeholder="Nome do Profissional"
            style={styles.input}
          />

          <TextInput
            placeholder="Data de Nascimento (DD/MM/AAAA)"
            style={styles.input}
            onChangeText={(text) => setDataNascimento(text)}
            value={dataNascimento}
          />

          <TextInput
            placeholder="Categoria de Servico"
            style={styles.input}
            onChangeText={(text) => setCpf(text)}
            value={cpf}
          />

          <TextInput
            keyboardType="Tempo de Experiencia do Profissional"
            placeholder="CPF (Obrigatório)"
            style={styles.input}
            onChangeText={(text) => setCpf(text)}
            value={cpf}
          />

          <TextInput
            placeholder="CNPJ"
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
          />

          <TextInput
            placeholder="Confirme a Senha"
            style={styles.input}
            secureTextEntry={true}
          />

          <TextInput
            placeholder="Informe a categoria de servico"
            style={styles.input}
          />

           <TextInput
            placeholder="Tempo de experiencia"
            keyboardType="numeric"
            style={styles.input}
          />

          <View style={styles.inputWithIcon}>
            {/* <Image
              source={require('')} // Substitua pelo caminho real para o ícone do WhatsApp
              style={styles.icon}
            /> */}
          </View>

          <TextInput
            keyboardType="numeric"
            placeholder="Telefone (com DDD)"
            style={styles.input}
            onChangeText={(text) => setTelefone(text)}
            value={telefone}
          />

          <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Redirection")}>
            <Text style={styles.buttonRegisterText}>Registrar Profissional</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
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
    marginTop: 0,
    flex: 1,
    backgroundColor: '#38a69d',
    bottom: 0,
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    fontWeight: 'bold',
    paddingLeft: '8%',
  },

  message_1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    alignSelf: 'center',
  },

  message: {
    left: -20,
    justifyContent: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    alignSelf: 'center',
  },

  containerFormRegister: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: '8%',
    paddingRight: '8%',
    bottom: -50,
    marginTop: -80,
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    marginTop: 15,
    paddingTop: 5,
  },

  buttonRegister: {
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -50,
  },

  buttonRegisterText: {
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

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    marginTop: 15,
    paddingTop: 5,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
