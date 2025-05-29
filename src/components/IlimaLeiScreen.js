import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const IlimaLeiScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/ilima.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Ilima Lei</Text>
          <Text style={styles.info}>
            The Ilima lei is made from the delicate ilima flower, known as the "royal lei" of Oahu. It symbolizes love and respect.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Matches Carnation overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6a1b9a',
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: '#6a1b9a',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default IlimaLeiScreen;
