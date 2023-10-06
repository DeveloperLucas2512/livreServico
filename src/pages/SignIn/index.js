import {
  View, 
  Text,
  StyleSheet, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import Redirection from '../Redirection';


export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
      <Text style={styles.message}>Seja Bem-Vindo(a)</Text>
      <Text style={styles.message}>Livre Serviços</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerFormLogin} >
      <Text style={styles.titleLogin}>Email</Text>
      <TextInput
         placeholder="Digite um email."
         style={styles.input}
      />  

      <Text style={styles.titleLogin}>Senha</Text>
      <TextInput
         placeholder="Digite sua senha.."
         style={styles.input}
      /> 

      <TouchableOpacity 
      style={styles.buttonRegister}
      onPress={() => navigation.navigate("Register")}>
        <Text style={styles.buttonRegisterText}>Nao possui uma conta? Cadastre-se.</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("Redirection")}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

    
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },

  containerHeader:{
    marginTop: '14%.',
    margimBottom: '8%',
    fontWeight: 'bold',
    paddingStart:'8%',
    },
    message:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 50,
      alignSelf: 'center'
    },

    containerFormLogin:{
      backgroundColor: '#fff',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart:'8%',
      paddingEnd:'8%',
      bottom: -50,
    },
    titleLogin: {
      fontSize: 20,
      marginTop:28,
    },
    input:{
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },

    buttonAcess:{
      backgroundColor: '#38a69d',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    buttonAcessTitle:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },

    buttonRegister:{
      marginTop: 8,
      alignSelf: 'center',
    },

    buttonRegisterText:{
      color: '#a1a1a1',
      fontWeight: 'bold', 
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
      
})