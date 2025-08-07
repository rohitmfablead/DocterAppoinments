import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../utils/colors';

const CustomImage = ({ displaySource, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={displaySource}
        style={styles.imageStyle}
        resizeMode="cover"
      />
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 15,
    height: 15,
    tintColor: colors.textSecondary,
  },
  imageStyle: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});
