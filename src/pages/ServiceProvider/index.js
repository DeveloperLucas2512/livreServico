import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ServiceProvider() {
  const navigation = useNavigation();
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  const handleRegister = () => {
    // Implemente a lógica de validação dos campos aqui.
    if (!dataNascimento || !cpf || !telefone) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
    } else {
      // Lógica de registro bem-sucedido aqui.

      // Exibe um alerta de sucesso após o registro.
      Alert.alert('Sucesso', 'Profissional cadastrado com sucesso! Seja Livre.');
      // Você pode redirecionar o usuário para a página desejada aqui.
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{...styles.scrollContainer, marginTop: -60}}>
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
              placeholder="Endereço"
              style={styles.input}
              onChangeText={(text) => setEndereco(text)}
              value={endereco}
            />

            <TextInput
              placeholder="Cidade"
              style={styles.input}
              onChangeText={(text) => setCidade(text)}
              value={cidade}
            />

            <TextInput
              keyboardType="numeric"
              placeholder="CPF (Obrigatório)"
              style={styles.input}
              onChangeText={(text) => setCpf(text)}
              value={cpf}
            />

            <TextInput
              keyboardType="numeric"
              placeholder="CNPJ"
              style={styles.input}
              onChangeText={(text) => setCnpj(text)}
              value={cnpj}
            />

            <TextInput
              keyboardType="numeric"
              placeholder="Telefone Fixo (com DDD)"
              style={styles.input}
              onChangeText={(text) => setTelefone(text)}
              value={telefone}
            />

            <TextInput
              keyboardType="numeric"
              placeholder="Celular (com DDD)"
              style={styles.input}
              onChangeText={(text) => setCep(text)}
              value={cep}
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
              placeholder="Informe a categoria de serviço:"
              style={styles.input}
            />

            <TextInput
              placeholder="Tempo de experiência:"
              keyboardType="numeric"
              style={styles.input}
            />           
          </View>
        </View>
            <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
              <Text style={styles.buttonRegisterText}>Registrar Profissional</Text>
            </TouchableOpacity>
      </ScrollView>
        

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100',
    marginTop: -10,
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
});
