import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import Redirection from '../Redirection';

export default function HomeWork() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'Pedreiro',
    'Encanador',
    'Pintor',
    'Jardineiro',
    'Carpinteiro',
    'Limpeza Residencial',
    'Vidraceiro',
    'Instalador e manutencao Ar Condicionado',
    'Marcineiro',
    'Serralheiro',
    'Eletricista Residencial e Industrial',
    'Servicos de Seguranca(Cameras e Alarmes)',
    'Manutenção Predial',
    'Mecanica Automotiva',
    'Marido de Aluguel',
    'Mecanica Maquinas Pesadas',
  ];

  const dropdownOptions = ['Selecione um serviço', ...services];

  return (
    <TouchableWithoutFeedback>
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

        <View style={styles.serviceContainer}>
          <Text style={styles.quickGuide}>Guia Rápido</Text>
          <ModalDropdown
             options={dropdownOptions}
             onSelect={(index) => setSelectedService(dropdownOptions[index])}
            defaultValue={'Selecione um serviço'}
            style={styles.servicePicker}
            textStyle={styles.servicePickerText}
            dropdownStyle={styles.servicePickerDropdown}
            dropdownTextStyle={styles.servicePickerDropdownText}
            adjustFrame={(style) => {
                style.top += 2; 
                return style;
            }}
        />

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
          <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => navigation.navigate("Welcome")}>
          <Icon name="home" size={24} />
          <Text>Início</Text>
        </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 20, // Substitua "bottom" por "marginBottom"
    paddingTop: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center', // Centralize o texto
  },
  quickGuide: {
    fontSize: 12,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10, // Ajuste a margem superior
    alignSelf: 'center', // Centralize o texto
  },
  serviceContainer: {
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  servicePicker: {
    flex: 1,
  },
  servicePickerText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  servicePickerDropdown: {
    marginLeft: -50,
    alignItems: 'center',
    marginTop: 2,
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  servicePickerDropdownText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 10, 

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
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
