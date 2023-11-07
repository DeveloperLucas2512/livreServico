import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Platform, PermissionsAndroid, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import Redirection from '../Redirection';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('screen');

export default function HomeWork() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showLocationButtons, setShowLocationButtons] = useState(false);
  const [useCustomLocation, setUseCustomLocation] = useState(false);
  const [customLocation, setCustomLocation] = useState('');

  const services = [
    'Pedreiro',
    'Encanador',
    'Pintor',
    'Jardineiro',
    'Carpinteiro',
    'Consertos Gerais',
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

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Permissão de localização concedida");
          // Você pode chamar a função para buscar a localização atual aqui
        } else {
          console.log("Permissão de localização negada");
        }
      } catch (error) {
        console.error("Erro ao solicitar permissão de localização:", error);
      }
    }
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>DIGITE O SERVIÇO QUE DESEJA ENCONTRAR OU ACESSE A BUSCA RÁPIDA!</Text>
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
            onSelect={(index) => {
              setSelectedService(dropdownOptions[index]);
              setShowLocationButtons(true);
            }}
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
        
        {showLocationButtons && (
          <View style={styles.locationButtonContainer}>
            <MapView
              onMapReady={requestLocationPermission}
              style={{ width: width, height: height }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={() => setUseCustomLocation(false)}
            >
              <Text style={styles.titleLocation}>BUSCAR PROFISSIONAL USANDO</Text>
              <Text style={styles.titleLocation}>MINHA LOCALIZAÇÃO ATUAL</Text>
            </MapView>
            <Text style={styles.OptionsSearch}>OU</Text>
            <MapView
              style={{ width: width, height: height }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={() => setUseCustomLocation(true)}
            >
              <Text style={styles.titleLocation}>BUSCAR PROFISSIONAL USANDO</Text>
              <Text style={styles.titleLocation}>OUTRA LOCALIZAÇÃO</Text>
            </MapView>
            {useCustomLocation && (
              <View style={styles.customLocationContainer}>
                <TextInput
                  style={styles.customLocationInput}
                  placeholder="Digite a localização nova"
                  value={customLocation}
                  onChangeText={(text) => setCustomLocation(text)}
                />
                <TouchableOpacity
                  style={styles.customLocationButton}
                  onPress={() => {
                    // Adicione aqui a lógica para buscar profissionais com a localização inserida pelo usuário
                    // Você pode usar a variável 'customLocation' para obter a localização inserida pelo usuário
                  }}
                >
                  <Icon name="search" size={16} color="#fff" />
                  <Text style={styles.customLocationButtonText}>Buscar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

<View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Icon name="home" size={24} />
            <Text>Início</Text>
          </TouchableOpacity>
                
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("SignIn")}>
            <Icon name="user" size={24} />
            <Text>Perfil</Text>
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
    marginBottom: 20,
    paddingTop: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },

  titleLocation: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },

  OptionsSearch: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },

  quickGuide: {
    fontSize: 12,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
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

  locationButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  locationButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  customLocationContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  customLocationInput: {
    minHeight: 50,
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  customLocationButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  customLocationButtonText: {
    color: 'white',
    marginLeft: 5,
  },
});
