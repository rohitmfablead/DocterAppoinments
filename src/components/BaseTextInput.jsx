import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import CustomImage from './CustomImage'; 
import colors from '../utils/colors';

const BaseTextInput = ({ icon, placeholder, secureTextEntry, keyboardType,style, ...props }) => {
  return (
    <View style={[styles.inputContainer,style]}>
      {icon && <CustomImage displaySource={icon} style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 12,
    height:50,
    width: '100%',
    borderWidth:1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default BaseTextInput;
