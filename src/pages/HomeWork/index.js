import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import Redirection from '../Redirection';

export default function HomeWork() {
  const [searchText, setSearchText] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'Eletrica',
    'Manutenção Residencial',
    'Manutenção Predial',
    'Mecanica Automotiva',
    'Mecanica Maquinas Pesadas',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Digite o serviço que deseja encontrar ou acesse a busca rápida!</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={24} color="#777" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite sua pesquisa"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      
      <Text style={styles.quickGuide}>Guia Rapido</Text>
      {/* Campo de seleção de serviço */}
      <View style={styles.serviceContainer}>
    
        <Picker
          style={styles.servicePicker}
          selectedValue={selectedService}
          onValueChange={(itemValue, itemIndex) => setSelectedService(itemValue)}
        >
            
          <Picker.Item style={styles.servicePickerTitle} label="Selecione um serviço que deseja: " value="" />
          {services.map((service, index) => (
            <Picker.Item key={index} label={service} value={service} />
          ))}
          <Text>Fechar</Text>
        </Picker>
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
    padding: 16,
    backgroundColor: 'white',
  },
  titleContainer: {
    backgroundColor: 'green',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    bottom: 20,
    paddingTop: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    borderWidth: 1,  // Largura da borda
    borderColor: '#ccc',  // Cor da borda
  },

  quickGuide: {
    fontSize: 12,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 50,
    bottom: -40,



  },
  
  servicePicker: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },

  servicePickerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  searchContainer: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  searchIcon: {
    padding: 10,
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
