import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import OverlayContainer from './OverlayContainer';

const LEI_COLLECTION = [
  { id: '1', name: 'Ilima Lei', image: require('../assets/images/ilima.png'), screen: 'Ilima Lei' },
  { id: '2', name: 'Maile Lei', image: require('../assets/images/maile.png'), screen: 'Maile Lei' },
  { id: '3', name: 'Pakalana Lei', image: require('../assets/images/pakalana.png'), screen: 'Pakalana Lei' },
  { id: '4', name: 'Plumeria Lei', image: require('../assets/images/plumeria.png'), screen: 'Plumeria Lei' },
  { id: '5', name: 'Puakenikeni Lei', image: require('../assets/images/puakenikeni.png'), screen: 'Puakenikeni Lei' },
  { id: '6', name: 'Orchid Lei', image: require('../assets/images/orchid.png'), screen: 'Orchid Lei' },
  { id: '7', name: 'Pikake Lei', image: require('../assets/images/pikake.png'), screen: 'Pikake Lei' },
  { id: '8', name: 'Carnation Lei', image: require('../assets/images/carnation.png'), screen: 'Carnation Lei' }, // New entry
];

const MyLeiCollectionScreen = ({ navigation }) => {
  return (
    <OverlayContainer backgroundImage={require('../assets/images/collection-bkg.jpg')}>
      <View style={styles.container}>
        <Text style={styles.title}>My Lei Collection</Text>
        <FlatList
          data={LEI_COLLECTION}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.leiItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image source={item.image} style={styles.leiImage} />
              <Text style={styles.leiName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
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
  leiItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  leiImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  leiName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a1b9a',
    textAlign: 'center',
  },
});

export default MyLeiCollectionScreen;