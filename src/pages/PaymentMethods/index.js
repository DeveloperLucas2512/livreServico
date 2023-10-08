import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ServiceProvider from '../ServiceProvider';

export default function PaymentMethods() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ESCOLHA O MÉTODO DE PAGAMENTO:</Text>
      
      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.optionText}>BOLETO BANCÁRIO</Text>
        <Text style={styles.subTitle}>Liberação em até 3 dias úteis</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.optionText}>PIX</Text>
        <Text style={styles.subTitle}>Liberação imediata</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.optionText}>QR CODE</Text>
        <Text style={styles.subTitle}>Liberação imediata</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.optionText}>CARTÃO DE CRÉDITO</Text>
        <Text style={styles.subTitle}>Liberação imediata</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.optionText}>MERCADO PAGO</Text>
        <Text style={styles.subTitle}>Liberação imediata</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption}>
        <Text style={styles.optionText}>PAYPAL</Text>
        <Text style={styles.subTitle}>Liberação imediata</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.backButton}
         onPress={() => navigation.navigate("ServiceProvider")}>
          <Text style={styles.backButtonText}>VOLTAR</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

    backButton: {
        backgroundColor: 'green',
        width: '80%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      backButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  paymentOption: {
    width: '80%',
    height: 80,  // Aumentei a altura para acomodar o subtítulo
    backgroundColor: '#007BFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.7)', // Cor de placeholder
    fontSize: 14,
    marginTop: 5,
  },
});
