import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomImage from '../components/CustomImage';
import { user } from '../assets/icons';
import BaseLayout from '../components/BaseLayout';

const DetailsScreen = ({ navigation }) => {
  return (
    <BaseLayout>
      <ScrollView style={styles.container}>
        {/* Header with Online Image */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://example.com/path/to/doctor_image.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.headerText}>
            <Text style={styles.doctorName}>Dr. David Patel</Text>
            <Text style={styles.specialty}>Cardiologist</Text>
            <View style={styles.clinicInfo}>
              <Text style={styles.clinicName}>
                🏥 Golden Gate Cardiology Center
              </Text>
            </View>
          </View>
        </View>

        {/* Stats Bar */}
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2000+</Text>
            <Text style={styles.statLabel}>Patients</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10+</Text>
            <Text style={styles.statLabel}>Experience</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1,872</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        {/* About Me */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About me</Text>
          <Text style={styles.aboutText}>
            Dr. David Patel, a dedicated cardiologist, brings a wealth of
            experience to Golden Gate Cardiology Center in Golden Gate, CA.
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>view more</Text>
          </TouchableOpacity>
        </View>

        {/* Working Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Time</Text>
          <Text style={styles.timeText}>
            Monday-Friday, 08:00 AM - 08:00 PM
          </Text>
        </View>

        {/* Reviews with Online Image */}
        <View style={styles.section}>
          <View style={styles.reviewHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.review}>
            <Image
              source={{ uri: 'https://example.com/path/to/reviewer_image.jpg' }}
              style={styles.reviewerImage}
            />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewerName}>Emily Anderson</Text>
              <View style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <CustomImage displaySource={user} />
                ))}
              </View>
              <Text style={styles.reviewText}>
                Dr. Patel is a true professional who genuinely cares about his
                patients. I highly recommend Dr. Patel to anyone in need of a
                cardiologist.
              </Text>
            </View>
          </View>
        </View>

        {/* Book Appointment Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('BookingAppoinment',{
            doctorName: 'Dr. David Patel',
            specialty: 'Cardiologist',
          })}
          style={styles.bookButton}
        >
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </BaseLayout>
  );
};

// Styles remain the same as before
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 16,
    color: '#666',
  },
  clinicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  clinicName: {
    fontSize: 14,
    color: '#666',
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  viewMore: {
    color: '#007BFF',
    fontSize: 14,
  },
  timeText: {
    fontSize: 14,
    color: '#666',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  seeAll: {
    color: '#007BFF',
    fontSize: 14,
  },
  review: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  reviewerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
