import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import ServiceProvider from '../ServiceProvider';
import HomeWork from '../HomeWork';
import Welcome from '../welcome';

export default function Redirection() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.titleContainer}>
      <Text style={styles.title}>Informe abaixo</Text>
        <Text style={styles.title}>como deseja continuar</Text>
        <Text style={styles.title}>navegando em Livre Serviços</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalButton}
            onPress={() => {
              // Handle client button press
            }}
          >
        
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("HomeWork")}>
          <Text style={styles.modalButtonText}>Cliente</Text>
        </TouchableOpacity>

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => navigation.navigate("ServiceProvider")}>
            <Text style={styles.modalButtonText}>Prestador de Serviços</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.modalCloseButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },

  titleContainer: {
    marginTop: '50%',
    alignSelf: 'center'
  },
  title: {
    top: -150,
    paddingTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    bottom: 50
  },

  modalContainer: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
    bottom: 90
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
  },
  modalButton: {
    backgroundColor: 'green',
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
  modalCloseButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
