import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* Transparent Status Bar */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Full-screen Image */}
      <ImageBackground
        source={require('../assets/images/Splash.png')}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});






