import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';

const locations = [
  {
    id: 1,
    title: 'Apollo Hospital',
    description: 'Multispecialty hospital in Delhi',
    latitude: 28.5675,
    longitude: 77.21,
    image: 'https://picsum.photos/id/1011/200/150',
  },
  {
    id: 2,
    title: 'Fortis Hospital',
    description: 'Healthcare facility in Gurgaon',
    latitude: 28.4595,
    longitude: 77.0266,
    image: 'https://picsum.photos/id/1025/200/150',
  },
  {
    id: 3,
    title: 'AIIMS',
    description: 'All India Institute of Medical Sciences',
    latitude: 28.5672,
    longitude: 77.2105,
    image: 'https://picsum.photos/id/1035/200/150',
  },
  {
    id: 4,
    title: 'Max Super Speciality Hospital',
    description: 'Top hospital in Saket, Delhi',
    latitude: 28.5245,
    longitude: 77.2045,
    image: 'https://picsum.photos/id/1041/200/150',
  },
  {
    id: 5,
    title: 'Medanta Hospital',
    description: 'Advanced medical care in Gurgaon',
    latitude: 28.4811,
    longitude: 77.0863,
    image: 'https://picsum.photos/id/1050/200/150',
  },
  {
    id: 6,
    title: 'BLK Super Speciality Hospital',
    description: 'Renowned hospital in Delhi',
    latitude: 28.6448,
    longitude: 77.2167,
    image: 'https://picsum.photos/id/1060/200/150',
  },
  {
    id: 7,
    title: 'Sir Ganga Ram Hospital',
    description: 'Popular hospital in Delhi',
    latitude: 28.6333,
    longitude: 77.195,
    image: 'https://picsum.photos/id/1070/200/150',
  },
  {
    id: 8,
    title: 'Indraprastha Apollo Hospital',
    description: 'Leading healthcare center in Delhi',
    latitude: 28.5622,
    longitude: 77.197,
    image: 'https://picsum.photos/id/1080/200/150',
  },
];

const LocationScreen = () => {
  const navigation = useNavigation();

  const handleMarkerPress = location => {
    navigation.navigate('LocationDetails', { location });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Favorites', { location: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.itemImage}
        resizeMode="cover"
      />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDesc}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* Search Bar */}
      <TouchableOpacity activeOpacity={.9} onPress={()=>navigation.navigate("Search")} style={styles.searchContainer}>
        <Text>Search....</Text>
      </TouchableOpacity>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.5675,
          longitude: 77.21,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
            description={location.description}
            onPress={() => handleMarkerPress(location)}
          />
        ))}
      </MapView>

      {/* Overlay FlatList */}
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          data={locations}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  searchContainer: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: colors.background,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: colors.border,
    position: 'absolute',
    top: 40,
    left: 20,
    right: 10,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  listContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  item: {
    width: 150,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: { fontSize: 14, fontWeight: '600' },
  itemDesc: { fontSize: 12, color: '#666' },
  itemImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
  },
});
