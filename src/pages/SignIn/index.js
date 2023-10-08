import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignIn() {
  const navigation = useNavigation();
  const [rememberAccess, setRememberAccess] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Seja Bem-Vindo(a)</Text>
          <Text style={styles.message}>Livre Serviços</Text>
        </Animatable.View>

        <View style={styles.containerFormLogin}>
          <Text style={styles.titleLogin}>Email</Text>
          <TextInput placeholder="Digite um email." style={styles.input} />

          <Text style={styles.titleLogin}>Senha</Text>
          <TextInput placeholder="Digite sua senha.." style={styles.input} secureTextEntry />

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('PasswordReset')}>
            <Text style={{ color: 'red' }}>Esqueci minha Senha</Text>
          </TouchableOpacity>

          <View style={styles.rememberAccessContainer}>
            <CheckBox
              containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
              title="Lembrar acesso"
              checked={rememberAccess}
              onPress={() => setRememberAccess(!rememberAccess)}
              textStyle={{ color: 'black' }}
              checkedColor="green"
            />
          </View>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonRegisterText}>Não possui uma conta? Cadastre-se.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('UpLoadImage')}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          {/* Botão "Acessar usando meu Id Apple" */}
          <TouchableOpacity
            style={styles.appleButtonContainer}
            onPress={() => console.log("Acessar usando meu Id Apple clicado")}>
            <TouchableOpacity
              style={styles.appleButton}
              onPress={() => console.log("Acessar usando meu Id Apple clicado")}>
              <Icon name="apple" size={20} color="white" style={styles.icon} />
              <Text style={styles.appleButtonText}>Acessar usando meu Id Apple</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Botão "Acessar usando conta G-mail" */}
          <TouchableOpacity
            style={styles.gmailButtonContainer}
            onPress={() => console.log("Acessar usando conta G-mail clicado")}>
            <TouchableOpacity
              style={styles.gmailButton}
              onPress={() => console.log("Acessar usando conta G-mail clicado")}>
              <Text style={styles.gmailButtonText}>Acessar usando conta G-mail</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    fontWeight: 'bold',
    paddingStart: '8%',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
    alignSelf: 'center',
  },

  containerFormLogin: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '8%',
    paddingEnd: '8%',
    paddingBottom: 50, // Adicionei paddingBottom para evitar que os últimos elementos fiquem cobertos pelo teclado
  },
  titleLogin: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  forgotPassword: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: -10,
    marginLeft: 8,
  },

  rememberAccessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -35,
    marginLeft: 180,
    justifyContent: 'flex-end',
  },

  buttonRegister: {
    marginTop: 8,
    alignSelf: 'center',
  },

  buttonRegisterText: {
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

  appleButtonContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 40,
    marginTop: 20,
  },

  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appleButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },

  gmailButtonContainer: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
  },

  gmailButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gmailButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
