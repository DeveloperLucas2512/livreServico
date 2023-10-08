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

  const handleServiceProviderPress = () => {
    setIsServiceProvider(true);
  };

  const handleRegisteredResponse = (response) => {
    if (response === 'yes') {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
      navigation.navigate('UpLoadImageGeneralServices');
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
        <Text style={styles.title}>INFORME ABAIXO</Text>
        <Text style={styles.title}>COMO DESEJA CONTINUAR</Text>
        <Text style={styles.title}>NAVEGANDO EM</Text>
        <Text style={styles.title}>LIVRE SERVIÇOS IMEDIATOS</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.modalContainer}>
        <View style={styles}>
          {!isServiceProvider && (
            <>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => navigation.navigate('UpLoadImageElectrician')}>
                <Text style={styles.modalButtonText}>CLIENTE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleServiceProviderPress}>
                <Text style={styles.modalButtonText}>PRESTADOR DE SERVIÇOS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonReturn}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.modalButtonText}>VOLTAR</Text>
              </TouchableOpacity>
            </>
          )}

          {isServiceProvider && !isRegistered && (

            <View style={styles.modalContainer2}>
            <>
              <Text>JÁ ESTÁ CADASTRADO?</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleRegisteredResponse('yes')}>
                <Text style={styles.modalButtonText}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonReturn}
                onPress={() => handleRegisteredResponse('no')}>
                <Text style={styles.modalButtonText}>NÃO</Text>
              </TouchableOpacity>
            </>
            </View>
          )}

          {isServiceProvider && isRegistered && !isActive && (
            <>
              <Text>DESEJA ATIVAR SEU STATUS PARA DISPONÍVEL??</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleActiveResponse('yes')}>
                <Text style={styles.modalButtonText}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonReturn}
                onPress={() => handleActiveResponse('no')}>
                <Text style={styles.modalButtonText}>NÃO</Text>
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
            <Text>VOCÊ ESTÁ AGORA DISPONÍVEL PARA TRABALHAR..</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Welcome');
              }}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    bottom: 50,
  },
  modalContainer: {
    minHeight: 250,
    marginTop: 200,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 30,
    bottom: 220,
  },
  modalContainer2: {
    minHeight: 250,
    marginTop: 190,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    flex: 1,
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
});
