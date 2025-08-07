import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { categories } from '../data/dummy';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const CategoriasSection = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={[styles.item, { backgroundColor: item.color || '#eee' }]}
        onPress={() => {
          console.log('Pressed:', item.name);
        }}
      >
        <Image source={item.img} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        numColumns={4}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default CategoriasSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    // paddingTop: 8,
  },
  flatListContent: {
    marginHorizontal: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginTop: 12,
  },
  itemContainer: {
    alignItems: 'center',
  },
  item: {
    width: 90,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  name: {
    fontSize: 13,
    color: '#4B5563',
    fontFamily: fonts.BOLD,
  },
});
