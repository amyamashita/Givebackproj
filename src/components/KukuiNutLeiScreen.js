import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const KukuiNutLeiScreen = () => {
  return (
    <ImageBackground source={require('../assets/kukuibkg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Kukui Nut Lei</Text>
        <Text style={styles.info}>
          The kukui nut lei is a timeless Hawaiian symbol of wisdom, protection, and inner light.
        </Text>
        <Text style={styles.info}>
          Brought to Hawaiʻi by Polynesian settlers, the kukui nut (or “candlenut”) was used to light lamps and create dyes for kapa cloth. Today, they are beautifully polished and strung into durable, long-lasting leis.
        </Text>
        <Text style={styles.info}>
          Unlike floral leis, kukui nut leis can be kept for years as a keepsake and reminder of special moments.
        </Text>
        <Text style={styles.info}>
          These leis come in brown, black, black & white, and blond colors—each one unique.
        </Text>
        <Text style={styles.info}>
          The kukui tree is so significant that it is Hawaiʻi’s state tree, and the lei represents the island of Moloka‘i.
        </Text>
        <Text style={styles.info}>
          🌿 A kukui nut lei is more than just an accessory—it’s a gift of light, honor, and aloha.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6a1b9a',
  },
  info: {
    fontSize: 18,
    marginBottom: 12,
    color: '#6a1b9a',
    textAlign: 'center',
  },
});

export default KukuiNutLeiScreen;
