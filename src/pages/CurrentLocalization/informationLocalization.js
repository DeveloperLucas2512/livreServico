import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function InformationLocalization() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.titleContainer}>
        <Text style={styles.title}>Para continuar</Text>
        <Text style={styles.title}>navegando como cliente</Text>
        <Text style={styles.title}>é necessário ativar sua localização</Text>
      </Animatable.View>

      <TouchableOpacity
        style={styles.buttonGreen}
        onPress={() => navigation.navigate('CurrentLocalization')}
      >
        <Text style={styles.buttonText}>Ativar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonRed}
        onPress={() => navigation.navigate('Redirection')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },

  buttonGreen: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonRed: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
