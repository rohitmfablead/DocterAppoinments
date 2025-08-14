import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import BaseLayout from '../components/BaseLayout';

const doctors = [
  {
    id: 1,
    name: 'Dr. David Patel',
    specialty: 'Cardiologist',
    clinic: 'Cardiology Center, USA',
    rating: 5,
    reviews: 1872,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    category: 'Cardiologist',
  },
  {
    id: 2,
    name: 'Dr. Jessica Turner',
    specialty: 'Gynecologist',
    clinic: "Women's Clinic, Seattle, USA",
    rating: 4.9,
    reviews: 127,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    category: 'General',
  },
  {
    id: 3,
    name: 'Dr. Michael Johnson',
    specialty: 'Orthopedic Surgery',
    clinic: 'Maple Associates, NY, USA',
    rating: 4.7,
    reviews: 5223,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    category: 'Orthopedic',
  },
  {
    id: 4,
    name: 'Dr. Emily Walker',
    specialty: 'Pediatrics',
    clinic: 'Serenity Pediatrics Clinic',
    rating: 5,
    reviews: 405,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    category: 'General',
  },
];

const categories = ['All', 'General', 'Cardiologist', 'Dentist', 'Orthopedic'];

const DoctorScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const heartIconUrl = 'https://cdn-icons-png.flaticon.com/512/833/833472.png';
  const starIconUrl = 'https://cdn-icons-png.flaticon.com/512/833/833300.png';

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderDoctor = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("Details")} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <Text style={styles.clinic}>{item.clinic}</Text>
        <View style={styles.ratingContainer}>
          <Image source={{ uri: starIconUrl }} style={styles.starIcon} />
          <Text style={styles.ratingText}>
            {item.rating} | {item.reviews} Reviews
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.heart}>
        <Image source={{ uri: heartIconUrl }} style={styles.heartIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <BaseLayout>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search doctor..."
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.categoryContainer}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryBtn,
                selectedCategory === cat && styles.categorySelected,
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextSelected,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={filteredDoctors}
          renderItem={renderDoctor}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f8f8f8' },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  categoryContainer: { flexDirection: 'row', marginBottom: 10 },
  categoryBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 8,
  },
  categorySelected: { backgroundColor: '#007AFF' },
  categoryText: { color: '#333' },
  categoryTextSelected: { color: '#fff', fontWeight: '600' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
    alignItems: 'center',
    elevation: 2,
  },
  image: { width: 60, height: 60, borderRadius: 30 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontSize: 16, fontWeight: '600' },
  specialty: { fontSize: 13, color: '#666', marginVertical: 2 },
  clinic: { fontSize: 12, color: '#999' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  ratingText: { marginLeft: 4, fontSize: 12, color: '#666' },
  heart: { padding: 5 },
  starIcon: { width: 14, height: 14, marginRight: 4 },
  heartIcon: { width: 20, height: 20 },
});

export default DoctorScreen;
