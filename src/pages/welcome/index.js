import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import UpLoadImage from '../UpLoadImage';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native';

export default function Welcome() {
  const navigation = useNavigation();
  const [showImediatos, setShowImediatos] = useState(false);

  const handleImageLoad = () => {
    setShowImediatos(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowImediatos(true);
    }, 1500);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.containerBottom}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/imageHome.png')}
            style={styles.imageHome}
            resizeMode="cover"
            onLoad={handleImageLoad}
          />
          {showImediatos && (
            <Animatable.View
              animation={{
                from: { opacity: 0, scale: 0.9 },
                to: { opacity: 1.2, scale: 1.3 },
              }}
              duration={2000}
              style={styles.imediatosContainer}
            >
              <Text style={styles.imediatosTitle}>I M E D I A T O S</Text>
            </Animatable.View>
          )}
        </View>

        <Image
          source={require('../../assets/imageHome2.png')}
          style={styles.imageHome2}
          resizeMode="cover"
          onLoad={handleImageLoad}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerBottom: {
    height: 3000,
    marginTop: 120,
    flex: 1,
    bottom: 25,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  imageContainer: {
    bottom: -10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHome: {    
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50,
    width: '100%',
    height: 300,
  },
  imageHome2: {
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 20,
    width: '90%',
    height: 200,
    bottom: 0,
  },

  button: {
    width: '80%',
    bottom: 0,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 40,
    marginTop: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  imediatosContainer: {
    marginTop: -40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imediatosTitle: {
    top: -10,
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'darkblue',
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
});
