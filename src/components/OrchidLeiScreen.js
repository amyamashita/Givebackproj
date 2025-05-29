import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const OrchidLeiScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/orchid.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Orchid Lei</Text>
          <Text style={styles.info}>
            The <Text style={styles.bold}>Orchid Lei</Text> represents beauty, love, and elegance—often worn to celebrate special moments and milestones.
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
  bold: {
    fontWeight: 'bold',
  },
});

export default OrchidLeiScreen;

  

