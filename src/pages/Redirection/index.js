import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Redirection() {
  const navigation = useNavigation();
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [configModalVisible, setConfigModalVisible] = useState(false); 
   const [closeConfigModal, setCloseConfigModal] = useState(false); 

  const handleServiceProviderPress = () => {
    setIsServiceProvider(true);
  };

  const handleRegisteredResponse = (response) => {
    if (response === 'yes') {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
      navigation.navigate('ServiceProvider');
    }
  };

  const handleActiveResponse = (response) => {
    if (response === 'yes') {
      setIsActive(true);
      setShowModal(true);
      
    } else {
      setIsActive(false);
      navigation.goBack();
      
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.titleContainer}>
        <Text style={styles.title}>Informe abaixo</Text>
        <Text style={styles.title}>como deseja continuar</Text>
        <Text style={styles.title}>navegando em Livre Serviços</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.modalContainer}>
        <View style={styles}>
          {!isServiceProvider && (
            <>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => navigation.navigate('HomeWork')}>
                <Text style={styles.modalButtonText}>Cliente</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleServiceProviderPress}>
                <Text style={styles.modalButtonText}>Prestador de Serviços</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonReturn}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.modalButtonText}>Voltar</Text>
              </TouchableOpacity>
            </>
          )}

          {isServiceProvider && !isRegistered && (
            <>
              <Text>Ja é cadastrado?</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleRegisteredResponse('yes')}>
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonReturn}
                onPress={() => handleRegisteredResponse('no')}>
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </>
          )}

          {isServiceProvider && isRegistered && !isActive && (
            <>
              <Text>Deseja ativar seu status para disponível?</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleActiveResponse('yes')}>
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonReturn}
                onPress={() => handleActiveResponse('no')}>
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Animatable.View>

      {/* Modal personalizado */}
      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Icon name="check" size={40} color="green" />
            <Text>Você está agora disponível para trabalhar.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowModal(false);
                // navigation.goBack();
                navigation.navigate('Welcome');
              }}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={configModalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.configModalContent}>
            <TouchableOpacity onPress={closeConfigModal}>
              <Text style={styles.closeConfigModalText}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {/* Adicione a lógica para "Editar Perfil" aqui */}}>
              <Text style={styles.configModalText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {/* Adicione a lógica para "Atualizar Foto" aqui */}}>
              <Text style={styles.configModalText}>Atualizar Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {/* Adicione a lógica para "Excluir Conta" aqui */}}>
              <Text style={styles.configModalText}>Excluir Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.footer}>
        
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="cog" size={24} />
          <Text>Configuração</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Welcome')}>
          <Icon name="home" size={24} />
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}
        onPress={() => navigation.navigate('SignIn')}>
            <Icon name="user" size={24} />
            <Text>Perfil</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
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
  titleContainer: {
    marginTop: '50%',
    alignSelf: 'center',
  },
  title: {
    top: -150,
    paddingTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    bottom: 50,
  },
  modalContainer: {
    marginTop: 250,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#fff',
    flex: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 30,
    bottom: 220,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  modalButton: {
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonReturn: {
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#333',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  configModalContent: {
    backgroundColor: '#fff',
    padding: 20,     
    alignItems: 'center',
    borderRadius: 10,
    height: '50%',    
    width: '100%', 
  },
  closeConfigModalText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  configModalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

