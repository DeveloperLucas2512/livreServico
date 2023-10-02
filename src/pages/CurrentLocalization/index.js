import { View, StyleSheet, Text, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import i18n from 'i18n-js';

// Configuração do idioma para português brasileiro
const translations = {
  pt_BR: {
    locationPermissionDenied: 'A permissão de localização não foi concedida.',
    allowLocation: 'Permitir Localização',
  },
};

i18n.translations = translations;
i18n.locale = 'pt_BR';

export default function CurrentLocalization() {
  const [origin, setOrigin] = useState(null);
  const [locationPermission, setLocationPermission] = useState(null);

  useEffect(() => {
    // Verifique a permissão de localização
    Location.getForegroundPermissionsAsync().then((permission) => {
      setLocationPermission(permission.status);
    });
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        console.log('Localização atual:', location);
        setOrigin(location.coords);
      } else {
        throw new Error('Permissão de localização não concedida');
      }
    } catch (error) {
      console.error('Erro ao obter a localização:', error);
    }
  };

  return (
    <View style={styles.container}>
      {locationPermission === 'granted' ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: origin ? origin.latitude : -19.90,
            longitude: origin ? origin.longitude : -43.96,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
        >
          {/* Adicione marcadores ou outras informações de mapa aqui */}
        </MapView>
      ) : (
        <>
          <Text>{i18n.t('locationPermissionDenied')}</Text>
          <Button title={i18n.t('allowLocation')} onPress={requestLocationPermission} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
});