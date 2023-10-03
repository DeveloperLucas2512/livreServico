import React from 'react';
import { View,
   Text,
    StyleSheet, 
    Image, 
    TouchableOpacity } from 'react-native';

    import {useNavigation} from '@react-navigation/native'

    import SignIn from '../SignIn';

    import * as Animatable from 'react-native-animatable'

   export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerImageHome}>
        <Animatable.Image
          animation= "flipInY"
          source={require('../../assets/imageHome.png')}
          style={styles.imageHome}
          resizeMode="cover"
        />
      </View>

      <Animatable.View delay={600} animation={{
          from: { translateY: 300 }, // Começa a animação desde o fundo da tela
          to: { translateY: 0 }, // Termina a animação na posição original
        }}
        duration={1000} // Ajuste a duração da animação conforme desejado (em milissegundos)
        style={styles.containerFormHome}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Livre Serviços Imediatos</Text>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Seja Livre!!</Text>
        </View>

        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("SignIn")}>
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
  containerImageHome: {
    flex: 2,
    backgroundColor: '#38a69d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFormHome: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 28,
    marginBottom: 10,
  },
  subTitle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageHome: {
    width: '100%',
    height: '80%',
    borderRadius: 1000,
    borderWidth: 4, // Largura da borda
    borderColor: 'black', // Cor da borda
  },
  
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
