import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // or use Feather, FontAwesome, etc.

const BaseTextInput = ({ icon, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      {/* <Ionicons name={icon} size={20} color="#999" style={styles.icon} /> */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default BaseTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
