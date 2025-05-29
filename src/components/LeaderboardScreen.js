import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MOCK_LEADERBOARD_DATA = [
  { name: 'Lani', steps: 12500 },
  { name: 'Kai', steps: 10200 },
  { name: 'Nalu', steps: 9000 },
  { name: 'You', steps: 8500 },
];

const LeaderboardScreen = () => {
  const getMedal = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return '';
  };

  const getBackgroundColor = (index) => {
    if (index === 0) return '#f9f5e3';
    if (index === 1) return '#f0f4ff';
    if (index === 2) return '#f3e6ff';
    return '#fff';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Leaderboard</Text>
      <FlatList
        data={MOCK_LEADERBOARD_DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.item, { backgroundColor: getBackgroundColor(index) }]}>
            <Text style={styles.rank}>
              {getMedal(index)} {index + 1}.
            </Text>
            <Text style={[styles.name, item.name === 'You' && styles.you]}>
              {item.name}
            </Text>
            <Text style={styles.steps}>{item.steps.toLocaleString()} steps</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ede7f6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6a1b9a',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 50,
    color: '#6a1b9a',
  },
  name: {
    fontSize: 18,
    flex: 1,
    color: '#333',
  },
  you: {
    fontWeight: 'bold',
    color: '#00897b',
  },
  steps: {
    fontSize: 16,
    color: '#6a1b9a',
    fontStyle: 'italic',
  },
});

export default LeaderboardScreen;
