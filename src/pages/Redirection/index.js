import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurrentLocalization from '../CurrentLocalization';
import * as Location from 'expo-location';
import ServiceProvider from '../ServiceProvider';
import HomeWork from '../HomeWork';
import Welcome from '../welcome';
import informationLocalization from '../CurrentLocalization/informationLocalization';


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
    
        <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
        <Icon name="shopping-cart" size={24} />
        <Text>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
        <Icon name="cog" size={24} />
        <Text>Configuração</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('Welcome')}
        >
        <Icon name="home" size={24} />
        <Text>Início</Text>
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
