import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import OverlayContainer from './OverlayContainer';

const screenWidth = Dimensions.get('window').width;

const HawaiianLeiTracker = ({ navigation, route }) => {
  const [steps, setSteps] = useState(0);
  const [subscription, setSubscription] = useState(null);
  const dailyGoal = 10000;

  useEffect(() => {
    // Subscribe to accelerometer updates
    const subscribe = Accelerometer.addListener((data) => {
      const { x, y, z } = data;
      const acceleration = Math.sqrt(x * x + y * y + z * z);

      // Threshold to detect a step
      if (acceleration > 1.2) {
        setSteps((prevSteps) => prevSteps + 1);
      }
    });

    setSubscription(subscribe);

    // Cleanup subscription on unmount
    return () => {
      subscribe && subscribe.remove();
      setSubscription(null);
    };
  }, []);

  const percentage = Math.min((steps / dailyGoal) * 100, 100);
  const flowerCount = Math.floor(percentage / 10); // Each 10% adds a flower
  const flowers = Array(flowerCount).fill('🌸'); // Replace '🌸' with an image if needed

  return (
    <OverlayContainer backgroundImage={require('../assets/collection-bkg.jpg')}>
      <View style={styles.container}>
        <Text style={styles.title}>Hawaiian Lei Tracker</Text>
        <Text style={styles.info}>Track your progress toward your daily goal!</Text>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
        </View>

        {/* Flower Lei */}
        <Text style={styles.flowerLei}>{flowers.join(' ')}</Text>

        {/* Steps Info */}
        <Text style={styles.stepsInfo}>
          {steps} steps taken / {dailyGoal} steps goal
        </Text>
      </View>
    </OverlayContainer>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 10,
    color: '#6a1b9a',
    textAlign: 'center',
  },
  progressBarContainer: {
    width: screenWidth * 0.8, // 80% of the screen width
    height: 20,
    backgroundColor: '#e0e0e0', // Light gray background
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#ffb3ba', // Pastel pink fill
    borderRadius: 10,
  },
  flowerLei: {
    fontSize: 24,
    marginTop: 20,
    color: '#6a1b9a',
    textAlign: 'center',
  },
  stepsInfo: {
    fontSize: 16,
    marginTop: 10,
    color: '#6a1b9a',
    textAlign: 'center',
  },
});

export default HawaiianLeiTracker;