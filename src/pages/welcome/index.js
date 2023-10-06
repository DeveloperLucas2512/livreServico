import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignIn from '../SignIn';
import * as Animatable from 'react-native-animatable';

export default function Welcome() {
  const navigation = useNavigation();
  const [showImediatos, setShowImediatos] = useState(false);

  // Função a ser chamada quando a imagem for carregada
  const handleImageLoad = () => {
    setShowImediatos(true);
  };

  useEffect(() => {
    // Defina um atraso para mostrar o título "Imediatos" depois da carga da imagem
    setTimeout(() => {
      setShowImediatos(true);
    }, 1500); // Ajuste o atraso conforme desejado (em milissegundos)
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/imageHome.png')}
          style={styles.imageHome}
          resizeMode="cover"
          onLoad={handleImageLoad} // Chama a função quando a imagem carregar
        />
       {showImediatos && (
      <Animatable.View
        animation={{
          from: { opacity: 0, scale: 0.9 }, // Começa com opacidade 0 e escala reduzida
          to: { opacity: 1.2, scale: 1.3 }, // Termina com opacidade 1 e escala normal
        }}
        duration={2000} // Ajuste a duração da animação conforme desejado (em milissegundos)
        style={styles.imediatosContainer}
      >
        <Text style={styles.imediatosTitle}>
          I M E D I A T O S
        </Text>
      </Animatable.View>
    )}  

      </View>

      <Animatable.View
        
        style={[styles.containerFormHome, { marginTop:27 }]} // Adicionando marginTop
      >
        <Image
          source={require('../../assets/imageHome2.png')}
          style={styles.imageHome2}
          resizeMode="cover"
          onLoad={handleImageLoad} // Chama a função quando a imagem carregar
        />
      
        <TouchableOpacity
          style={[styles.button, {marginTop: 30}]}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerFormHome: {
    flex: 2,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingStart: '5%',
    paddingEnd: '5%',
    bottom: 30,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  subTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  subTitle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageContainer: {

    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHome: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
    height: 300, // Ajuste a altura conforme necessário
  },

  imageHome2: {
    marginTop: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: '100%',
    height: 300, // Ajuste a altura conforme necessário
  },
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 40,
    marginTop: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  imediatosContainer: {
    marginTop: -40, // Posição em relação à imagem
    alignItems: 'center',
    justifyContent: 'center',
  },
  imediatosTitle: {
    top: -10,
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Torna o texto maiúsculo
    color: 'darkblue', // Alterado de 'dark blue' para 'darkblue' (sem espaço)
    letterSpacing: 3, // Espaçamento entre as letras
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra mais escura
    textShadowOffset: { width: 2, height: 2 }, // Ajuste o deslocamento da sombra
    textShadowRadius: 6, // Aumente o raio da sombra para torná-la mais pronunciada
    },

});
