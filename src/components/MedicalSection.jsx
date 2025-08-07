import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DOCTERS1, medical1, medical2 } from '../assets/images';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const medicalItems = [
  {
    id: '1',
    name: 'Sunrise Health Clinic',
    image: medical1,
  },
  {
    id: '2',
    name: 'Golden Cardiology Center',
    image: medical2,
  },
  {
    id: '3',
    name: 'Dermatologist',
    image: DOCTERS1,
  },
  {
    id: '4',
    name: 'Neurologist',
    image: DOCTERS1,
  },
  // Add more items as needed
];

const MedicalSection = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={() => console.log('Pressed:', item.name)}
      >
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={medicalItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default MedicalSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  listContent: {
    paddingRight: 16,
  },
  itemContainer: {
    alignItems: 'center',
    width: 232,
    marginRight: 16,
  },
  imageWrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    width: '100%',
    height: 121,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 13,
       color:"#4B5563",
       fontFamily:fonts.BOLD
  },
});
