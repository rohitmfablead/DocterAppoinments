// components/SectionHeader.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import fonts from '../utils/fonts';
import colors from '../utils/colors';

const SectionHeader = ({ title, actionText = 'See All', onPressAction,style }) => {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.title}>{title}</Text>

      {onPressAction && (
        <TouchableOpacity onPress={onPressAction}>
          <Text style={styles.action}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily:fonts.BOLD,
    color:colors.textPrimary
  },
  action: {
    fontSize: 14,
   
    fontFamily:fonts.BOLD,
    color:colors.primary
  },
});
