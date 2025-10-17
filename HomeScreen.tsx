import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const destinasi = {
    nama: 'Curug Sawer Sukabumi',
    hargaTiket: 25000,
    gambar: 'https://www.nativeindonesia.com/foto/curug-sawer-sukabumi-1.jpg',
  };

  return (
    <ImageBackground
      source={require('../../assets/gambar1.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Your Next Adventure{'\n'}Starts Here</Text>
        <Text style={styles.subtitle}>
          Life's too short to stay in one place. Find your next favorite city,
          beach, or mountain and let's get moving!
        </Text>

        {/* Kirim data destinasi ke DetailScreen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detail', { destinasi })}
        >
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00C48C',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
