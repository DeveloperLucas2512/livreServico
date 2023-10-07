import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function SplashScreen() {
  const navigation = useNavigation();
  const [showImediatos, setShowImediatos] = useState(false);

  const handleImageLoad = () => {
    setShowImediatos(true);
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Redirection'); // Navegue para a próxima tela após 2 segundos
    }, 2000); // 2000 milissegundos = 2 segundos
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.titleContainer}>
        <Text style={styles.title}>Seja um Profissional Livre</Text>
      </Animatable.View>

      <Image
        source={require('../../assets/image1.png')}
        style={styles.imageScreen}
        resizeMode="cover"
        onLoad={handleImageLoad}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },

  imageScreen: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: -120,
    width: '100%',
    height: 100,
  },

  titleContainer: {
    marginTop: '60%',
    alignSelf: 'center',
    bottom: 0,
  },
  title: {
    top: -180,
    paddingTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    bottom: 0,
  },
});
