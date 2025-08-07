import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const BaseButton = ({
  title = 'Button',
  onPress,
  style = {},
  textStyle = {},
  disabled = false,
  loading = false,
  backgroundColor = colors.primary,
  textColor = '#fff',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.disabled : backgroundColor },
        style,
      ]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={textColor} size="small" />
      ) : (
        <Text style={[styles.text, { color: textColor }, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.BOLD,
  },
});
