import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const OverlayContainer = ({ children, backgroundImage }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>{children}</View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OverlayContainer;