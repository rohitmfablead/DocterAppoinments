import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import BaseLayout from '../components/BaseLayout';

const BookAppointmentScreen = () => {
  // Sample data: booked slots for each date
  const bookedSlotsByDate = {
    '2023-06-24': ['09:00 AM', '10:30 AM', '03:00 PM'],
    '2023-06-25': ['09:30 AM', '11:00 AM', '04:00 PM'],
    '2023-06-26': ['10:00 AM', '03:30 PM', '05:00 PM'],
  };

  const [selectedDate, setSelectedDate] = useState('2023-06-24');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
    '05:00 PM',
    '05:30 PM',
  ];

  // Check if a time slot is booked for the selected date
  const isSlotBooked = slot => {
    return bookedSlotsByDate[selectedDate]?.includes(slot);
  };

  return (
   <BaseLayout>
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Book Appointment</Text>

      {/* Calendar Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <Calendar
          current={'2023-06-24'}
          onDayPress={day => {
            setSelectedDate(day.dateString);
            setSelectedTime(''); // Reset selected time when date changes
          }}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#007BFF' },
          }}
          theme={{
            selectedDayBackgroundColor: '#007BFF',
            todayTextColor: '#007BFF',
            arrowColor: '#007BFF',
          }}
        />
      </View>

      {/* Time Slots Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Hour</Text>
        <View style={styles.timeSlots}>
          {timeSlots.map((slot, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlot,
                isSlotBooked(slot) && styles.bookedTimeSlot,
                selectedTime === slot && styles.selectedTimeSlot,
              ]}
              onPress={() => !isSlotBooked(slot) && setSelectedTime(slot)}
              disabled={isSlotBooked(slot)}
            >
              <Text
                style={[
                  styles.timeSlotText,
                  isSlotBooked(slot) && styles.bookedTimeSlotText,
                  selectedTime === slot && styles.selectedTimeSlotText,
                ]}
              >
                {slot}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} disabled={!selectedTime}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
   </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  bookedTimeSlot: {
    backgroundColor: '#555',
    borderColor: '#555',
  },
  selectedTimeSlot: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  timeSlotText: {
    color: '#fff',
  },
  bookedTimeSlotText: {
    color: '#aaa',
  },
  selectedTimeSlotText: {
    color: '#fff',
  },
  confirmButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookAppointmentScreen;
