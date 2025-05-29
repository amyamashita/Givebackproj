import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import OverlayContainer from './OverlayContainer'; // Assumes this wraps the background image

const UserProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [saved, setSaved] = useState(false);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Please grant access to your media library.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!image || !username.trim()) {
      Alert.alert("Missing Info", "Please enter your username and upload a profile picture.");
      return;
    }

    setSaved(true);
    Alert.alert("Profile Saved", "Your profile has been updated!");
  };

  return (
    <OverlayContainer backgroundImage={require('../assets/collection-bkg.jpg')}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Your Profile</Text>

        <TouchableOpacity onPress={pickImage}>
          <View style={styles.imageContainer}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={styles.placeholder}>Tap to upload image</Text>
            )}
          </View>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        {saved && <Text style={styles.success}>✅ Profile Updated!</Text>}

        <TouchableOpacity
          style={[styles.saveButton, { marginTop: 20 }]}
          onPress={() => navigation.navigate('Add Friends')}
        >
          <Text style={styles.saveButtonText}>Add Friends</Text>
        </TouchableOpacity>
      </View>
    </OverlayContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#6a1b9a',
  },
  input: {
    height: 40,
    borderColor: '#b39ddb',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#ede7f6',
    color: '#333',
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  placeholder: {
    color: '#888',
  },
  saveButton: {
    backgroundColor: '#b39ddb',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  success: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default UserProfileScreen;
