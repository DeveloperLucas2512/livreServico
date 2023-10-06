import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import indexForm from './indexForm';


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
  const [profileImage, setProfileImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      title: 'Selecione uma foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      } else if (response.error) {
        console.log('Erro ao selecionar imagem: ', response.error);
      } else {
        setProfileImage(response.uri);
      }
    });
  };

  function isCpfValid(cpf) {
    // Remove caracteres não numéricos do CPF
    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11) {
      return false; // O CPF deve conter 11 dígitos
    }

    // Verifica se todos os dígitos são iguais; se sim, o CPF é inválido
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let firstDigit = remainder >= 10 ? 0 : remainder;

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    let secondDigit = remainder >= 10 ? 0 : remainder;

    // Verifica se os dígitos verificadores são iguais aos dígitos do CPF
    if (parseInt(cpf.charAt(9)) !== firstDigit || parseInt(cpf.charAt(10)) !== secondDigit) {
      return false;
    }

    return true;
  }

  const handleFacialRecognition = () => {
    // Implemente aqui a lógica para reconhecimento facial
    // Você pode chamar uma função ou navegar para uma tela de reconhecimento facial.
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Seja Bem-Vindo(a)</Text>
        <Text style={styles.message}>Livre Serviços</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerFormRegister}>
        <Text style={styles.title}>Por favor anexar uma foto recente</Text>
        <View style={styles.imagePicker}>
          <View style={styles.imageFrame}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <Text style={styles.imagePickerText}>Clique para escolher uma imagem</Text>
            )}
          </View>
          <TouchableOpacity onPress={openImagePicker} style={styles.chooseImageButton}>
            <Text style={styles.chooseImageText}>Escolher imagem</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleFacialRecognition} style={styles.facialRecognitionButton}>
          <Text style={styles.facialRecognitionButtonText}>Reconhecimento Facial</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>É necessário o reconhecimento facial para dar continuidade no cadastro</Text>

        <Text style={styles.title}>Nome do Profissional</Text>
        <TextInput
          placeholder="Digite o nome do profissional"
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
      style={[styles.input, !isCpfValid(cpf) && cpf ? styles.inputError : cpf ? styles.inputValid : null]}
      onChangeText={(text) => setCpf(text)}
      value={cpf}
    />
    {!isCpfValid(cpf) && cpf ? <Text style={styles.errorMessage}>CPF inválido</Text> : cpf ? <Text style={styles.validMessage}>CPF válido</Text> : null}


        <TextInput
          keyboardType="numeric"
          placeholder="CNPJ"
          style={styles.input}
          onChangeText={(text) => setCnpj(text)}
          value={cnpj}
        />
        
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('indexForm')}>
          <View style={styles.buttonContent}>
            <Text style={styles.continueButtonText}>Continue</Text>
            <Icon style={styles.continueIcon} name="arrow-forward" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#38a69d',
  },

  containerHeader: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },

  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  containerFormRegister: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  title: {
    fontSize: 20,
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  imagePicker: {
    alignItems: 'center',
    marginBottom: 20,
  },

  imageFrame: {
    width: 130,
    height: 150,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  imagePickerText: {
    fontSize: 16,
    color: '#555',
  },

  chooseImageButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
  },

  chooseImageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  facialRecognitionButton: {
    backgroundColor: '#3E79B7',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },

  facialRecognitionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },

  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  continueButtonText: {
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
  },

  continueIcon: {
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  validMessage: {
    color: 'green', 
  },
});
