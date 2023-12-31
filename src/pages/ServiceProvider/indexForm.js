import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Para ícones do FontAwesome

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Alert } from 'react-native';
import PaymentMethods from '../PaymentMethods';

export default function ServiceProvider() {
  const navigation = useNavigation();
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [categoriaServico, setCategoriaServico] = useState('');
  const [maisInformacoes, setMaisInformacoes] = useState('');
  const [redeSocialFacebook, setRedeSocialFacebook] = useState('');
  const [redeSocialInstagram, setRedeSocialInstagram] = useState('');
  const [redeSocialLinkedin, setRedeSocialLinkedin] = useState('');
  const [redeSocialYouTube, setRedeSocialYouTube] = useState('');
  const [redeSocialTwitter, setRedeSocialTwitter] = useState('');
  const [informarMaisCategorias, setInformarMaisCategorias] = useState(false); 

  const handleRegister = () => {
    if (!dataNascimento || !cpf || !telefone) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
    } else {
      Alert.alert('Sucesso', 'Profissional cadastrado com sucesso! Seja Livre.');
    }
  };

  const openSocialMedia = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir URL:', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>SEJA BEM-VINDO(a)</Text>
        <Text style={styles.message}>LIVRE SERVIÇOS IMEDIATOS</Text>
      </Animatable.View>


      <View style={styles.containerFormRegister}>
        <Text style={styles.title}>Finalize seu cadastro</Text>

        <Text style={styles.titleTop}>Categoria de serviço</Text>
        <TextInput
          placeholder="Categoria de serviço 1"
          style={styles.input}
          onChangeText={(text) => setCategoriaServico(text)}
          value={categoriaServico}
        />

       <Text style={styles.titleTop}>Tempo de experiência</Text>
        <TextInput
          placeholder="Informe o tempo de experiência"
          style={styles.input}
        />


        <Text style={styles.label}>Deseja informar mais de uma categoria?</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              { backgroundColor: informarMaisCategorias ? '#4CAF50' : '#ccc' },
            ]}
            onPress={() => setInformarMaisCategorias(!informarMaisCategorias)}
          >
            <Text style={styles.radioText}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioButton,
              { backgroundColor: !informarMaisCategorias ? '#FF5733' : '#ccc' },
            ]}
            onPress={() => setInformarMaisCategorias(!informarMaisCategorias)}
          >
            <Text style={styles.radioText}>NÃO</Text>
          </TouchableOpacity>
        </View>

        {informarMaisCategorias && (
          <>
            <Text style={styles.titleTop}>Categoria de serviço</Text>
            <TextInput
              placeholder="Categoria de serviço 2"
              style={styles.input}
              onChangeText={(text) => setCategoriaServico(text)}
              value={categoriaServico}
            />
 
            <Text style={styles.titleTop}>Tempo de experiência</Text>
            <TextInput
              placeholder="Informe o tempo de experiência em categoria 2"
              style={styles.input}
            />

            <Text style={styles.titleTop}>Categoria de serviço</Text>
            <TextInput
              placeholder="Categoria de serviço em categoria 3"
              style={styles.input}
              onChangeText={(text) => setCategoriaServico(text)}
              value={categoriaServico}
            />
            
            <Text style={styles.titleTop}>Tempo de experiência</Text>
            <TextInput
              placeholder="Informe o tempo de experiência"
              style={styles.input}
            />
          </>
        )}

        <Text style={styles.titleTop}>REDES SOCIAIS</Text>
        <Text style={styles.label}>(informe pelo menos uma rede social)</Text>
        <View style={styles.socialMediaContainer}>
          <View style={styles.socialMediaInputContainer}>
            <FontAwesomeIcon name="facebook" size={24} style={styles.icon} onPress={() => openSocialMedia(redeSocialFacebook)} />
            <TextInput
              placeholder="Facebook"
              style={styles.socialMediaInput}
              onChangeText={(text) => setRedeSocialFacebook(text)}
              value={redeSocialFacebook}
            />
          </View>
          <View style={styles.socialMediaInputContainer}>
            <FontAwesomeIcon name="instagram" size={24} style={styles.icon} onPress={() => openSocialMedia(redeSocialInstagram)} />
            <TextInput
              placeholder="Instagram"
              style={styles.socialMediaInput}
              
              onChangeText={(text) => setRedeSocialInstagram(text)}
              value={redeSocialInstagram}
            />
          </View>
          <View style={styles.socialMediaInputContainer}>
            <FontAwesomeIcon name="linkedin" size={24} style={styles.icon} onPress={() => openSocialMedia(redeSocialLinkedin)} />
            <TextInput
              placeholder="LinkedIn"
              style={styles.socialMediaInput}
              onChangeText={(text) => setRedeSocialLinkedin(text)}
              value={redeSocialLinkedin}
            />
          </View>
          <View style={styles.socialMediaInputContainer}>
            <FontAwesomeIcon name="youtube" size={24} style={styles.icon} onPress={() => openSocialMedia(redeSocialYouTube)} />
            <TextInput
              placeholder="YouTube"
              style={styles.socialMediaInput}
              onChangeText={(text) => setRedeSocialYouTube(text)}
              value={redeSocialYouTube}
            />
          </View>
          <View style={styles.socialMediaInputContainer}>
            <FontAwesomeIcon name="twitter" size={24} style={styles.icon} onPress={() => openSocialMedia(redeSocialTwitter)} />
            <TextInput
              placeholder="Twitter"
              style={styles.socialMediaInput}
              onChangeText={(text) => setRedeSocialTwitter(text)}
              value={redeSocialTwitter}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTRAR PROFISSIONAL</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonPayment}
            onPress={() => navigation.navigate("UpLoadImageAnalyst")}>
            <Text style={styles.buttonText}>FORMAS DE PAGAMENTOS</Text>
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
    marginTop: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  titleTop: {
    fontSize: 15,
    textAlign: 'start',
  },
  label: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    fontStyle: 'italic', // Adiciona estilo de placeholder
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  radioButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    borderRadius: 4,
  },
  radioText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonRegister: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonPayment: {
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
  },
  buttonRegisterIcon: {
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
  },
  socialMediaContainer: {
    marginBottom: 12,
  },
  socialMediaInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  socialMediaInput: {
    flex: 1,
    borderBottomWidth: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 5,
  },
  icon: {
    color: 'black',
  },
});
