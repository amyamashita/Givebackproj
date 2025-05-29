import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const AddFriendsScreen = () => {
  const [friendName, setFriendName] = useState('');
  const [friendsList, setFriendsList] = useState([]);

  const handleAddFriend = () => {
    if (friendName.trim()) {
      setFriendsList([...friendsList, { id: Date.now().toString(), name: friendName }]);
      setFriendName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Friends</Text>

      <TextInput
        placeholder="Enter friend's name"
        value={friendName}
        onChangeText={setFriendName}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TouchableOpacity onPress={handleAddFriend} style={styles.button}>
        <Text style={styles.buttonText}>Add Friend</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Your Friends</Text>
      <FlatList
        data={friendsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#6a1b9a', marginBottom: 20 },
  input: {
    borderColor: '#b39ddb',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ede7f6',
  },
  button: {
    backgroundColor: '#b39ddb',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  friendItem: {
    padding: 10,
    backgroundColor: '#f3e5f5',
    borderRadius: 5,
    marginBottom: 8,
  },
  friendText: { color: '#6a1b9a', fontSize: 16 },
});

export default AddFriendsScreen;
