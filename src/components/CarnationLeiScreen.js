import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CarnationLeiScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/carnation.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Carnation Lei</Text>
          <Text style={styles.info}>
            The <Text style={styles.bold}>Carnation Lei</Text> is a classic symbol of love, admiration, and distinction. Known for its vibrant colors and long-lasting freshness, the carnation lei is often used for graduations, weddings, and other special celebrations.
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white overlay for readability
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

export default CarnationLeiScreen;